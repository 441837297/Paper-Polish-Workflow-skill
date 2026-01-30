# 贡献指南

[English](CONTRIBUTING.md) | [中文](CONTRIBUTING_CN.md)

感谢你对 Paper Polish Workflow 项目的关注！

## 如何贡献

### 添加期刊模板

1. 在 `references/journals/` 目录下创建新文件
2. 命名为 `[期刊名].md`（小写，空格用连字符）
3. 包含以下内容：
   - 字数限制
   - 摘要要求
   - 特殊格式规则
   - 风格检查清单
   - 字数预算参考

### 改进表达模式库

1. 编辑 `references/expression-patterns.md`
2. 在相应章节下添加新模式
3. 为每个模式提供示例

### 修改技能文件

1. 编辑 `paper-polish-workflow/SKILL.md`
2. 确保保留 YAML 前置元数据：
   ```yaml
   ---
   name: paper-polish-workflow
   description: ...
   ---
   ```
3. 保持文件在 500 行以内
4. 维护工作流结构（步骤 1-6）

## SKILL.md 要求

### 前置元数据（必需）

每个 SKILL.md 必须有 YAML 前置元数据：

```yaml
---
name: skill-name          # 小写字母、数字、连字符
description: 包含触发关键词的简短描述
---
```

**规则：**
- `name`：最多 64 字符，格式 `^[a-z0-9]+(-[a-z0-9]+)*$`
- `description`：最多 1024 字符，包含触发关键词
- `name` 必须与父目录名称匹配

### 文件结构

```markdown
---
name: ...
description: ...
---

# 技能标题

## 主要功能
...

## 触发条件
...

## 核心原则
...

## 完整工作流
...
```

## Pull Request 流程

1. Fork 仓库
2. 创建功能分支
3. 进行修改
4. 使用 Claude/OpenCode 测试
5. 提交 Pull Request

## 有问题？

欢迎提 Issue 或发起讨论！
