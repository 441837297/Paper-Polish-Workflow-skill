# Skill Project Standardization

## TL;DR

> **Quick Summary**: Restructure paper-polish-workflow into a standard Claude/OpenCode skill project with proper directory structure, YAML frontmatter, documentation, CI, and extensible journal template system.
> 
> **Deliverables**:
> - Restructured directory: `paper-polish-workflow/SKILL.md`
> - YAML frontmatter with `name` and `description`
> - Standard open-source files: .gitignore, CONTRIBUTING.md (EN+CN), CHANGELOG.md
> - GitHub Actions CI workflow
> - Extracted journal specs: `references/journals/ceus.md`
> - New academic writing patterns: `references/expression-patterns.md`
> 
> **Estimated Effort**: Medium (4-6 hours)
> **Parallel Execution**: YES - 3 waves
> **Critical Path**: Task 1 (restructure) → Task 3 (frontmatter) → Task 7 (CI) → Task 9 (verify)

---

## Context

### Original Request
User wants to standardize the paper-polish-workflow project as a proper Claude/OpenCode skill following industry best practices.

### Interview Summary
**Key Discussions**:
- **Completeness Level**: Standard open-source project (not minimal, not full professional)
- **Journal Support**: Design extensible structure, only implement CEUS
- **File Split**: Extract journal specs, create new expression patterns library
- **Directory Structure**: Restructure to standard `name/SKILL.md` format
- **Documentation**: Bilingual CONTRIBUTING (EN + CN)

**Research Findings**:
- SKILL.md MUST have YAML frontmatter with `name` and `description`
- `name` must match parent directory name (Agent Skills standard)
- Use `agentskills-validate` for CI validation (npm package)
- Keep SKILL.md under 500 lines
- **Specification Source**: https://agentskills.io/specification

### Metis Review
**Identified Gaps** (addressed):
- Directory structure must follow `name/SKILL.md` pattern → User chose to restructure
- Expression patterns content unclear → User chose to create new curated library
- Bilingual documentation question → User chose EN + CN versions

---

## Work Objectives

### Core Objective
Transform paper-polish-workflow into a standards-compliant Claude/OpenCode skill project with proper structure, documentation, and CI.

### Concrete Deliverables
| File | Purpose |
|------|---------|
| `paper-polish-workflow/SKILL.md` | Main skill file (renamed + frontmatter) |
| `.gitignore` | Standard ignores |
| `CONTRIBUTING.md` | English contribution guide |
| `CONTRIBUTING_CN.md` | Chinese contribution guide |
| `CHANGELOG.md` | Version history |
| `.github/workflows/validate-skill.yml` | CI validation |
| `references/journals/ceus.md` | CEUS journal specifications |
| `references/expression-patterns.md` | Academic writing patterns library |

### Definition of Done
- [ ] Grep-based SKILL.md validation passes (frontmatter, name, description)
- [ ] All deliverable files exist
- [ ] SKILL.md < 350 lines (reduced from 450)
- [ ] CEUS content preserved in references/journals/ceus.md
- [ ] Workflow logic (Steps 1-6) unchanged

### Must Have
- YAML frontmatter with `name: paper-polish-workflow` and trigger keywords in `description`
- All current CEUS specifications preserved
- All current workflow steps preserved
- CI that validates skill format

