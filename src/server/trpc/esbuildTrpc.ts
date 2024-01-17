import { observable } from "@trpc/server/observable";
import EventSource from "eventsource";
import { Router } from "express";
import https from "https";
import { z } from "zod";
import { getEsBuildPort } from "../utils/envUtils";
import { trpc } from "./trpc";

const router = Router();
export default router;

const DELAY = 1000;

// Trust self-signed certificates for local development
const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

const esbuildChunkSchema = z.object({});

export const esbuildTrpcRouter = trpc.router({
  events: trpc.procedure.subscription(() =>
    observable<ChangeEvent>((observer) => {
      try {
        const esbuildUrl = `http://0.0.0.0:${getEsBuildPort()}/esbuild`;

        const source = new EventSource(esbuildUrl, {
          rejectUnauthorized: false,
        });

        source.addEventListener("change", (event) => {
          const parsed = parseChangeEvent(event);
          observer.next(parsed);
        });

        source.addEventListener("connection-error", (event) => {
          console.warn("[esbuild] esbuild event stream error:", event.data);
          observer.error(event);
        });

        source.addEventListener("error", (error) => {
          console.log("forwarding esbuild error");
          observer.error(error);
        });

        return () => source.close();

        // source.addEventListener("change", (event: unknown) => {
        //   const { added, removed, updated } = parseChangeEvent(event);
        //   if (added.length > 0) {
        //     console.log("[esbuild] added:", added);
        //   }
        //   if (removed.length > 0) {
        //     console.log("[esbuild] removed:", removed);
        //   }

        //   const [...links] = document.getElementsByTagName("link");
        //   const linkMap: Record<string, HTMLLinkElement> = {};
        //   for (const link of links) {
        //     // Normalize the url to not include pathnames because they're used for cache busting
        //     const url = new URL(link.href);
        //     linkMap[url.origin + url.pathname] = link;
        //   }

        //   for (const updatedFile of updated) {
        //     const updatedHref = window.origin + "/static" + updatedFile;

        //     const link = linkMap[updatedHref];
        //     if (link != undefined) {
        //       const next = link.cloneNode() as HTMLLinkElement;
        //       const nextHref = new URL(updatedHref);
        //       // append a random hash for cache busting
        //       const cacheBuster = Math.random().toString(36).slice(2);
        //       nextHref.searchParams.set("cacheKey", cacheBuster);
        //       next.href = nextHref.href;
        //       next.onload = () => link.remove();
        //       link.parentNode?.insertBefore(next, link.nextSibling);
        //     } else {
        //       if (!updatedFile.endsWith(".map")) {
        //         location.reload();
        //         return;
        //       }
        //     }
        //   }
        // });

        // source.addEventListener("connection-error", (event) =>
        //   console.warn("[esbuild] esbuild event stream error:", event.data),
        // );

        // let axiosRes: AxiosResponse<Readable, any>;
        // // Request the event stream from the provided URL
        // axios
        //   .get<Readable>(esbuildUrl, {
        //     headers: { Accept: "text/event-stream" },
        //     responseType: "stream",
        //     httpsAgent,
        //   })
        //   .then((ar) => {
        //     axiosRes = ar;
        //     // Forward events from the response stream to the client
        //     axiosRes.data.on("data", (chunk) => {
        //       // Delay it cuz we had some weird race conditions with css building
        //       setTimeout(() => {
        //         observer.next(chunk);
        //       }, DELAY);
        //     });
        //   });

        // // Close the connection when the client disconnects
        // return () => {
        //   axiosRes?.data.destroy();
        // };
      } catch (error) {
        console.error("Error while forwarding events", error);
        observer.error("event: connection-error\n" + "data: " + error + "\n\n");
      }
    })
  ),
});

const changeEventSchema = z.object({ data: z.string() });
const changeEventDataSchema = z.object({
  added: z.array(z.string()),
  removed: z.array(z.string()),
  updated: z.array(z.string()),
});

type ChangeEvent = z.infer<typeof changeEventDataSchema>;

function parseChangeEvent(maybeChangeEvent: unknown): ChangeEvent {
  const changeEvent = changeEventSchema.parse(maybeChangeEvent);
  const maybeData = JSON.parse(changeEvent.data) as unknown;
  return changeEventDataSchema.parse(maybeData);
}
