# Contributing

[English](CONTRIBUTING.md) | [中文](CONTRIBUTING_CN.md)

Thank you for your interest in contributing to Paper Polish Workflow!

## How to Contribute

### Adding Journal Templates

1. Create a new file in `references/journals/`
2. Name it `[journal-name].md` (lowercase, hyphens for spaces)
3. Include:
   - Word limits
   - Abstract requirements
   - Special formatting rules
   - Style checklist
   - Word budget reference

### Improving Expression Patterns

1. Edit `references/expression-patterns.md`
2. Add new patterns under appropriate sections
3. Include examples for each pattern

### Modifying the Skill

1. Edit `paper-polish-workflow/SKILL.md`
2. Ensure YAML frontmatter is preserved:
   ```yaml
   ---
   name: paper-polish-workflow
   description: ...
   ---
   ```
3. Keep file under 500 lines
4. Maintain workflow structure (Steps 1-6)

## SKILL.md Requirements

### Frontmatter (Required)

Every SKILL.md must have YAML frontmatter:

```yaml
---
name: skill-name          # lowercase, alphanumeric, hyphens only
description: Brief description with trigger keywords
---
```

**Rules:**
- `name`: max 64 chars, pattern `^[a-z0-9]+(-[a-z0-9]+)*$`
- `description`: max 1024 chars, include trigger keywords
- `name` must match parent directory name

### File Structure

```markdown
---
name: ...
description: ...
---

# Skill Title

## Key Features
...

## Trigger Conditions
...

## Core Principles
...

## Complete Workflow
...
```

## Pull Request Process

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with Claude/OpenCode
5. Submit a pull request

## Questions?

Open an issue or start a discussion!
