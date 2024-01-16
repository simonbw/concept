import { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { registerEsbuildHotReload } from "./esbuildHotReload";

export function renderPage(content: ReactNode) {
  const containerElement = document.getElementById("react-container");
  if (!containerElement) {
    throw new Error("Container not mounted");
  }
  const root = createRoot(containerElement);
  root.render(content);

  if (process?.env?.NODE_ENV == "development") {
    registerEsbuildHotReload();
  }
}
