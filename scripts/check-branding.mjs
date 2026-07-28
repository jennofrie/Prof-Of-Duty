import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve, sep } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const owner = 'Profexor';
const mark = 'Prof-Of-Duty™';
const errors = [];

const fail = (message) => errors.push(message);
const read = (file) => readFileSync(resolve(root, file), 'utf8');
const tracked = execFileSync(
  'git',
  ['ls-files', '--cached', '--others', '--exclude-standard'],
  { cwd: root, encoding: 'utf8' },
).trim().split('\n').filter(Boolean);
const presentFiles = tracked.filter((file) => existsSync(resolve(root, file)));

const required = [
  'README.md',
  'PROJECT_BRIEF.md',
  'ARCHITECTURE.md',
  'LICENSE',
  'TRADEMARKS.md',
  'SECURITY.md',
  'CONTRIBUTING.md',
  'ROADMAP.md',
  'CHANGELOG.md',
  'THIRD_PARTY_NOTICES.md',
  'docs/VALIDATION.md',
  'docs/images/hero.png',
  'docs/images/combat.png',
  'docs/images/weapon.png',
  '.github/CODEOWNERS',
  '.github/workflows/ownership-integrity.yml',
];

for (const file of required) {
  if (!existsSync(resolve(root, file))) fail(`Missing required file: ${file}`);
}

if (existsSync(resolve(root, 'LICENSE'))) {
  const license = read('LICENSE');
  if (!license.startsWith('MIT License')) fail('LICENSE must remain the MIT License.');
  if (!license.includes('Copyright (c) 2026 Profexor')) {
    fail('LICENSE must retain the 2026 Profexor copyright notice.');
  }
}

if (existsSync(resolve(root, 'package.json'))) {
  const metadata = JSON.parse(read('package.json'));
  if (metadata.name !== 'prof-of-duty') fail('package.json name must remain prof-of-duty.');
  if (metadata.author !== owner) fail(`package.json author must remain ${owner}.`);
  if (metadata.license !== 'MIT') fail('package.json license must remain MIT.');
}

if (existsSync(resolve(root, '.github/CODEOWNERS'))) {
  const codeowners = read('.github/CODEOWNERS');
  if (!codeowners.includes('* @jennofrie')) {
    fail('CODEOWNERS must retain Profexor GitHub ownership.');
  }
}

for (const file of presentFiles.filter((name) => name.toLowerCase().endsWith('.md'))) {
  const content = read(file);
  if (!content.includes(mark) || !content.includes(owner)) {
    fail(`${file} is missing the ${mark} / ${owner} ownership notice.`);
  }

  const imageRefs = [
    ...content.matchAll(/!\[[^\]]*]\((?:<)?([^)\s>]+)(?:>)?(?:\s+["'][^"']*["'])?\)/g),
    ...content.matchAll(/<img\b[^>]*\bsrc=["']([^"']+)["']/gi),
  ].map((match) => match[1]);

  for (const originalRef of imageRefs) {
    if (/^(?:https?:|data:|#)/i.test(originalRef)) continue;
    const cleanRef = decodeURIComponent(originalRef.split(/[?#]/, 1)[0]);
    const absolute = resolve(root, dirname(file), cleanRef);
    if (!absolute.startsWith(root + sep) || !existsSync(absolute)) {
      fail(`${file} references a missing or unsafe image: ${originalRef}`);
    }
  }
}

const forbiddenTerms = [
  'mshu' + 'mer',
  'over' + 'watch',
  'claude' + '-of-duty',
  'claude' + ' of duty',
  'shumer' + '.dev',
];
for (const file of presentFiles.filter((name) => /\.(?:md|js|mjs|html|json|yml|yaml)$/i.test(name))) {
  const normalized = read(file).toLowerCase();
  if (forbiddenTerms.some((term) => normalized.includes(term))) {
    fail(`${file} contains a retired project identity.`);
  }
}

if (existsSync(resolve(root, 'README.md'))) {
  const readme = read('README.md');
  if (!/playable but incomplete/i.test(readme)) {
    fail('README must state that the current game is playable but incomplete.');
  }
}

if (errors.length) {
  console.error(`Ownership integrity failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Ownership integrity passed for ${mark}, ${owner}, and all local Markdown images.`);
