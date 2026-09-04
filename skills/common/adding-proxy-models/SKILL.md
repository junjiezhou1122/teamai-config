---
name: adding-proxy-models
description: Use when adding new models or API keys to an LLM proxy service like chatgptpay.cc, APIKEY.FUN, 4router, FennoAI, or any OpenAI-compatible relay that has a web-based provider management dashboard and exposes per-model-group API keys.
---

# Adding Proxy Models

## Overview

LLM relay/proxy services (chatgptpay, APIKEY.FUN, 4router, FennoAI, subrouter-*) follow a consistent 2-step pattern:

1. **Source service** issues API keys, each bound to a model group (with per-group pricing).
2. **Proxy dashboard** consumes those keys and routes requests by namespace prefix.

This skill captures that workflow so it transfers to any new provider with minimal rework.

## Core Pattern

```
┌─────────────────────────────────────────────────────────┐
│ Step 1: Source service (e.g., chatgptpay.cc)            │
│   • Top up balance if needed                            │
│   • Create API key(s), each bound to one model group    │
│   • Set quota = 0 for unlimited per-key                 │
│   • Capture full key (sk-...) — UI masks it             │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│ Step 2: Proxy management dashboard (e.g., mgmt.html)    │
│   • Login with admin token                              │
│   • OpenAI-compatible → New (or Edit existing) provider │
│   • Fill: name, baseurl (with /v1), prefix, key(s)     │
│   • Click "添加密钥条目" once per extra key              │
│   • Pull models from endpoint ("从端点拉取")             │
└─────────────────────────────────────────────────────────┘
```

## Quick Reference

| Step | Action | Where |
|---|---|---|
| 1. Create key | `/keys` → 创建密钥 → 选分组 + 额度 | source dashboard |
| 2. Get full key | `GET /api/v1/keys` (auth: user JWT, not sk-token) | source API |
| 3. Login proxy | admin URL + admin token | proxy mgmt.html |
| 4. Add provider | AI 提供商 → OpenAI 兼容 → 新建 | proxy dashboard |
| 5. Pull models | "从端点拉取" button on saved provider | proxy edit mode |

## Worked Example: chatgptpay.cc + CLI Proxy API

**Setup**

- Source: `chatgptpay.cc` (user `junjiezhou1122`)
- Proxy: `http://146.190.64.199:8317/management.html` (admin token = `junjiezhou1122`)
- Goal: expose GPT + Claude/Gemini (multi-key for failover) and domestic models (cheap fallback)

**Step 1 — Create 4 keys in chatgptpay.cc**

| Key name | Group | Rate | Purpose |
|---|---|---|---|
| `gpt-test-002` | chatgpt 福利分组 | 0.075× | cheapest GPT, no SLA |
| `gpt-mixed-1` | chatgpt Plus 混池1 | 0.11× | failover pool |
| `gpt-mixed-2` | chatgpt Plus 混池2 | 0.09× | failover pool |
| `test-bot-001` | 国产模型分组 | 0.001× | glm/qwen/kimi/deepseek |

All quota = $0. The full `sk-...` keys come back from `GET /api/v1/keys` with the user JWT — the dashboard UI only shows `sk****`.

**Step 2 — Configure 2 providers in management.html**

| Provider | URL | Prefix | Keys |
|---|---|---|---|
| `ChatGPTPay-OpenAI` | `https://chatgptpay.cc/v1` | `chatgptpay-` | 3 GPT keys |
| `ChatGPTPay-国产` | `https://chatgptpay.cc/v1` | `chatgptpay-` | 1 domestic key |

Form fields: 名称 / 服务地址 / 前缀 / 优先级 / API 密钥条目 (multi-key via "添加密钥条目") / 自定义模型.

## Common Mistakes

| Mistake | Why it breaks | Fix |
|---|---|---|
| All keys in one provider | Load balancer picks a key that can't serve the model → 50% failures | Split by capability (OpenAI vs domestic) — at minimum 2 providers |
| Forgot "从端点拉取" | Proxy doesn't know which models exist | Click after saving the provider |
| Distinct prefix per provider with overlapping models | `gpt-5.5` ambiguity across two providers | If model lists overlap, use distinct prefixes; if not (this example), same prefix is fine |
| Quota > 0 on every key | One key exhausts before failover | Set quota = 0 (unlimited per-key; account balance is the real limit) |
| Key bound to wrong group | Key can't serve requested model → 404 | Bind each key to the group whose models it will serve |
| Using username as Bearer token | Wrong auth scheme | Use `sk-...` API keys for `/v1/*`; admin/username is for the management dashboard only |

## Adapting to Other Proxies

Same 2-step pattern. Find the dashboard + admin token, then map the source service's "create key + group" flow onto the proxy's "add provider + paste key" flow.

| Proxy | Dashboard | Notes |
|---|---|---|
| chatgptpay.cc | `http://146.190.64.199:8317/management.html` | admin token = username |
| APIKEY.FUN | `https://api.apikey.fun` + dashboard | single key per account |
| 4router | `https://4Router.net` | multi-key supported |
| FennoAI / 七牛云 / 无限星河 | quick-add presets in proxy UI | one-click import |

For a brand-new relay: locate the admin URL in the platform's docs, find/generate an admin token, then apply the 2-step pattern. The form fields vary (服务地址 / base URL / endpoint URL all mean the same thing).