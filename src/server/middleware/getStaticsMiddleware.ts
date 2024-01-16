import express from "express";
import { getStaticsFolder } from "../utils/envUtils";

// Determine the right strategy for static files depending on if we're in dev mode or not
export function getStaticsMiddleware() {
  const staticFolder = getStaticsFolder();
  console.log(
    `[staticsMiddleware] serving static files from ${staticFolder} at /static`,
  );
  return express.static(staticFolder);
}