### Must NOT Have (Guardrails)
- DO NOT change workflow logic (Steps 1-6)
- DO NOT remove any information (move, don't delete)
- DO NOT add journals beyond CEUS (structure only)
- DO NOT create placeholder files for future journals
- DO NOT add tests beyond format validation
- DO NOT add CODE_OF_CONDUCT, SECURITY.md, issue templates

---

## Verification Strategy (MANDATORY)

### Test Decision
- **Infrastructure exists**: NO (pure markdown skill project)
- **User wants tests**: Manual-only (CI validation is sufficient)
- **Framework**: GitHub Actions + grep-based validation (no external dependencies)
- **Specification**: https://agentskills.io/specification

### Automated Verification (Agent-Executable)

Each TODO includes executable verification:

**For file creation/editing:**
```bash
# File exists check
ls -la [file-path]
# Expected: File listed with size > 0

# Content verification
grep -c "[key-pattern]" [file-path]
# Expected: Specific count
```

**For SKILL.md validation (grep-based, no external tools):**
```bash
# Validation script (all checks must pass)
set -e

# 1. Check frontmatter exists (first line is ---)
head -1 paper-polish-workflow/SKILL.md | grep -q "^---$"
echo "✓ Frontmatter start OK"

# 2. Check frontmatter closes within first 10 lines
[ $(head -10 paper-polish-workflow/SKILL.md | grep -c "^---$") -eq 2 ]
echo "✓ Frontmatter closed OK"

# 3. Check name field exists and matches directory name
grep -q "^name: paper-polish-workflow$" paper-polish-workflow/SKILL.md
echo "✓ Name field OK (matches directory)"

# 4. Check description field exists and is non-empty
grep -q "^description: ..*$" paper-polish-workflow/SKILL.md
echo "✓ Description field OK (non-empty)"

# 5. Check name format (lowercase, alphanumeric, hyphens only)
NAME=$(grep "^name:" paper-polish-workflow/SKILL.md | cut -d' ' -f2)
echo "$NAME" | grep -qE "^[a-z0-9]+(-[a-z0-9]+)*$"
echo "✓ Name format OK"

echo "All validations passed!"
```

**For line count:**
```bash
wc -l paper-polish-workflow/SKILL.md
# Expected: < 350
```

**Why grep-based instead of external tools:**
- No npm dependency (more reliable CI)
- Validates exact requirements from Agent Skills spec
- Works offline and in any environment
- No risk of npm package deprecation/changes

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Start Immediately):
├── Task 1: Restructure directory (skill/ → paper-polish-workflow/)
├── Task 5: Create .gitignore
└── Task 8: Create references/ directory structure

Wave 2 (After Wave 1):
├── Task 2: Extract CEUS specs to references/journals/ceus.md
├── Task 3: Add YAML frontmatter to SKILL.md
├── Task 4: Update SKILL.md to reference external files
├── Task 6: Create CONTRIBUTING.md + CONTRIBUTING_CN.md
└── Task 10: Create expression-patterns.md

Wave 3 (After Wave 2):
├── Task 7: Create GitHub Actions CI workflow
├── Task 11: Create CHANGELOG.md
└── Task 9: Final verification

