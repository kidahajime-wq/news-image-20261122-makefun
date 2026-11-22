// main.ts — entrypoint for the news-image-20261122 competition (Node 22,
// standard library only).
//
// The entry is one image: entry.png, a front page summing up the world news
// of Sunday 22 November 2026, drawn as page.html and rendered by render.mjs
// in this repository. This program copies it to the output directory as
// entry.png, after checking it against the gate's limits (a whole PNG, at
// most 1 MiB, at most 1024 by 1024 pixels), so a broken or oversized image
// fails loudly here instead of at the gate.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const MAX_BYTES = 1_048_576;
const MAX_SIDE = 1024;
const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];

const source = new URL('./entry.png', import.meta.url);
const bytes = readFileSync(source);

if (bytes.length > MAX_BYTES) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the ${MAX_BYTES}-byte gate limit`);
}
if (!PNG_SIGNATURE.every((b, i) => bytes[i] === b)) {
  throw new Error('entry.png does not start with the PNG signature');
}
// The IHDR chunk follows the 8-byte signature: width and height are the
// first two big-endian 32-bit values in it.
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > MAX_SIDE || height > MAX_SIDE) {
  throw new Error(`entry.png is ${width}x${height}, over the ${MAX_SIDE}x${MAX_SIDE} gate limit`);
}

copyFileSync(source, join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
console.log(`entry.png copied: ${width}x${height}, ${bytes.length} bytes`);
