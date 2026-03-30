<p align="center">
  <img src="assets/logo.jpg" alt="Paper Polish Workflow Suite" width="360">
</p>

<h1 align="center">Paper Polish Workflow</h1>

<p align="center">
  <strong>9 项海洋科学学术论文写作、润色与投稿技能套件 —— Claude Code Plugin。</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT">
  <img src="https://img.shields.io/badge/Claude%20Code-Skills-blue" alt="Claude Code">
  <img src="https://img.shields.io/badge/domain-Ocean%20Science-0077b6" alt="Ocean Science">
</p>

---

[中文](#chinese) | [English](#english)

---

> **⚠️ 这是一个针对海洋科学领域的定制化 Fork**
>
> 原项目 [Lylll9436/Paper-Polish-Workflow-skill](https://github.com/Lylll9436/Paper-Polish-Workflow-skill) 是一个优秀的通用学术写作技能套件，在此向原作者致以诚挚感谢。
>
> **为什么 Fork？** 原版的 Core Prompt、图表库、审稿维度和期刊模板均面向计算机科学与地理信息领域设计（SOTA 对比、消融实验、混淆矩阵、CEUS 等期刊）。本 Fork 将其全面适配为**物理海洋学**研究场景：重写了 6 个 Core Prompt 以符合 JPO/JGR/GRL/NC/NCC 的投稿标准，新增海洋科学图表库（断面图、Hovmöller 图、T-S 图等）和 ocean-science-domain 表达模式参考，删除了与海洋科学无关的技能（repo-to-paper、team、literature、visualization、experiment、translation），并将审稿维度从 ML 模型评估改为数据质量控制、物理机制解释和时空覆盖度评估。
>
> 如果你是**计算机科学或地理信息领域**的研究者，请使用原版仓库。

---

<a name="chinese"></a>

## 安装说明

### 首次安装

**macOS / Linux：**
```bash
git clone https://github.com/441837297/Paper-Polish-Workflow-skill.git /tmp/ppw
cp -r /tmp/ppw/skills/* ~/.claude/skills/
cp -r /tmp/ppw/references ~/.claude/references
```

**Windows（PowerShell）：**
```powershell
git clone https://github.com/441837297/Paper-Polish-Workflow-skill.git "$env:TEMP\ppw"
Copy-Item -Recurse "$env:TEMP\ppw\skills\*" "$env:USERPROFILE\.claude\skills\"
Copy-Item -Recurse "$env:TEMP\ppw\references" "$env:USERPROFILE\.claude\references"
```

完成后 9 个 Skills 即可正常使用，无需重启 Claude Code（执行 `/reload-plugins` 刷新即可）。

### 后续更新

> 也可以直接使用 `/ppw:update` 技能自动从 GitHub 拉取并更新。

如果手动更新，需要先进入 clone 目录拉取最新代码，再重新复制：

**macOS / Linux：**
```bash
cd /tmp/ppw && git pull
cp -r /tmp/ppw/skills/* ~/.claude/skills/
cp -r /tmp/ppw/references/* ~/.claude/references/
```

**Windows（PowerShell）：**
```powershell
Set-Location "$env:TEMP\ppw"; git pull
Copy-Item -Recurse "$env:TEMP\ppw\skills\*" "$env:USERPROFILE\.claude\skills\"
Copy-Item -Recurse "$env:TEMP\ppw\references\*" "$env:USERPROFILE\.claude\references\"
```

安装后的目录结构如下：

```
~/.claude/
├── skills/              ← 上方命令复制到此
│   ├── ppw-polish/
│   ├── ppw-de-ai/
│   └── ...
└── references/          ← Skills 引用路径基准
    ├── expression-patterns/
    │   └── ocean-science-domain.md
    ├── anti-ai-patterns/
    └── journals/
        └── jpo.md / jgr.md / grl.md / nc.md / ncc.md
```

---

## 技能清单

所有技能统一使用 `ppw:` 命名空间前缀，通过 `/ppw:技能名` 调用。

### 写作工作流

| 技能 | 触发示例 | 功能描述 |
|------|---------|---------|
| `/ppw:polish` | `润色这段英文` | 通过快速修复或引导式多轮工作流润色英文学术文本，支持 JPO/JGR/GRL/NC/NCC 期刊风格适配，自动检测输入格式（LaTeX/Markdown）与语言（中文/英文）。 |
| `/ppw:de-ai` | `降AI这段论文` | 检测并改写英文学术文本中的 AI 生成痕迹，两阶段工作流：扫描标记风险，再批量改写。 |
| `/ppw:reviewer-simulation` | `审稿这篇论文` | 模拟海洋科学期刊同行评审，生成结构化双语审稿报告，包含五维评分（新颖性、方法、写作、呈现、意义）与可操作的改进建议。 |

### 辅助工具

| 技能 | 触发示例 | 功能描述 |
|------|---------|---------|
| `/ppw:abstract` | `帮我写摘要` | 使用五句话 Farquhar 公式生成或优化摘要，支持从零生成和改写现有摘要两条路径。 |
| `/ppw:cover-letter` | `帮我写投稿信` | 生成投稿信，包含贡献声明（对齐期刊 Aims & Scope）、数据可用性声明、利益冲突声明和联系方式。支持 JPO/JGR/GRL/NC/NCC。 |
| `/ppw:caption` | `帮我写图表标题` | 生成或优化学术论文的图表标题，海洋科学感知：支持研究区域、网格数据标注和数据来源。 |
| `/ppw:logic` | `检查我的论文逻辑` | 验证论文各章节的逻辑一致性，追踪论证链，识别逻辑断裂、无支撑声明、术语不一致和数字矛盾。 |

### 维护工具

| 技能 | 触发示例 | 功能描述 |
|------|---------|---------|
| `/ppw:update` | `更新技能` / `sync skills` | 从 GitHub 仓库下载最新的 skills 和 references 文件并更新本地版本。 |

---

## 快速上手

### 场景一：论文投稿流程

将中文草稿一步步推进到可投稿的英文论文：

1. `/ppw:polish` — 对英文文本进行期刊级润色，支持中文输入自动翻译，保留修改记录。
3. `/ppw:de-ai` — 扫描 AI 生成痕迹，对标记段落进行改写。
4. `/ppw:reviewer-simulation` — 在投稿前获取包含评分和可操作建议的结构化模拟审稿报告。
5. `/ppw:cover-letter` — 生成对齐期刊 Aims & Scope 的投稿信。

### 场景二：图表辅助

准备图表时，配合使用这两个技能：

1. `/ppw:caption` — 生成或改进图表标题，支持海洋科学数据来源标注。
2. `/ppw:logic` — 检查讨论与引言、方法之间的逻辑一致性。

---

## 支持的目标期刊

| 期刊 | 缩写 | 领域 |
|------|------|------|
| Journal of Physical Oceanography | JPO | 物理海洋学 |
| Journal of Geophysical Research: Oceans | JGR | 地球物理/海洋 |
| Geophysical Research Letters | GRL | 地球物理快报 |
| Nature Communications | NC | 综合自然科学 |
| Nature Climate Change | NCC | 气候变化 |

---

## 参与贡献

发现了 Bug 或有功能需求？请在 GitHub 上提交 Issue：

- **Bug 反馈** — 描述异常行为、触发的技能名称以及你的输入内容。
- **功能需求** — 描述你想要自动化的写作任务和期望的输出结果。

详细的贡献指南请参考 [CONTRIBUTING.md](CONTRIBUTING.md) 和 [CONTRIBUTING_CN.md](CONTRIBUTING_CN.md)。

---

## 致谢

本项目 fork 自 [**Lylll9436/Paper-Polish-Workflow-skill**](https://github.com/Lylll9436/Paper-Polish-Workflow-skill)，在原版基础上针对海洋科学领域进行了定制化改造：重写了 6 个 Core Prompt 以适配 JPO/JGR/GRL/NC/NCC 期刊标准，新增海洋科学图表库和 ocean-science-domain 表达模式参考，删除了 CS/地理领域专用技能。

原项目的核心写作技能改编自 [**awesome-ai-research-writing**](https://github.com/Leey21/awesome-ai-research-writing) 中的提示词模板——该仓库收录了来自顶级科研机构（MSRA、Seed、上海 AI 实验室）和高校（北大、中科大、上交大）的学术写作提示词。

`ppw:abstract` 中的 5 句摘要结构采用 **Farquhar formula**。

---

<a name="english"></a>

> **⚠️ This is a domain-specific fork for Ocean Science**
>
> Full credit to the original project [Lylll9436/Paper-Polish-Workflow-skill](https://github.com/Lylll9436/Paper-Polish-Workflow-skill) — an excellent general-purpose academic writing skill suite.
>
> **Why fork?** The original Core Prompts, chart library, review dimensions, and journal templates were designed for computer science and GIS research (SOTA comparisons, ablation studies, confusion matrices, CEUS journal, etc.). This fork fully adapts the suite for **physical oceanography**: 6 Core Prompts rewritten for JPO/JGR/GRL/NC/NCC submission standards, ocean science chart library added (section plots, Hovmöller diagrams, T-S diagrams, Taylor diagrams), ocean-science-domain expression patterns added, CS/GIS-specific skills removed, and review dimensions changed from ML model evaluation to data quality control, physical mechanism interpretation, and spatiotemporal coverage assessment.
>
> If you work in **computer science or GIS**, use the original repo instead.

## Installation

### First-time Install

**macOS / Linux:**
```bash
git clone https://github.com/441837297/Paper-Polish-Workflow-skill.git /tmp/ppw
cp -r /tmp/ppw/skills/* ~/.claude/skills/
cp -r /tmp/ppw/references ~/.claude/references
```

**Windows (PowerShell):**
```powershell
git clone https://github.com/441837297/Paper-Polish-Workflow-skill.git "$env:TEMP\ppw"
Copy-Item -Recurse "$env:TEMP\ppw\skills\*" "$env:USERPROFILE\.claude\skills\"
Copy-Item -Recurse "$env:TEMP\ppw\references" "$env:USERPROFILE\.claude\references"
```

All 9 Skills are ready immediately. Run `/reload-plugins` in Claude Code to pick up the new skills without restarting.

### Updating

> You can also use the `/ppw:update` skill to automatically fetch and apply updates from GitHub.

To update manually, pull the latest changes in the cloned repo, then re-copy:

**macOS / Linux:**
```bash
cd /tmp/ppw && git pull
cp -r /tmp/ppw/skills/* ~/.claude/skills/
cp -r /tmp/ppw/references/* ~/.claude/references/
```

**Windows (PowerShell):**
```powershell
Set-Location "$env:TEMP\ppw"; git pull
Copy-Item -Recurse "$env:TEMP\ppw\skills\*" "$env:USERPROFILE\.claude\skills\"
Copy-Item -Recurse "$env:TEMP\ppw\references\*" "$env:USERPROFILE\.claude\references\"
```

The resulting directory layout:

```
~/.claude/
├── skills/              ← copied by the commands above
│   ├── ppw-polish/
│   ├── ppw-de-ai/
│   └── ...
└── references/          ← Skills resolve reference paths from here
    ├── expression-patterns/
    │   └── ocean-science-domain.md
    ├── anti-ai-patterns/
    └── journals/
        └── jpo.md / jgr.md / grl.md / nc.md / ncc.md
```

---

## Skill Inventory

All skills use the `ppw:` namespace prefix. Invoke with `/ppw:skill-name`.

### Writing Workflow

| Skill | Trigger Examples | Description |
|-------|-----------------|-------------|
| `/ppw:polish` | `Polish this paragraph` | Polish English academic text through quick-fix or guided multi-pass workflow. Supports Chinese input with auto-translation. Adapts to JPO/JGR/GRL/NC/NCC journal style. Auto-detects input format (LaTeX/Markdown) and source language. |
| `/ppw:de-ai` | `De-AI this paragraph` | Detect and rewrite AI-generated patterns in English academic text. Two-phase workflow: scan with risk tagging, then batch rewrite. |
| `/ppw:reviewer-simulation` | `Review this paper` | Simulate ocean science journal peer review with structured bilingual feedback. Five-dimension scoring (Novelty, Methodology, Writing, Presentation, Significance) and actionable suggestions. |

### Support Tools

| Skill | Trigger Examples | Description |
|-------|-----------------|-------------|
| `/ppw:abstract` | `Write an abstract for my paper` | Generate or optimize abstracts using the 5-sentence Farquhar formula. Supports generate-from-scratch and restructure-existing paths. |
| `/ppw:cover-letter` | `Write a cover letter for my JPO submission` | Generate submission-ready cover letters with contribution statement aligned to journal Aims & Scope, data availability, conflict of interest, and contact block. Supports JPO/JGR/GRL/NC/NCC. |
| `/ppw:caption` | `Write a caption for my figure` | Generate or optimize figure/table captions for academic papers. Ocean-science-aware: study area, gridded data notation, data source. |
| `/ppw:logic` | `Check the logic of my paper` | Verify logical consistency across paper sections. Traces argument chains and identifies gaps, unsupported claims, terminology inconsistencies, and number contradictions. |

### Maintenance

| Skill | Trigger Examples | Description |
|-------|-----------------|-------------|
| `/ppw:update` | `Update skills` / `Sync skills` | Download latest skills and references from the GitHub repo and update local files. |

---

## Quick Start

### Scenario 1: Paper Submission Chain

Take a Chinese draft all the way to a reviewer-ready English manuscript:

1. `/ppw:polish` — Polish or translate your draft (Chinese or English input); auto-detects format and language.
2. `/ppw:de-ai` — Scan for AI-generated patterns and rewrite flagged passages.
3. `/ppw:de-ai` — Scan for AI-generated patterns and rewrite flagged passages.
4. `/ppw:reviewer-simulation` — Get a structured peer review report with scores and actionable suggestions.
5. `/ppw:cover-letter` — Generate a cover letter aligned to the journal's Aims & Scope.

### Scenario 2: Figure and Table Assistance

Use these Skills together when preparing figures and tables:

1. `/ppw:caption` — Generate or improve a figure or table caption with ocean-science-aware metadata.
2. `/ppw:logic` — Check logical consistency between discussion, introduction, and methods.

---

## Supported Target Journals

| Journal | Abbreviation | Domain |
|---------|-------------|--------|
| Journal of Physical Oceanography | JPO | Physical Oceanography |
| Journal of Geophysical Research: Oceans | JGR | Geophysics / Ocean |
| Geophysical Research Letters | GRL | Geophysical Letters |
| Nature Communications | NC | Multidisciplinary |
| Nature Climate Change | NCC | Climate Change |

---

## Contributing

Found a bug or have a feature request? Open an issue on GitHub:

- **Bug reports** — describe the unexpected behavior, which Skill triggered it, and your input.
- **Feature requests** — describe the writing task you want to automate and the expected output.

See [CONTRIBUTING.md](CONTRIBUTING.md) and [CONTRIBUTING_CN.md](CONTRIBUTING_CN.md) for detailed contribution guidelines.

---

## Acknowledgements

This project is forked from [**Lylll9436/Paper-Polish-Workflow-skill**](https://github.com/Lylll9436/Paper-Polish-Workflow-skill) and customized for ocean science: Core Prompts rewritten for JPO/JGR/GRL/NC/NCC journal standards, ocean science chart library added, ocean-science-domain expression patterns added, and CS/geography-specific skills removed.

The original project's core writing Skills are adapted from [**awesome-ai-research-writing**](https://github.com/Leey21/awesome-ai-research-writing) — a curated collection of academic writing prompts from top research labs (MSRA, Seed, Shanghai AI Lab) and universities (PKU, USTC, SJTU).

The 5-sentence abstract structure in `ppw:abstract` is based on the **Farquhar formula**.
