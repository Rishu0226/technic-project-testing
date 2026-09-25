import fs from "fs";
import path from "path";

export function publicImage(src?: string) {
  if (!src) return "";
  if (/^https?:\/\//.test(src)) return src;
  const relative = src.startsWith("/") ? src.slice(1) : src;
  return fs.existsSync(path.join(process.cwd(), "public", relative)) ? src : "";
}
