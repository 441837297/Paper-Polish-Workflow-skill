# Usage Guide

## Quick Reference

| Skill | Trigger | Function | When to Use |
|-------|---------|----------|-------------|
| `ppw:polish` | 润色 / Polish | Refine English text with journal-specific style, inline change tracking | Before submission, section by section |
| `ppw:de-ai` | 降AI / De-AI | Two-phase: scan AI patterns → batch rewrite | After polishing |
| `ppw:abstract` | 写摘要 | Farquhar 5-sentence abstract generation or restructure | Writing or rewriting abstract |
| `ppw:reviewer-simulation` | 审稿 / Review | Structured peer review simulation with scoring | Pre-submission self-check |
| `ppw:cover-letter` | 投稿信 | Cover letter with contribution, data availability, COI | Preparing submission package |
| `ppw:caption` | 图表标题 | Ocean-science-aware figure/table captions, writes to .tex | Finalizing figures |
| `ppw:logic` | 论文逻辑 | Argument chain completeness, terminology consistency | After major revision |
| `paper-polish-workflow` | /ppw | Full-paper four-stage polish orchestrator | Systematic full-paper polish |
| `ppw:update` | 更新技能 | Sync skills from GitHub | Periodic maintenance |

## Submission Workflow

```
Draft
  → ppw:polish      [specify journal: jpo / jgr / grl / nc / ncc]
  → ppw:de-ai       [reduce AI traces]
  → ppw:logic       [check argument consistency]
  → ppw:reviewer-simulation  [simulate peer review]
  → ppw:cover-letter
  → Submit
```

Standalone tools:
```
Abstract  → ppw:abstract  [journal + word limit]
Captions  → ppw:caption   [journal]
```

## Journal Reference

| Journal | Body | Abstract | Figures | Key Requirement |
|---------|------|----------|---------|-----------------|
| JPO | no limit | ~250 w | — | Dynamical explanation over description |
| JGR-Oceans | no limit | ~250 w | — | Interdisciplinary ocean scope, QC documented |
| GRL | ~4000 w total | ~150 w (≤200) | 3–5 | One clear take-home message, no filler |
| NC | ~4000–5000 w | ~150 w, no refs | 4–6 | Accessible to non-specialists |
| NCC | ~3000–4000 w | ~150 w, no refs | 4–6 | Explicit climate change relevance in every section |

**Banned in all journals:** `novel`, `groundbreaking`, `revolutionary`, `important finding`

**Tense rule:** Methods/Results → past tense. Established knowledge/implications → present tense.

## Example Invocations

**Polish:**
```
润色这段 Introduction，目标期刊 JPO
引导模式润色 Methods，目标期刊 JGR
Polish all sections for GRL submission
```

**Abstract:**
```
写摘要，目标期刊 JPO，250词以内
[paste core content]

重构这个摘要，Farquhar 五句式，目标期刊 GRL
[paste existing abstract]
```

Farquhar formula: ① Contribution → ② Difficulty → ③ Method → ④ Evidence → ⑤ Key Result

**De-AI:**
```
降AI，检查这段文字
[paste text]
```

**Reviewer simulation:**
```
审稿，目标期刊 JPO
[paste manuscript or section]
```

**Cover letter:**
```
写投稿信，目标期刊 JGR-Oceans
[provide: title, core contribution, data availability statement]
```

## How References Are Loaded

Skills load reference files automatically — no manual action needed.

| Module | Path | Loaded When |
|--------|------|-------------|
| Ocean science expressions | `references/expression-patterns/ocean-science-domain.md` | Ocean/climate content detected |
| Journal style | `references/journals/[jpo\|jgr\|grl\|nc\|ncc].md` | Journal specified |
| Anti-AI vocabulary | `references/anti-ai-patterns/vocabulary.md` | Always, during polish |
| Methods/data expressions | `references/expression-patterns/methods-and-data.md` | Methods section detected |

Specify the target journal (e.g. "按 JPO 风格" or "for JPO") and the skill loads the matching journal template plus ocean-science expressions automatically.