Critical Path: Task 1 → Task 3 → Task 7 → Task 9
Parallel Speedup: ~50% faster than sequential
```

### Dependency Matrix

| Task | Depends On | Blocks | Can Parallelize With |
|------|------------|--------|---------------------|
| 1 | None | 2, 3, 4 | 5, 8 |
| 2 | 1 | 4, 9 | 3, 6, 10 |
| 3 | 1 | 7, 9 | 2, 6, 10 |
| 4 | 1, 2 | 9 | 6, 10 |
| 5 | None | 9 | 1, 8 |
| 6 | None | 9 | 2, 3, 10 |
| 7 | 3 | 9 | 11 |
| 8 | None | 2, 10 | 1, 5 |
| 9 | ALL | None | None (final) |
| 10 | 8 | 9 | 2, 3, 6 |
| 11 | None | 9 | 7 |

### Agent Dispatch Summary

| Wave | Tasks | Recommended Dispatch |
|------|-------|---------------------|
| 1 | 1, 5, 8 | `delegate_task(category="quick", ...)` - simple file ops |
| 2 | 2, 3, 4, 6, 10 | `delegate_task(category="writing", ...)` - documentation |
| 3 | 7, 11, 9 | `delegate_task(category="quick", ...)` - CI + verification |

---

## TODOs

- [ ] 1. Restructure directory: skill/ → paper-polish-workflow/

  **What to do**:
  - Rename directory `skill/` to `paper-polish-workflow/`
  - Rename file `paper-polish-workflow.md` to `SKILL.md`
  - Verify file content is preserved

  **Must NOT do**:
  - Do NOT modify file content (only rename)

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Simple file system operation
  - **Skills**: `[]`
    - No special skills needed for rename

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 5, 8)
  - **Blocks**: Tasks 2, 3, 4
  - **Blocked By**: None

  **References**:
  - `skill/paper-polish-workflow.md` - Current file location (450 lines)
  - Agent Skills standard requires `name` to match parent directory

  **Acceptance Criteria**:
  ```bash
  # Directory renamed
  ls -d paper-polish-workflow/
  # Expected: paper-polish-workflow/ listed

  # File renamed
  ls paper-polish-workflow/SKILL.md
  # Expected: SKILL.md listed

  # Old directory removed
  ls -d skill/ 2>&1
  # Expected: "No such file or directory"

  # Content preserved (line count)
  wc -l paper-polish-workflow/SKILL.md
  # Expected: 450 (unchanged before extraction)
  ```

  **Commit**: NO (groups with Task 3)

---

- [ ] 2. Extract CEUS specifications to references/journals/ceus.md

  **What to do**:
  - Create `references/journals/ceus.md`
  - Extract CEUS-specific content from SKILL.md:
    - Lines 340-365: Journal requirements table
    - Lines 287-307: Highlights section (Step 5.7)
    - Lines 218-232: CEUS Style Checklist (Step 4.5)
    - Lines 352-365: Word budget reference table
  - Format as standalone reference document with clear sections

  **Must NOT do**:
  - Do NOT modify the extracted content (preserve verbatim)
  - Do NOT add other journals (CEUS only)

  **Recommended Agent Profile**:
  - **Category**: `writing`
    - Reason: Documentation extraction and formatting
  - **Skills**: `[]`
    - No special skills needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 3, 6, 10)
  - **Blocks**: Task 4, 9
  - **Blocked By**: Task 1, 8

  **References**:
  - `paper-polish-workflow/SKILL.md:340-365` - Journal requirements table
  - `paper-polish-workflow/SKILL.md:287-307` - Highlights section
  - `paper-polish-workflow/SKILL.md:218-232` - CEUS Style Checklist
  - `paper-polish-workflow/SKILL.md:352-365` - Word budget table

  **Acceptance Criteria**:
  ```bash
  # File created
  ls references/journals/ceus.md
  # Expected: ceus.md listed

  # Key content preserved
  grep -c "≤85 characters" references/journals/ceus.md
  # Expected: 1 (highlights requirement)

  grep -c "≤8,000 words" references/journals/ceus.md
  # Expected: 1 (total word limit)

  grep -c "Double-blind" references/journals/ceus.md
  # Expected: 1 (review type)

  # Word budget table preserved
  grep -c "2,000-2,500" references/journals/ceus.md
  # Expected: 1 (Methodology budget)
  ```

  **Commit**: NO (groups with Task 4)

---

- [ ] 3. Add YAML frontmatter to SKILL.md

  **What to do**:
  - Add YAML frontmatter at the beginning of SKILL.md:
    ```yaml
    ---
    name: paper-polish-workflow
    description: Systematic AI-assisted workflow for polishing academic papers. Top-down approach from structure to expression. Triggers: polish paper, revise paper, improve paper writing, 润色论文, 精修论文, academic writing
    ---
    ```
  - Ensure `name` matches directory name exactly
  - Include bilingual trigger keywords in description

  **Must NOT do**:
  - Do NOT exceed 1024 characters in description
  - Do NOT use special characters in name (only `a-z`, `0-9`, `-`)

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Simple text insertion at file start
  - **Skills**: `[]`
    - No special skills needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 2, 6, 10)
  - **Blocks**: Task 7, 9
  - **Blocked By**: Task 1

  **References**:
  - `paper-polish-workflow/SKILL.md:1-5` - Current file start (no frontmatter)
  - **Agent Skills Specification**: https://agentskills.io/specification
    - `name`: max 64 chars, pattern `^[a-z0-9]+(-[a-z0-9]+)*$`, must match directory name
    - `description`: max 1024 chars, non-empty

  **Acceptance Criteria**:
  ```bash
  # Frontmatter exists (opening ---)
  head -1 paper-polish-workflow/SKILL.md
  # Expected: "---"

  # Frontmatter closed
  head -5 paper-polish-workflow/SKILL.md | grep -c "^---$"
  # Expected: 2

  # Name field correct
  grep "^name: paper-polish-workflow$" paper-polish-workflow/SKILL.md
  # Expected: Match found

  # Description contains triggers
  grep -c "polish paper" paper-polish-workflow/SKILL.md
  # Expected: >= 1
  ```

  **Commit**: YES
  - Message: `feat(skill): add YAML frontmatter for Claude/OpenCode compatibility`
  - Files: `paper-polish-workflow/SKILL.md`
  - Pre-commit: None

---

- [ ] 4. Update SKILL.md to reference external files

  **What to do**:
  - Replace inline CEUS content with reference to `references/journals/ceus.md`
  - Add note: "For full CEUS requirements, see `references/journals/ceus.md`"
  - Replace Step 4.5 and Step 5.7 detailed content with references
  - Keep workflow logic intact, only change where detailed specs live
  - Target: Reduce file to < 350 lines

  **Must NOT do**:
  - Do NOT change workflow steps (1-6) structure
  - Do NOT remove step headers or descriptions
  - Do NOT change mcp_question examples (these stay inline)

  **Recommended Agent Profile**:
  - **Category**: `writing`
    - Reason: Careful editing preserving structure
  - **Skills**: `[]`
    - No special skills needed

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential after Task 2
  - **Blocks**: Task 9
  - **Blocked By**: Task 1, 2

  **References**:
  - `paper-polish-workflow/SKILL.md:218-232` - CEUS Style Checklist to reference
  - `paper-polish-workflow/SKILL.md:287-307` - Highlights to reference
  - `paper-polish-workflow/SKILL.md:340-365` - Requirements table to reference
  - `references/journals/ceus.md` - Target reference file

  **Acceptance Criteria**:
  ```bash
  # File size reduced
  wc -l paper-polish-workflow/SKILL.md
  # Expected: < 350 lines

  # Reference added
  grep -c "references/journals/ceus.md" paper-polish-workflow/SKILL.md
  # Expected: >= 1

  # Workflow steps preserved
  grep -c "^### Step" paper-polish-workflow/SKILL.md
  # Expected: 6 (Steps 1-6)

  # Phase 0 preserved
  grep -c "Phase 0" paper-polish-workflow/SKILL.md
  # Expected: >= 1
  ```

  **Commit**: YES
  - Message: `refactor(skill): extract CEUS specs to references/, reduce file size`
  - Files: `paper-polish-workflow/SKILL.md`, `references/journals/ceus.md`
  - Pre-commit: `wc -l paper-polish-workflow/SKILL.md` (verify < 350)

---

- [ ] 5. Create .gitignore

  **What to do**:
  - Create `.gitignore` with standard patterns:
    ```
    # OS
    .DS_Store
    Thumbs.db
    
    # Editor
    .vscode/
    .idea/
    *.swp
    *.swo
    
    # Node (for CI)
    node_modules/
    
    # Sisyphus work files
    .sisyphus/drafts/
    ```

  **Must NOT do**:
  - Do NOT ignore .sisyphus/plans/ (should be tracked)

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Simple file creation
  - **Skills**: `[]`
    - No special skills needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 8)
  - **Blocks**: Task 9
  - **Blocked By**: None

  **References**:
  - Standard gitignore patterns for documentation projects

  **Acceptance Criteria**:
  ```bash
  # File exists
  ls .gitignore
  # Expected: .gitignore listed

  # Contains OS patterns
  grep -c "DS_Store" .gitignore
  # Expected: 1

  # Contains editor patterns
  grep -c ".vscode" .gitignore
  # Expected: 1

  # Does NOT ignore plans
  grep -c ".sisyphus/plans" .gitignore
  # Expected: 0
  ```

  **Commit**: NO (groups with Task 6)

---

- [ ] 6. Create CONTRIBUTING.md and CONTRIBUTING_CN.md

  **What to do**:
  - Create `CONTRIBUTING.md` (English):
    - How to submit skills
    - SKILL.md requirements (frontmatter, format)
    - How to add journal templates
    - Pull request process
  - Create `CONTRIBUTING_CN.md` (Chinese):
    - Same content, translated to Chinese
  - Follow README style and tone

  **Must NOT do**:
  - Do NOT add CODE_OF_CONDUCT
  - Do NOT add issue templates
  - Do NOT make it overly complex

  **Recommended Agent Profile**:
  - **Category**: `writing`
    - Reason: Documentation creation
  - **Skills**: `[]`
    - No special skills needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 2, 3, 10)
  - **Blocks**: Task 9
  - **Blocked By**: None

  **References**:
  - `README.md` - Style reference for English
  - `README_CN.md` - Style reference for Chinese
  - Research findings: SKILL.md requirements

  **Acceptance Criteria**:
  ```bash
  # English file exists
  ls CONTRIBUTING.md
  # Expected: CONTRIBUTING.md listed

  # Chinese file exists
  ls CONTRIBUTING_CN.md
  # Expected: CONTRIBUTING_CN.md listed

  # English has SKILL.md section
  grep -c "SKILL.md" CONTRIBUTING.md
  # Expected: >= 1

  # English has frontmatter mention
  grep -c "frontmatter" CONTRIBUTING.md
  # Expected: >= 1

  # Chinese has corresponding content
  grep -c "SKILL.md" CONTRIBUTING_CN.md
  # Expected: >= 1
  ```

  **Commit**: YES
  - Message: `docs: add CONTRIBUTING.md in English and Chinese`
  - Files: `CONTRIBUTING.md`, `CONTRIBUTING_CN.md`
  - Pre-commit: None

---

- [ ] 7. Create GitHub Actions CI workflow

  **What to do**:
  - Create `.github/workflows/validate-skill.yml`
  - Workflow should:
    - Trigger on push and PR to main
    - Use grep-based validation (NO external npm dependencies)
    - Validate SKILL.md format per Agent Skills specification
    - Fail if validation fails

  **Workflow Template**:
  ```yaml
  name: Validate Skill

  on:
    push:
      branches: [main]
    pull_request:
      branches: [main]

  jobs:
    validate:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        
        - name: Validate SKILL.md format
          run: |
            set -e
            SKILL_FILE="paper-polish-workflow/SKILL.md"
            
            echo "Validating $SKILL_FILE..."
            
            # 1. Check file exists
            [ -f "$SKILL_FILE" ] || { echo "ERROR: $SKILL_FILE not found"; exit 1; }
            echo "✓ File exists"
            
            # 2. Check frontmatter starts with ---
            head -1 "$SKILL_FILE" | grep -q "^---$" || { echo "ERROR: Missing frontmatter start"; exit 1; }
            echo "✓ Frontmatter start OK"
            
            # 3. Check frontmatter closes within first 10 lines
            [ $(head -10 "$SKILL_FILE" | grep -c "^---$") -eq 2 ] || { echo "ERROR: Frontmatter not closed"; exit 1; }
            echo "✓ Frontmatter closed OK"
            
            # 4. Check name field exists and matches directory
            grep -q "^name: paper-polish-workflow$" "$SKILL_FILE" || { echo "ERROR: name field missing or incorrect"; exit 1; }
            echo "✓ Name field OK"
            
            # 5. Check description field exists and is non-empty
            grep -q "^description: ..*$" "$SKILL_FILE" || { echo "ERROR: description field missing or empty"; exit 1; }
            echo "✓ Description field OK"
            
            echo ""
            echo "All validations passed!"
  ```

  **Why grep-based (NO external npm tools)**:
  - No npm dependency = more reliable CI
  - Validates exact requirements from Agent Skills spec
  - Works offline and in any environment
  - No risk of external package deprecation

  **Must NOT do**:
  - Do NOT add npm dependencies for validation
  - Do NOT add linting
  - Do NOT add complex matrix testing
  - Do NOT add deployment steps

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Simple YAML file creation
  - **Skills**: `[]`
    - No special skills needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3 (with Task 11)
  - **Blocks**: Task 9
  - **Blocked By**: Task 3

  **References**:
  - **Agent Skills Spec**: https://agentskills.io/specification
  - GitHub Actions syntax reference
  - grep-based validation (no external dependencies)

  **Acceptance Criteria**:
  ```bash
  # Workflow file exists
  ls .github/workflows/validate-skill.yml
  # Expected: validate-skill.yml listed

  # Contains frontmatter validation
  grep -c "frontmatter" .github/workflows/validate-skill.yml
  # Expected: >= 1

  # Contains name field validation
  grep -c "name:" .github/workflows/validate-skill.yml
  # Expected: >= 1

  # Triggers on push
  grep -c "push:" .github/workflows/validate-skill.yml
  # Expected: 1

  # Does NOT depend on external npm packages
  grep -c "npx" .github/workflows/validate-skill.yml
  # Expected: 0 (no npm dependencies)
  ```

  **Commit**: YES
  - Message: `ci: add GitHub Actions workflow for skill validation`
  - Files: `.github/workflows/validate-skill.yml`
  - Pre-commit: None

---

- [ ] 8. Create references/ directory structure

  **What to do**:
  - Create directory: `references/`
  - Create subdirectory: `references/journals/`
  - These are empty directories to be populated by Tasks 2 and 10

  **Must NOT do**:
  - Do NOT create placeholder files for other journals

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Simple directory creation
  - **Skills**: `[]`
    - No special skills needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 5)
  - **Blocks**: Tasks 2, 10
  - **Blocked By**: None

  **References**:
  - Target structure from interview

  **Acceptance Criteria**:
  ```bash
  # Main directory exists
  ls -d references/
  # Expected: references/ listed

  # Journals subdirectory exists
  ls -d references/journals/
  # Expected: references/journals/ listed
  ```

  **Commit**: NO (groups with Task 2)

---

- [ ] 9. Final verification and cleanup

  **What to do**:
  - Run grep-based SKILL.md validation (same as CI workflow)
  - Verify all files exist
  - Verify SKILL.md < 350 lines
  - Verify all content preserved (no data loss)
  - Remove old `skill/` directory if still exists
  - Update README.md to reflect new structure

  **Must NOT do**:
  - Do NOT proceed if validation fails

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Verification commands
  - **Skills**: `[]`
    - No special skills needed

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Final (after all others)
  - **Blocks**: None (final task)
  - **Blocked By**: ALL previous tasks

  **References**:
  - All deliverable files from this plan
  - **Agent Skills Spec**: https://agentskills.io/specification
  - Grep-based validation (see Verification Strategy section)

  **Acceptance Criteria**:
  ```bash
  # SKILL.md validation (grep-based)
  set -e
  SKILL_FILE="paper-polish-workflow/SKILL.md"
  head -1 "$SKILL_FILE" | grep -q "^---$"
  [ $(head -10 "$SKILL_FILE" | grep -c "^---$") -eq 2 ]
  grep -q "^name: paper-polish-workflow$" "$SKILL_FILE"
  grep -q "^description: ..*$" "$SKILL_FILE"
  echo "SKILL.md validation passed"
  # Expected: "SKILL.md validation passed"

  # All required files exist
  ls paper-polish-workflow/SKILL.md .gitignore CONTRIBUTING.md CONTRIBUTING_CN.md CHANGELOG.md .github/workflows/validate-skill.yml references/journals/ceus.md references/expression-patterns.md
  # Expected: All files listed

  # SKILL.md size reduced
  wc -l paper-polish-workflow/SKILL.md
  # Expected: < 350

  # Old directory removed
  ls -d skill/ 2>&1
  # Expected: "No such file or directory"
  ```

  **Commit**: YES
  - Message: `docs: update README.md with new project structure`
  - Files: `README.md`, `README_CN.md`
  - Pre-commit: `head -1 paper-polish-workflow/SKILL.md | grep -q "^---$" && grep -q "^name: paper-polish-workflow$" paper-polish-workflow/SKILL.md`

---

- [ ] 10. Create expression-patterns.md (NEW academic writing patterns)

  **What to do**:
  - Create `references/expression-patterns.md`
  - Write NEW curated content (not extracted from skill):
    - Common academic sentence starters
    - Transition phrases by function
    - Hedging language patterns
    - Research method descriptions
    - Results presentation patterns
    - Conclusion phrases
  - Focus on patterns useful for CEUS-style papers (urban/geospatial)

  **Must NOT do**:
  - Do NOT just copy mcp_question examples from skill
  - Do NOT make it journal-specific (keep generic academic)

  **Recommended Agent Profile**:
  - **Category**: `writing`
    - Reason: Original content creation
  - **Skills**: `[]`
    - No special skills needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 2, 3, 6)
  - **Blocks**: Task 9
  - **Blocked By**: Task 8

  **References**:
  - `paper-polish-workflow/SKILL.md:126-169` - mcp_question examples (inspiration, not copy)
  - Academic writing style guides (general knowledge)

  **Acceptance Criteria**:
  ```bash
  # File exists
  ls references/expression-patterns.md
  # Expected: expression-patterns.md listed

  # Has sentence starters section
  grep -ci "sentence starter" references/expression-patterns.md
  # Expected: >= 1

  # Has transition section
  grep -ci "transition" references/expression-patterns.md
  # Expected: >= 1

  # Has hedging section
  grep -ci "hedg" references/expression-patterns.md
  # Expected: >= 1

  # Reasonable size (not empty, not huge)
  wc -l references/expression-patterns.md
  # Expected: 50-200 lines
  ```

  **Commit**: YES
  - Message: `docs: add academic expression patterns reference`
  - Files: `references/expression-patterns.md`
  - Pre-commit: None

---

- [ ] 11. Create CHANGELOG.md

  **What to do**:
  - Create `CHANGELOG.md` with initial entry:
    ```markdown
    # Changelog
    
    All notable changes to this project will be documented in this file.
    
    ## [1.0.0] - 2025-01-30
    
    ### Added
    - Initial release as standardized Claude/OpenCode skill
    - YAML frontmatter for skill discovery
    - CEUS journal template in references/journals/
    - Academic expression patterns library
    - GitHub Actions CI for skill validation
    - Bilingual contributing guide (EN/CN)
    
    ### Changed
    - Restructured from skill/ to paper-polish-workflow/ directory
    - Extracted journal specs to references/ for extensibility
    ```

  **Must NOT do**:
  - Do NOT use complex changelog format
  - Do NOT backfill history that doesn't exist

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Simple file creation
  - **Skills**: `[]`
    - No special skills needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3 (with Task 7)
  - **Blocks**: Task 9
  - **Blocked By**: None

  **References**:
  - Keep a Changelog format (keepachangelog.com)

  **Acceptance Criteria**:
  ```bash
  # File exists
  ls CHANGELOG.md
  # Expected: CHANGELOG.md listed

  # Has version entry
  grep -c "\[1.0.0\]" CHANGELOG.md
  # Expected: 1

  # Has Added section
  grep -c "### Added" CHANGELOG.md
  # Expected: 1
  ```

  **Commit**: NO (groups with Task 9 final commit)

---

## Commit Strategy

| After Task | Message | Files | Verification |
|------------|---------|-------|--------------|
| 3 | `feat(skill): add YAML frontmatter for Claude/OpenCode compatibility` | paper-polish-workflow/SKILL.md | frontmatter exists |
| 4 | `refactor(skill): extract CEUS specs to references/, reduce file size` | SKILL.md, ceus.md | wc -l < 350 |
| 6 | `docs: add CONTRIBUTING.md in English and Chinese` | CONTRIBUTING.md, CONTRIBUTING_CN.md | files exist |
| 7 | `ci: add GitHub Actions workflow for skill validation` | validate-skill.yml | file exists |
| 10 | `docs: add academic expression patterns reference` | expression-patterns.md | file exists |
| 9 | `docs: update README.md with new project structure` | README.md, README_CN.md, .gitignore, CHANGELOG.md | validation passes |

---

## Success Criteria

### Verification Commands
```bash
# SKILL.md validation (grep-based, no external dependencies)
set -e
SKILL_FILE="paper-polish-workflow/SKILL.md"
head -1 "$SKILL_FILE" | grep -q "^---$" && echo "✓ Frontmatter start"
[ $(head -10 "$SKILL_FILE" | grep -c "^---$") -eq 2 ] && echo "✓ Frontmatter closed"
grep -q "^name: paper-polish-workflow$" "$SKILL_FILE" && echo "✓ Name field"
grep -q "^description: ..*$" "$SKILL_FILE" && echo "✓ Description field"
echo "All validations passed!"
# Expected: "All validations passed!"

