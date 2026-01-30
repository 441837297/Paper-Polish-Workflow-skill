# 论文润色工作流

[English](README.md) | [中文](README_CN.md)

一个系统化的、AI 辅助的学术论文润色工作流。专为 Claude/OpenCode AI 助手设计。

## 这是什么？

一个引导你**逐步**润色论文的 AI 技能：

```
结构 → 句子逻辑 → 表达方式
```

AI 不会随意修改，而是帮助你：
1. 确认每个章节的整体结构
2. 确认每句话的逻辑
3. 从多个表达选项中选择
4. 检查一致性和连贯性

## 特点

- **自上而下**：确认逻辑之前不会跳到措辞
- **用户主导**：每一步都需要你的确认
- **选项制**：使用交互式选择提高效率
- **范文驱动**：参考示例论文获取专业表达
- **期刊感知**：包含 CEUS 特定要求（可扩展到其他期刊）

## 安装

### OpenCode 用户

```bash
# 将技能目录复制到你的项目
cp -r paper-polish-workflow/ .opencode/skills/
```

### Claude Code 用户

```bash
# 复制技能目录
cp -r paper-polish-workflow/ .claude/skills/
```

## 快速开始

直接让 AI 帮你润色论文：

```
用户：帮我润色摘要

AI：[阶段 0]
    - 目标期刊是什么？
    - 示例论文在哪里？
    
用户：CEUS，示例在 docs/example

AI：[步骤 1] 展示结构供确认...
AI：[步骤 2] 展示每句话的逻辑...
AI：[步骤 3] 展示表达选项...
AI：[步骤 5] 检查连贯性，建议过渡词...
AI：将润色后的版本写入文件
```

## 工作流步骤

| 步骤 | 内容 |
|------|------|
| **阶段 0** | AI 询问目标期刊、字数限制、示例论文 |
| **步骤 1** | AI 展示章节结构供确认 |
| **步骤 2** | AI 展示每句话的逻辑供确认 |
| **步骤 3** | AI 展示表达选项（多选题） |
| **步骤 4** | AI 根据需要参考示例论文 |
| **步骤 5** | AI 检查重复和连贯性 |
| **写入** | AI 展示最终版本并写入文件 |

## 支持的期刊

### CEUS (Computers, Environment and Urban Systems)

内置支持：
- 字数限制（总计 ≤8,000 字，摘要 ≤250 字）
- Highlights 生成（3-5 条，每条 ≤85 字符）
- 风格检查清单（地理空间视角、政策影响）
- 章节字数预算建议

查看 [`references/journals/ceus.md`](references/journals/ceus.md) 获取完整规范。

### 添加其他期刊

在 `references/journals/` 目录下按照 CEUS 模板格式创建新文件。

## 项目结构

```
paper-polish-workflow/
├── paper-polish-workflow/
│   └── SKILL.md              # 主技能定义
├── references/
│   ├── journals/
│   │   └── ceus.md           # CEUS 期刊规范
│   └── expression-patterns.md # 学术写作模式
├── examples/
│   └── abstract-polishing-session.md
├── .github/
│   └── workflows/
│       └── validate-skill.yml # CI 验证
├── README.md
├── README_CN.md
├── CONTRIBUTING.md
├── CONTRIBUTING_CN.md
├── CHANGELOG.md
└── LICENSE
```

## 要求

- 支持工具访问的 OpenCode 或 Claude Code
- 需要的工具：
  - `mcp_question` - 用于选项选择
  - `mcp_read`、`mcp_write` - 用于文件操作
  - `mcp_look_at` - 用于 PDF 分析（可选）

## 示例会话

查看 [examples/abstract-polishing-session.md](examples/abstract-polishing-session.md) 获取完整演示。

## 贡献

查看 [CONTRIBUTING_CN.md](CONTRIBUTING_CN.md) 了解贡献指南。欢迎贡献：
- 其他期刊模板
- 改进表达模式
- 工作流优化

## 许可证

MIT 许可证 - 详见 [LICENSE](LICENSE)。

## 致谢

在为 CEUS 期刊投稿润色双层城市感知论文的过程中，通过反复迭代开发而成。
