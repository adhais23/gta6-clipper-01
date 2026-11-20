// gta6-clipper-01 entry (Node 22, standard library only).
//
// The video is the entry. This program carries the video's address from the
// repository to the grader: it reads VIDEO.json from the repository root,
// checks that it parses as a JSON object holding a string "url", and writes
// those exact bytes to the output directory, where the gate reads them.
//
// The gate itself checks that the address names a real public YouTube video;
// this program does not judge the video, it only hands the file over, so a
// placeholder address still copies through and the gate refuses it there.
// The three address shapes the gate accepts:
//   https://www.youtube.com/shorts/<11-char id>
//   https://www.youtube.com/watch?v=<11-char id>
//   https://youtu.be/<11-char id>
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(BOT_DIR, 'VIDEO.json');
const raw = readFileSync(sourcePath, 'utf8');

let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch {
  console.error('VIDEO.json is not valid JSON');
  process.exit(1);
}

if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
  console.error('VIDEO.json must be a JSON object');
  process.exit(1);
}

const url = (parsed as { url?: unknown }).url;
if (typeof url !== 'string' || url.length === 0) {
  console.error('VIDEO.json must hold a string "url"');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'VIDEO.json'), raw);