# All files exist
ls paper-polish-workflow/SKILL.md .gitignore CONTRIBUTING.md CONTRIBUTING_CN.md CHANGELOG.md .github/workflows/validate-skill.yml references/journals/ceus.md references/expression-patterns.md
# Expected: All 8 files listed

# SKILL.md reduced
wc -l paper-polish-workflow/SKILL.md
# Expected: < 350

# CEUS content preserved
grep "≤8,000 words" references/journals/ceus.md
# Expected: Match found

# Frontmatter valid
head -5 paper-polish-workflow/SKILL.md | grep -c "^---$"
# Expected: 2
```

### Final Checklist
- [ ] All "Must Have" present (frontmatter, CEUS specs, workflow steps, CI)
- [ ] All "Must NOT Have" absent (no workflow logic changes, no extra journals, no placeholder files)
- [ ] Grep-based SKILL.md validation passes
- [ ] README updated with new structure

### Reference Documentation
- **Agent Skills Specification**: https://agentskills.io/specification
- **Validation Approach**: Grep-based (no external npm dependencies)
- **YAML Frontmatter Requirements** (from spec):
  - `name`: max 64 chars, pattern `^[a-z0-9]+(-[a-z0-9]+)*$`, must match directory name
  - `description`: max 1024 chars, non-empty
