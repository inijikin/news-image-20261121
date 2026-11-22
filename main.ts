import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Entry for "Sum up 21 November's world news in one image" (news-image-20261121).
// The image is built at build time and held in this repository; this program
// only copies it to the output directory. It never deletes /output.
const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

mkdirSync(outDir, { recursive: true });
const target = join(outDir, 'entry.png');
copyFileSync(join(repoDir, 'entry.png'), target);
console.log('wrote ' + target + ' (' + statSync(target).size + ' bytes)');
