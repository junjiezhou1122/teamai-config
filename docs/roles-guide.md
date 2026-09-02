# 🎭 Roles 配置指南

> 如何用 roles 控制不同成员看到不同的 skills

---

## ✅ 已启用 Roles

teamai-config 现在使用 roles 来管理 skills 访问权限。

---

## 📋 当前角色定义

```yaml
# manifest/roles.yaml
roles:
  - id: frontend          # 36 个 skills
    skills:
      - frontend/emil-kowalski   (12 skills)
      - frontend/taste-skill     (13 skills)
      - frontend/tools           (3 skills)
      - frontend/thinking        (8 skills)
      - frontend/research        (1 skill)

  - id: backend           # 2 个 skills
    skills:
      - backend                 (ecc + mattpocock)

  - id: designer          # 28 个 skills
    skills:
      - frontend/emil-kowalski
      - frontend/taste-skill
      - frontend/tools

  - id: researcher        # 9 个 skills
    skills:
      - frontend/research
      - frontend/thinking

  - id: all               # 所有 skills
    skills:
      - frontend
      - backend
```

---

## 🗂️ Namespace 结构

```
team-repo/skills/
├── frontend/
│   ├── emil-kowalski/    # 动画、设计
│   ├── taste-skill/      # Anti-slop 设计
│   ├── tools/            # 工具 (clone-website, learning-feynman, openLesson)
│   ├── thinking/         # 思维方法
│   └── research/         # 学术研究
└── backend/
    ├── ecc/              # 错误处理、API 设计等
    └── mattpocock/       # TDD, domain modeling
```

---

## 🚀 团队成员使用

### 选择你的角色

```bash
# 查看所有角色
teamai roles list

# 设置 primary role
teamai roles set frontend

# 也可以同时有多个角色（除了主角色外）
teamai roles set frontend --add researcher
```

### 同步 skills
```bash
teamai pull
```

✅ 只同步你 role 的 skills！其他 skills 会自动从本地删除。

---

## 🔄 切换角色

```bash
# 从 frontend 切到 backend
teamai roles set backend
teamai pull
# ✅ frontend skills 自动删除，backend skills 自动下载
```

---

## 📊 Skills 分布

| Role | Namespace | Skills 数量 |
|------|-----------|-------------|
| **frontend** | 5 个 namespace | **36** |
| **backend** | backend | **2** |
| **designer** | 3 个 namespace | **28** |
| **researcher** | 2 个 namespace | **9** |
| **all** | 所有 | **38** |

---

## 🛠️ Admin 操作

### 添加新 role
```bash
teamai roles add <role-id> --namespaces <ns1,ns2,...> -d "description"
```

### 更新 role
```bash
teamai roles update <role-id> --add-namespaces <ns>
teamai roles update <role-id> --remove-namespaces <ns>
```

### 删除 role
```bash
teamai roles remove <role-id>
```

> 这些命令会自动 push 一个 PR！

---

## 💡 最佳实践

1. **Namespace 按职能划分**，不是按 source 划分
   - ✅ `frontend/emil-kowalski`, `frontend/taste-skill`
   - ❌ 按 fork 源划分（emil-kowalski/taste-skill 是 namespace）

2. **Role 可以共享 namespace**
   - `frontend` 包含所有 frontend 相关的 namespace
   - `designer` 只包含 `frontend/emil-kowalski`, `frontend/taste-skill`, `frontend/tools`

3. **使用 `teamai roles`** 命令而不是手动编辑
   - 自动 push PR
   - 团队成员下次 `teamai pull` 就能拿到

---

## 🔧 故障排除

### Q: 切换 role 后 pull 没生效？
```bash
teamai pull --force
```

### Q: 想加 namespace？
1. 创建 `skills/<new-namespace>/` 目录
2. 移动 skills 进去
3. 在 `manifest/roles.yaml` 里添加 namespace
4. Push

### Q: 不想用 roles？
删除 `manifest/roles.yaml`，pull 会同步所有 skills。

---

*最后更新: 2026-09-03*
