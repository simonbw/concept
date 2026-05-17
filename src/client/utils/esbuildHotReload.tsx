/**
 * Dev-only live reload. esbuild's `serve()` exposes an SSE endpoint at
 * `/esbuild` that emits a `change` event on every rebuild.
 */
export function registerEsbuildHotReload() {
  try {
    new EventSource("/esbuild").addEventListener("change", () => {
      location.reload();
    });
    console.log("[esbuild] hot reload enabled");
  } catch (error) {
    console.warn("[esbuild] failed to start hot reload", error);
  }
}
