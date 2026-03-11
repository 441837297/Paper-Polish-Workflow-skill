# Contributing

[English](CONTRIBUTING.md) | [中文](CONTRIBUTING_CN.md)

Thank you for your interest in contributing to Paper Polish Workflow.

## How to Contribute

### Adding Journal Contracts

1. Create a new file in `references/journals/`
2. Name it `[journal-name].md` (lowercase, hyphens for spaces)
3. Keep the stable heading contract:
   - `## Submission Requirements`
   - `## Writing Preferences`
   - `## Quality Checks`
   - `## Section Guidance`
4. Keep `references/journals/[journal].md` directly loadable by downstream Skills

### Improving Expression References

1. Keep `references/expression-patterns.md` as the stable overview entrypoint
2. Add or refine leaf modules in `references/expression-patterns/`
3. Organize content by writing scenario, not by generic grammar buckets
4. Each leaf module should keep:
   - `## Recommended Expressions`
   - `## Avoid Expressions`
   - `## Usage Scenarios`
   - `## Bilingual Example Patterns`

### Improving Anti-AI References

1. Keep `references/anti-ai-patterns.md` as the stable overview entrypoint
2. Add or refine leaf modules in `references/anti-ai-patterns/`
3. Group patterns by category, not by paper section
4. Each leaf module should keep:
   - `## High Risk`
   - `## Medium Risk`
   - `## Optional`
5. Prefer lightweight `Problem expression -> Replacement` rows so future Skills can retrieve them directly

### Modifying the Skill

1. Edit `paper-polish-workflow/SKILL.md`
2. Preserve YAML frontmatter:
   ```yaml
   ---
   name: paper-polish-workflow
   description: ...
   ---
   ```
3. Keep long reference content out of `SKILL.md`; put it in `references/`
4. Maintain workflow structure unless the redesign explicitly changes it

## SKILL.md Requirements

### Frontmatter (Required)

Every `SKILL.md` must have YAML frontmatter:

```yaml
---
name: skill-name
description: Brief description with trigger keywords
---
```

**Rules:**
- `name`: max 64 chars, pattern `^[a-z0-9]+(-[a-z0-9]+)*$`
- `description`: max 1024 chars, include trigger keywords
- `name` must match the parent directory name

## Pull Request Process

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with Claude/OpenCode
5. Submit a pull request

## Questions?

Open an issue or start a discussion.
