# Paper Polish Workflow — Ocean Science Edition

A specialized fork of the [Paper-Polish-Workflow-skill](https://github.com/Lylll9436/Paper-Polish-Workflow-skill) suite, tailored for physical oceanography research. Rewrites journal references and expression patterns for JPO, JGR-Oceans, GRL, Nature Communications, and Nature Climate Change.

## What It Does

9 Claude Code skills under the `ppw:` namespace:

| Skill | Trigger | Function |
|-------|---------|----------|
| `ppw:polish` | 润色 / Polish | Refine English text with journal-specific style |
| `ppw:de-ai` | 降AI / De-AI | Detect and rewrite AI-generated patterns |
| `ppw:reviewer-simulation` | 审稿 / Review | Structured peer review simulation with scoring |
| `ppw:abstract` | 写摘要 | Build abstracts using the 5-sentence Farquhar formula |
| `ppw:cover-letter` | 投稿信 | Submission letters aligned to journal scope |
| `ppw:caption` | 图表标题 | Figure/table captions with ocean-science metadata |
| `ppw:logic` | 论文逻辑 | Verify logical consistency across sections |
| `paper-polish-workflow` | /ppw | Full-paper four-stage polish orchestrator |
| `ppw:update` | 更新技能 | Sync skills from GitHub |

## Installation

Clone and copy skills and references into your `.claude` directory.

**macOS / Linux:**
```bash
git clone https://github.com/441837297/Paper-Polish-Workflow-skill.git /tmp/ppw
cp -r /tmp/ppw/skills/* ~/.claude/skills/
cp -r /tmp/ppw/references/* ~/.claude/references/
```

**Windows (PowerShell):**
```powershell
git clone https://github.com/441837297/Paper-Polish-Workflow-skill.git $env:TEMP\ppw
Copy-Item "$env:TEMP\ppw\skills\*" "$env:USERPROFILE\.claude\skills\" -Recurse -Force
Copy-Item "$env:TEMP\ppw\references\*" "$env:USERPROFILE\.claude\references\" -Recurse -Force
```

Then run `/reload-plugins` in Claude Code to activate.

## Updating

Re-run the copy commands above, or use `/ppw:update` inside Claude Code to sync automatically.

## Journal Support

| Journal | Abstract | Scope |
|---------|----------|-------|
| JPO | ~250 words | Physical oceanography, dynamics-focused |
| JGR-Oceans | ~250 words | Broad ocean science, interdisciplinary |
| GRL | ~150 words | High-impact letters, ~4000 words total |
| Nature Communications | ~150 words | Broad audience, narrative-driven |
| Nature Climate Change | ~150 words | Climate change relevance required |

## What Was Changed from Upstream

- Replaced CEUS journal template with JPO, JGR-Oceans, GRL, NC, NCC
- Added `references/expression-patterns/ocean-science-domain.md` with bilingual ocean science expression patterns
- Rewrote `ppw:polish` system prompt for ocean science editorial style
- Removed skills not relevant to oceanography (repo-to-paper, team, visualization, literature, experiment, translation, get-paper)
