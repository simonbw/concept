import { ConvexReactClient } from "convex/react";

// Inlined at build time by esbuild's `define` (see esbuild-client.config.mjs).
const url = process.env.CONVEX_URL;

if (!url) {
  throw new Error(
    "CONVEX_URL is not set. Run `npx convex dev` locally, or configure it " +
      "in the Vercel project settings.",
  );
}

export const convex = new ConvexReactClient(url);
