import { string, z } from "zod";
import { trpcClient } from "../trpc/trpcClient";

export function registerEsbuildHotReload() {
  try {
    trpcClient.esbuild.events.subscribe(undefined, {
      onData: (event) => {
        const { added, removed, updated } = event;

        if (added.length > 0) {
          console.log("[esbuild] added:", added);
        }
        if (removed.length > 0) {
          console.log("[esbuild] removed:", removed);
        }

        const [...links] = document.getElementsByTagName("link");
        const linkMap: Record<string, HTMLLinkElement> = {};
        for (const link of links) {
          // Normalize the url to not include pathnames because they're used for cache busting
          const url = new URL(link.href);
          linkMap[url.origin + url.pathname] = link;
        }

        for (const updatedFile of updated) {
          const updatedHref = window.origin + "/static" + updatedFile;

          const link = linkMap[updatedHref];
          // Update links without refreshing the page
          if (link != undefined) {
            const next = link.cloneNode() as HTMLLinkElement;
            const nextHref = new URL(updatedHref);
            // append a random hash for cache busting
            const cacheBuster = Math.random().toString(36).slice(2);
            nextHref.searchParams.set("cacheKey", cacheBuster);
            next.href = nextHref.href;
            next.onload = () => link.remove();
            link.parentNode?.insertBefore(next, link.nextSibling);
          } else {
            if (!updatedFile.endsWith(".map")) {
              location.reload();
              return;
            }
          }
        }
      },
      onError: (error) => {
        console.error("esbuild error", error);
      },
    });
    console.log("[esbuild] hot reload enabled");
  } catch (error) {
    console.warn("[esbuild] failed to start esbuild listener", error);
  }
}

const changeEventSchema = z.object({ data: string() });
const changeEventDataSchema = z.object({
  added: z.array(z.string()),
  removed: z.array(z.string()),
  updated: z.array(z.string()),
});

function parseChangeEvent(
  maybeChangeEvent: unknown,
): z.infer<typeof changeEventDataSchema> {
  const changeEvent = changeEventSchema.parse(maybeChangeEvent);
  const maybeData = JSON.parse(changeEvent.data) as unknown;
  return changeEventDataSchema.parse(maybeData);
}
