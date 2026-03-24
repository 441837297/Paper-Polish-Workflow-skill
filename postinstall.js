const { cpSync, mkdirSync, readdirSync } = require('fs');
const { join } = require('path');
const os = require('os');

const home = os.homedir();
const projectRoot = process.env.INIT_CWD || process.cwd();
const packageRoot = __dirname;

// Copy each skill subdirectory to ~/.claude/skills/
const skillsSrc = join(packageRoot, 'skills');
const skillsDest = join(home, '.claude', 'skills');
mkdirSync(skillsDest, { recursive: true });

const skillDirs = readdirSync(skillsSrc, { withFileTypes: true })
  .filter(d => d.isDirectory());

for (const dir of skillDirs) {
  const src = join(skillsSrc, dir.name);
  const dest = join(skillsDest, dir.name);
  cpSync(src, dest, { recursive: true, force: true });
}

console.log(`[ppw] ${skillDirs.length} skills installed to ${skillsDest}`);

// Copy references to project root (skip if src === dest)
const refsSrc = join(packageRoot, 'references');
const refsDest = join(projectRoot, 'references');
if (refsSrc !== refsDest) {
  mkdirSync(refsDest, { recursive: true });
  cpSync(refsSrc, refsDest, { recursive: true, force: true });
  console.log(`[ppw] References installed to ${refsDest}`);
} else {
  console.log('[ppw] References: skipped (already in project root)');
}
