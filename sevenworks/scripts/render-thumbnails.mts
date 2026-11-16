// Renders every template with the sample resume to public/templates/<id>.png (used by the
// landing page, the template gallery and the dashboard). Run with `pnpm thumbnails` (scripts/thumbnails.mjs) on macOS:
// it uses `sips` to turn the first PDF page into a PNG.
import { execFileSync } from "node:child_process";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { Font, renderToBuffer } from "@react-pdf/renderer";
import sample from "../src/lib/sample-resume.json" with { type: "json" };

const root = process.cwd();
const out = path.join(root, "public", "templates");

// Templates register fonts by URL ("/fonts/..."); point those at public/ on disk.
const register = Font.register.bind(Font);
Font.register = ((opts: Parameters<typeof Font.register>[0]) => {
  const fix = (src: string) => (src.startsWith("/") ? path.join(root, "public", src) : src);
  const o = opts as { src?: string; fonts?: { src: string }[] };
  if (o.src) o.src = fix(o.src);
  if (o.fonts) o.fonts = o.fonts.map((f) => ({ ...f, src: fix(f.src) }));
  return register(opts);
}) as typeof Font.register;

async function main() {
  const { renderTemplate } = await import("../src/app/editor/templates/registry");
  const { TEMPLATES } = await import("../src/lib/templates");
  const tmp = mkdtempSync(path.join(tmpdir(), "sevenworks-"));
  for (const t of TEMPLATES) {
    const pdf = path.join(tmp, `${t.id}.pdf`);
    writeFileSync(pdf, await renderToBuffer(renderTemplate(t.id, sample)));
    execFileSync("sips", ["-s", "format", "png", "-Z", "1100", pdf, "--out", path.join(out, `${t.id}.png`)], { stdio: "ignore" });
    console.log("rendered", t.id);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
