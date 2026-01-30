# Paper Polish Workflow 论文润色工作流

[English](README.md) | [中文](README_CN.md)

一个系统化的 AI 辅助学术论文润色工作流，专为 Claude/OpenCode AI 助手设计。

## 这是什么？

这是一个 AI 技能 (Skill)，引导你**逐步**完成论文润色：

```
结构 → 句子逻辑 → 具体表达
```

与其让 AI 随意修改，不如通过这个工作流：
1. 先确认章节的整体结构
2. 再确认每句话的逻辑
3. 从多个表达选项中选择
4. 最后检查一致性和连贯性

## 核心特性

- **自顶向下**：在确认逻辑之前，绝不跳到措辞修改
- **用户主导**：每一步都需要你的确认才会继续
- **选项驱动**：使用交互式选择，高效做出决定
- **范文参考**：可参考示例论文获取专业表达
- **期刊适配**：内置 CEUS 期刊要求（可扩展到其他期刊）

## 安装方法

### OpenCode 用户

```bash
# 复制到项目的 skills 目录
mkdir -p .opencode/skills
cp skill/paper-polish-workflow.md .opencode/skills/
```

### Claude Code 用户

将 `skill/paper-polish-workflow.md` 复制到你的项目中，并在配置中引用它。

## 快速开始

直接让 AI 帮你润色论文：

```
用户：帮我润色摘要

AI：[阶段0] 
    - 目标期刊是什么？
    - 范文在哪里？
    
用户：CEUS 期刊，范文在 docs/example

AI：[步骤1] 展示结构供确认...
AI：[步骤2] 展示每句话的逻辑供确认...
AI：[步骤3] 展示表达选项供选择...
AI：[步骤5] 检查连贯性，建议过渡词...
AI：将润色后的版本写入文件
```

## 工作流程步骤

| 步骤 | 内容说明 |
|------|----------|
| **阶段0** | AI 询问目标期刊、字数限制、范文位置 |
| **步骤1** | AI 展示章节结构供确认 |
| **步骤2** | AI 展示每句话的逻辑供确认 |
| **步骤3** | AI 展示表达选项（多选题形式） |
| **步骤4** | 如有需要，AI 参考范文 |
| **步骤5** | AI 检查重复和连贯性 |
| **写入** | AI 展示最终版本并写入文件 |

## 支持的期刊

### CEUS (Computers, Environment and Urban Systems)

内置支持：
- 字数限制（总共 ≤8,000 词，摘要 ≤250 词）
- Highlights 生成（3-5 条，每条 ≤85 字符）
- 风格检查清单（地理空间视角、政策影响）
- 各章节字数预算建议

### 添加其他期刊

编辑 `paper-polish-workflow.md` 添加其他期刊的要求即可。

## 核心概念

### 自顶向下润色

```
┌─────────────────────────────────────┐
│  1. 结构                            │
│     这个章节包含哪些组成部分？        │
│     ↓                               │
│  2. 逻辑                            │
│     每句话应该表达什么意思？          │
│     ↓                               │
│  3. 表达                            │
│     如何用专业的方式表达？            │
└─────────────────────────────────────┘
```

### 交互式选项选择

工作流使用 `mcp_question` 进行高效选择：

```
┌─────────────────────────────────────────────┐
│ S1 表达选项                                  │
│ ─────────────────────────────────────────── │
│ S1: 城市感知对规划的重要性                    │
│                                             │
│ ○ A: Human perception of urban...           │
│ ○ B: How people perceive urban...           │
│ ○ C: Understanding how people...            │
│ ○ 自定义回答                                 │
└─────────────────────────────────────────────┘
```

## 项目结构

```
paper-polish-workflow/
├── README.md                 # 英文说明
├── README_CN.md              # 中文说明（本文件）
├── LICENSE                   # MIT 许可证
├── skill/
│   └── paper-polish-workflow.md   # 技能定义文件
└── examples/
    └── abstract-polishing-session.md  # 示例会话
```

## 环境要求

- OpenCode 或 Claude Code（需要工具访问权限）
- 需要的工具：
  - `mcp_question` - 用于选项选择
  - `mcp_read`, `mcp_write` - 用于文件操作
  - `mcp_look_at` - 用于 PDF 分析（可选）

## 示例会话

完整的润色会话示例请参阅 [examples/abstract-polishing-session.md](examples/abstract-polishing-session.md)。

## 参与贡献

欢迎贡献！请提交 Issue 或 Pull Request：
- 添加更多期刊模板
- 改进表达模式
- 优化工作流程
- 修复 Bug

## 许可证

MIT 许可证 - 可自由修改和分享。

## 致谢

本工作流在为 CEUS 期刊投稿润色双层城市感知论文的过程中迭代开发完成。
