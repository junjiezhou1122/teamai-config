# 🎨 Skills 目录

> 前端开发必备的 Skills 集合

---

## 📦 必装技能包 (Required)

> 强烈推荐，所有前端项目都应该安装

---

### 1. 🍽️ taste-skill

**Stars**: 83K | **来源**: [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)

**标签**: `required` `ui` `design` `frontend`

**功能**:
- 防止 AI 生成丑界面（Anti-slop）
- 提供设计品味指导
- 自动适配项目设计系统

**Skills**:
- `taste-skill` - 主技能（v2）
- `redesign-skill` - 改造现有项目
- `soft-skill` - 高端视觉设计
- `minimalist-skill` - 极简编辑风
- `brutalist-skill` - 工业风
- `image-to-code-skill` - 图片转代码
- `imagegen-frontend-web` - 网站设计图生成
- `imagegen-frontend-mobile` - 移动端设计图生成
- `brandkit` - 品牌工具包

**使用场景**:
```
你：帮我做一个高端的产品页面
AI：[taste-skill 触发] → 生成有设计感的界面
```

---

### 2. 🎬 emil-kowalski (动画专家)

**Stars**: 34K | **来源**: [emilkowalski/skills](https://github.com/emilkowalski/skills)

**标签**: `required` `animation` `ui` `frontend`

**功能**:
- Vercel/Linear 前工程师出品
- 专业的动画指导
- 精确的动画参数值
- Apple 设计原则

**Skills**:
- `emil-design-eng` - 设计+动画主技能
- `animate` - 动画构建
- `animate-expo` - React Native 动画
- `animation-vocabulary` - 动画术语
- `apple-design` - Apple 设计原则
- `review-animations` - 动画审查
- `improve-animations` - 动画优化
- `find-animation-opportunities` - 找动画机会
- `pick-ui-library` - 选 UI 库
- `prototype` - 快速原型
- `ask-sonner` - Sonner 指南
- `write-swift` - Swift 编写

**使用场景**:
```
你：给这个按钮加个动效
AI：[animate 触发] → 使用正确的 easing 和时长
```

---

### 3. 🌐 clone-website

**来源**: [braxtonROSE4/clone-any-website](https://github.com/braxtonROSE4/clone-any-website)

**标签**: `required` `clone` `frontend`

**功能**:
- 输入 URL 自动克隆网站
- ego-browser 驱动
- 像素级克隆验证
- 提取真实 CSS tokens

**使用场景**:
```
你：clone https://example.com
AI：→ 提取 DOM/CSS → 重建网站 → 评分验证
```

**依赖**: ego-browser

---

## 📦 可选技能包 (Optional)

> 按需安装，根据项目需求选择

---

### 🎨 UI 设计类

#### design-taste-frontend-v1
**来源**: taste-skill

**标签**: `optional` `ui` `design`

**功能**: taste-skill v1 版本，保留给需要旧版本的项目

---

#### gpt-tasteskill
**来源**: taste-skill

**标签**: `optional` `ui` `design`

**功能**: GPT/Codex 专用版本，更严格的 Anti-slop 规则

---

#### stitch-skill
**来源**: taste-skill

**标签**: `optional` `ui` `design`

**功能**: Google Stitch 兼容设计规则

---

### 🖼️ 图片处理类

#### imagegen-frontend-web
**来源**: taste-skill

**标签**: `optional` `image` `design`

**功能**: 生成网站设计参考图

**使用场景**:
```
你：帮我生成一个 SaaS 产品的设计图
AI：→ 输出参考图片
```

---

#### imagegen-frontend-mobile
**来源**: taste-skill

**标签**: `optional` `image` `design`

**功能**: 生成移动端设计参考图

---

### 🧩 组件构建类

#### variant
**来源**: jakubkrehel/skills

**标签**: `optional` `ui` `component`

**功能**: 构建组件变体，生成 3 个版本供选择

**使用场景**:
```
你：帮我设计这个按钮
AI：→ 生成 3 个变体 → 页面切换选择
```

---

#### break
**来源**: jakubkrehel/skills

**标签**: `optional` `ui` `testing`

**功能**: 压力测试组件，渲染所有状态和场景

---

### 📚 设计系统类

#### better-interface
**来源**: jakubkrehel/skills

**标签**: `optional` `ui` `review`

**功能**: 综合评审（整合所有 better-* skills）

---

#### better-colors
**来源**: jakubkrehel/skills

**标签**: `optional` `ui` `color`

**功能**: OKLCH 颜色系统，生成调色板

---

#### better-typography
**来源**: jakubkrehel/skills

**标签**: `optional` `ui` `typography`

**功能**: 字体系统优化

---

#### better-accessibility
**来源**: jakubkrehel/skills

**标签**: `optional` `ui` `a11y`

**功能**: WCAG 无障碍合规检查

---

### 🔍 评审类

#### interface-review
**来源**: jakubkrehel/skills

**标签**: `optional` `review` `ui`

**功能**: 变更评审，检查 PR 的 UI 质量

---

#### explain-interface
**来源**: jakubkrehel/skills

**标签**: `optional` `learn` `ui`

**功能**: 解析 UI 是如何实现的

---

## 🏷️ 标签说明

| 标签 | 说明 | 关联 Skills |
|------|------|------------|
| `required` | 必装 | taste-skill, emil-kowalski, clone-website |
| `optional` | 可选 | 其他 |
| `ui` | UI 相关 | 大部分 |
| `design` | 设计相关 | taste-skill 系列 |
| `animation` | 动画相关 | emil-kowalski 系列 |
| `clone` | 网站克隆 | clone-website |
| `frontend` | 前端通用 | 大部分 |
| `image` | 图片生成 | imagegen 系列 |
| `review` | 代码评审 | interface-review |
| `a11y` | 无障碍 | better-accessibility |

---

## 🚀 快速安装

### 必装
```bash
# taste-skill
teamai source add https://github.com/Leonxlnx/taste-skill.git --name taste-skill

# emil-kowalski
teamai source add https://github.com/emilkowalski/skills.git --name emil-kowalski

# clone-website
teamai source add https://github.com/braxtonROSE4/clone-any-website.git --name clone-website

# 同步
teamai pull
```

### 可选
```bash
# 按需添加
teamai source add <repo> --name <name>
teamai pull
```

---

## 📝 维护指南

### 添加新 Skill
1. 在对应分类下添加条目
2. 设置标签（required/optional + 功能标签）
3. 填写来源、功能描述、使用场景

### 更新 Skill
1. 修改对应条目
2. 更新 Stars 数
3. 更新功能描述

### 删除 Skill
1. 从目录移除
2. 移除对应的 teamai source
3. 删除本地 skills 目录

---

## 🔗 相关资源

- [Skills.sh](https://skills.sh) - Skills 搜索引擎
- [Awesome Claude Skills](https://github.com/ComposioHQ/awesome-claude-skills) - Skills 集合

---

*最后更新: 2026-09-03*
