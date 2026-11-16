// Bundles render-thumbnails.mts with esbuild (react-pdf ships ESM-only pieces, so the
// templates must run as ESM) and runs it. Usage: pnpm thumbnails (macOS, needs `sips`).
import { build } from "esbuild";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const outfile = path.join(here, "..", "node_modules", ".cache", "sevenworks-thumbnails.mjs");
await build({
  entryPoints: [path.join(here, "render-thumbnails.mts")],
  outfile,
  bundle: true,
  format: "esm",
  platform: "node",
  packages: "external",
  jsx: "automatic",
  absWorkingDir: path.join(here, ".."),
  logLevel: "warning",
});
await import(pathToFileURL(outfile).href);
