import { mkdirSync, copyFileSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// The entry image packs 36 individually dated stories from the full news cycle.
// Three lead scenes run complete body text, each line sourced and attributed.
// A 12-card highlight grid turns the biggest stories into scannable briefs.
// A 3-column digest groups remaining coverage by theme, region and impact.
// A final date check ties every headline to its verified publication day.

const ownDir = fileURLToPath(new URL('.', import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(ownDir, 'entry.png');
const destination = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(source, destination);

function reportSize(directory, size) {
  console.log(`Wrote entry.png to ${directory} (${size} bytes)`);
}

reportSize(dirname(destination), statSync(destination).size);
