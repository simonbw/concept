import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
dotenv.config();

import autoprefixer from "autoprefixer";
import esbuild from "esbuild";
import postcssPlugin from "esbuild-style-plugin";
import fs from "fs";
import fsp from "fs/promises";
import path from "path";
import postcssImport from "postcss-import";
import tailwind from "tailwindcss";

const isDev = process.argv.some((arg) => arg == "--dev");

const pages = fs
  .readdirSync("src/client/pages", { withFileTypes: true })
  .filter((dirent) => dirent.isFile())
  .map((dirent) => `src/client/pages/${dirent.name}`);
const styles = fs
  .readdirSync("src/client/styles")
  .filter((filename) => filename.endsWith("index.css"))
  .map((filename) => `src/client/styles/${filename}`);
console.log({ pages, styles });

// Everything the browser loads lives under /static so it resolves identically
// in the esbuild dev server and on Vercel static hosting.
const context = await esbuild
  .context({
    entryPoints: [...pages, ...styles],
    bundle: true,
    minify: !isDev,
    sourcemap: true,
    outdir: "dist/client/static",
    external: ["/static/*"],
    define: {
      "process.env.NODE_ENV": JSON.stringify(
        isDev ? "development" : "production",
      ),
      "process.env.CONVEX_URL": JSON.stringify(process.env.CONVEX_URL ?? ""),
    },
    plugins: [
      postcssPlugin({
        extract: true,
        postcss: {
          plugins: [postcssImport, tailwind, autoprefixer],
        },
      }),
    ],
  })
  .catch((error) => {
    console.error(`Build error: ${error}`);
    process.exit(1);
  });

await copyStatics();
await writeHtml();

if (isDev) {
  fs.watch("static/", { recursive: true }, async (eventType, filename) => {
    if (eventType == "change") {
      const from = path.join("static", filename);
      const to = path.join("dist/client/static", filename);
      console.log(`copying ${from} to ${to}`);

      try {
        await fsp.cp(from, to, {
          recursive: true,
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      // just a rename
    }
  });

  await context.watch();
  const { host, port } = await context
    .serve({
      servedir: "dist/client",
      fallback: "dist/client/index.html",
      port: Number(process.env.ES_BUILD_DEV_PORT || 3001),
    })
    .catch((error) => {
      console.error(`Build error: ${error}`);
      process.exit(1);
    });
  console.log(`esbuild serving on ${host}:${port}`);
} else {
  await context.rebuild();
  await context.dispose();
}

async function copyStatics() {
  const startTime = performance.now();
  await fsp.mkdir("dist/client/static", { recursive: true });
  console.log(`copying statics to dist/client/static`);
  await fsp.cp("static", "dist/client/static", { recursive: true });
  console.log(`done [${Math.round(performance.now() - startTime)}ms]`);
}

async function writeHtml() {
  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Concept</title>
    <link rel="icon" type="image/png" href="/static/images/favicon.png" />
    <link rel="stylesheet" href="/static/styles/index.css" />
  </head>
  <body>
    <div id="react-container"></div>
    <script src="/static/pages/game-page.js"></script>
  </body>
</html>
`;
  await fsp.mkdir("dist/client", { recursive: true });
  await fsp.writeFile("dist/client/index.html", html);
}
