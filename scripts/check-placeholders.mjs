// Fails the build if any [ПОПЪЛНИ: …] or [ПОТВЪРДИ] marker is still present
// in built HTML. Draft case studies are not built in production, so they can
// never trip this. Escape hatch: SKIP_PLACEHOLDER_CHECK=1 npm run build.
import { readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const MARKERS = ['[ПОПЪЛНИ', '[ПОТВЪРДИ'];

function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) return htmlFiles(full);
    return entry.name.endsWith('.html') ? [full] : [];
  });
}

const findings = [];
for (const file of htmlFiles(DIST)) {
  const html = readFileSync(file, 'utf8');
  for (const marker of MARKERS) {
    let idx = html.indexOf(marker);
    while (idx !== -1) {
      const end = html.indexOf(']', idx);
      findings.push({
        page: '/' + relative(DIST, file).replace(/index\.html$/, ''),
        text: html.slice(idx, end === -1 ? idx + 40 : end + 1),
      });
      idx = html.indexOf(marker, idx + 1);
    }
  }
}

if (findings.length === 0) {
  console.log('✓ Няма останали [ПОПЪЛНИ]/[ПОТВЪРДИ] маркери в билда.');
  process.exit(0);
}

console.error(`\n✗ Останали са ${findings.length} маркера в билда:\n`);
for (const f of findings) {
  console.error(`  ${f.page}  →  ${f.text}`);
}

if (process.env.SKIP_PLACEHOLDER_CHECK === '1') {
  console.error('\n(SKIP_PLACEHOLDER_CHECK=1 е зададено: билдът продължава въпреки маркерите.)\n');
  process.exit(0);
}

console.error(
  '\nПопълнете липсващото или потвърдете твърденията, преди да публикувате.' +
    '\nЗа спешен билд: SKIP_PLACEHOLDER_CHECK=1 npm run build\n'
);
process.exit(1);
