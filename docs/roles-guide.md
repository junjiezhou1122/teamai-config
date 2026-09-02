# 🎭 Roles 配置指南

> 如何用 roles 控制不同成员看到不同的 skills

---

## ✅ 当前角色（已启用）

teamai-config 现在用 7 个 roles 来管理 skills 访问权限。

---

## 📋 Roles 定义

```yaml
# manifest/roles.yaml
roles:
  - id: frontend       # 36 个 skills - UI/动画/设计
  - id: backend        # 2 个 skills - 后端
  - id: security       # 43 个 skills - 安全/逆向/渗透
  - id: designer       # 28 个 skills - 设计师
  - id: researcher     # 9 个 skills - 研究员
  - id: fullstack      # 81 个 skills - 全栈
  - id: all            # 81 个 skills - 所有
```

---

## 🗂️ Namespace 结构

```
team-repo/skills/
├── frontend/
│   ├── emil-kowalski/    # 动画、设计（12）
│   ├── taste-skill/      # Anti-slop 设计（13）
│   ├── tools/            # 工具（3）
│   ├── thinking/         # 思维方法（8）
│   └── research/         # 学术研究（1）
├── backend/
│   ├── ecc/              # 错误处理、API 设计等
│   └── mattpocock/       # TDD, domain modeling
└── security/             # 43 个安全技能
    ├── api-security/
    ├── apk-reverse/
    ├── attack-chain/
    ├── malware-analysis/
    ├── pentest-tools/
    ├── reverse-engineering/
    └── ...
```

---

## 📊 Skills 分布

| Role | Namespace | Skills 数量 |
|------|-----------|-------------|
| **frontend** | 5 个 namespace | **36** |
| **backend** | backend | **2** |
| **security** | security | **43** |
| **designer** | frontend 设计相关 | **28** |
| **researcher** | thinking + research | **9** |
| **fullstack** | frontend + backend + security | **81** |
| **all** | 所有 | **81** |

---

## 🔒 Security Skills 列表（43 个）

### 逆向工程（11）
- `reverse-engineering` - 总览
- `ghidra-reverse` - Ghidra 工具
- `ida-reverse` - IDA Pro
- `radare2` - radare2 工具
- `binary-diff` - 二进制对比
- `patch-diff-exploit` - 补丁对比
- `pwn-chain` - PWN 链
- `protocol-reverse` - 协议逆向
- `go-rust-reverse` - Go/Rust 逆向
- `dotnet-reverse` - .NET 逆向
- `js-reverse` - JS 逆向
- `macos-reverse` - macOS 逆向

### 移动安全（3）
- `apk-reverse` - Android APK
- `mobile-reverse` - 移动通用
- `browser-extension-reverse` - 浏览器扩展

### 渗透测试（6）
- `pentest-tools` - 工具链（含 src-hunter）
- `attack-chain` - 攻击链编排
- `ctf-sandbox` - CTF 靶场
- `api-security` - API 安全测试
- `web-application` - Web 应用
- `browser-automation` - 浏览器自动化

### 安全研究（8）
- `malware-analysis` - 恶意软件分析
- `edr-bypass-re` - EDR 绕过
- `supply-chain-security` - 供应链安全
- `threat-intelligence` - 威胁情报
- `threat-hunting` - 威胁狩猎
- `digital-forensics` - 数字取证
- `code-audit` - 代码审计
- `case-review` - 案例复盘

### 平台安全（6）
- `cloud-k8s` - 云原生/K8s
- `database-security` - 数据库安全
- `email-security` - 邮件安全
- `identity-federation` - 身份联合
- `windows-ad` - Windows AD
- `firmware-pentest` - 固件渗透

### 硬件/IoT（3）
- `hardware-security` - 硬件安全
- `radio-sdr` - 无线电/SDR
- `wifi-wireless` - 无线网络
- `ot-ics` - 工业控制

### LLM 安全（1）
- `llm-security` - LLM 安全（含 OWASP Top 10）

### 工具与文档（4）
- `diagram-generator` - 图表生成
- `docs-generator` - 报告生成
- `reverse-skill-router` - 路由
- `thick-client` - 厚客户端

---

## 🚀 团队成员使用

### 选择你的角色

```bash
# 查看所有角色
teamai roles list

# 设置 primary role
teamai roles set frontend

# 同时有多个角色
teamai roles set frontend --add security
```

### 同步 skills
```bash
teamai pull
```

✅ 只同步你 role 的 skills！

---

## 🔄 切换角色

```bash
# 从 frontend 切到 security
teamai roles set security
teamai pull
# ✅ frontend skills 自动删除，security skills 自动下载
```

---

## 💡 最佳实践

1. **Namespace 按职能划分**
   - ✅ `security/`（所有安全相关）
   - ❌ `zhaoxuya520-reverse-skill/`（按仓库划分）

2. **Role 共享 namespace**
   - `frontend` 包含所有 frontend 相关 namespace
   - `fullstack` 包含 frontend + backend + security

3. **添加新 skill**
   - **简单方法**：cp 到 `~/.claude/skills/<name>/`，`teamai push`
   - **推荐方法**：直接放到对应 namespace 的 team repo

---

*最后更新: 2026-09-03*
