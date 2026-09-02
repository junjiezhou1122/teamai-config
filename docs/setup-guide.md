# 🎯 teamai-cli 配置指南

> 团队成员如何配置 teamai-cli 来同步 skills

---

## ✅ 已完成配置

### 团队仓库
- **仓库**: https://github.com/junjiezhou1122/teamai-config
- **路径**: `~/.teamai/team-repo/`
- **包含**: 38 个 skills（emil-kowalski, taste-skill, clone-website, backend 等）

### 本地配置
- **scope**: user（安装到 `~/`）
- **同步路径**: `~/.claude/skills/`, `~/.codex/skills/`, `~/.cursor/skills/` 等

---

## 🚀 团队成员加入流程

### 1. 安装 teamai-cli
```bash
npm install -g teamai-cli
```

### 2. 初始化（user scope，跨项目）
```bash
teamai init junjiezhou1122/teamai-config --scope user --force
```

### 3. 同步
```bash
teamai pull
```

✅ 完成！所有 skills 会自动同步到 `~/.claude/skills/`。

---

## 📋 团队成员同步的 Skills

| Namespace | Skills 数量 | 说明 |
|-----------|-------------|------|
| emil-kowalski | 12 | 动画 + 设计专家 |
| taste-skill | 13 | Anti-slop 前端框架 |
| clone-website | 1 | 网站克隆 |
| backend | 2 | backend 工具 |
| 其他 | 10 | 知识管理、学习等 |
| **总计** | **38** | |

---

## 🔄 日常使用

### 更新本地 skills
```bash
teamai pull        # 自动同步 team repo 的最新 skills
```

### 添加新 skill
```bash
# 1. 复制 skill 到本地
cp -r my-skill ~/.claude/skills/

# 2. 推到 team repo
teamai push
# → 自动创建 PR

# 3. 合并 PR
gh pr merge <PR-number>

# 4. 团队成员下次 pull 就能拿到
```

### 移除 skill
```bash
teamai remove skills <skill-name>
teamai push
gh pr merge <PR-number>
```

---

## ⚠️ 关键配置

### 不用 roles（直接扁平同步）
我们用了最简单的配置：
- ❌ 没有 `manifest/roles.yaml`
- ❌ 没有 `primaryRole`

所有 skills 直接放在 `skills/` 根目录下，pull 会自动全部同步。

如果以后需要按角色隔离，可以：
1. 创建 `manifest/roles.yaml`
2. 设置 `primaryRole`
3. 把 skills 移到 namespace 目录（`skills/<namespace>/<skill-name>/`）

### sources 配置
`teamai.yaml` 里的 `sources` 字段已经简化：
- ❌ emil-kowalski（已 push 到 team repo，不再需要 source）
- ❌ taste-skill（同上）
- ✅ clone-website（保留作为 source，自动跟踪上游更新）
- ✅ backend（保留作为 source）

---

## 📂 目录结构

```
team-repo/
├── teamai.yaml          # Team 配置
├── manifest/
│   └── roles.yaml       # （当前没有）
├── skills/              # 直接扁平（无 namespace）
│   ├── animate/
│   ├── taste-skill/
│   ├── clone-website/
│   └── ...
├── rules/
├── docs/
└── agents/
```

---

## 🎯 一句话总结

**`teamai pull` 自动同步所有 skills 到本地 AI 工具目录，不需要任何手动操作！**

---

## 🔧 故障排除

### Q: pull 没同步 skills？
A: 检查：
1. `~/.teamai/config.yaml` 里**没有** `primaryRole` 字段
2. team repo 的 `skills/` 目录里有 skills
3. 删掉 `manifest/roles.yaml`（如果存在）

### Q: 想用 roles？
A:
1. 创建 `manifest/roles.yaml` 配置 namespace
2. 把 skills 移到 `skills/<namespace>/<skill-name>/`
3. 设置 `primaryRole: <role-id>`

### Q: 想订阅外部 source？
A: 必须满足两个条件：
1. 仓库根目录有 `teamai.yaml`，包含 `publicSkills` 列表
2. 用 `teamai source add <url> --name <name>` 添加

否则需要 fork 自己加 `teamai.yaml`。

---

*最后更新: 2026-09-03*
