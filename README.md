# Accounting Study

个人会计学习站。仓库建议名称：`accounting-study`。

## 网站结构

每一章固定分为两部分：

- **学（Learn）**：课件整理、专业术语、大白话原理、知识点关系、全部课件例题、主动回忆。
- **练（Practice）**：题库、逐项解释、整体解释、错题记录与复习。

当前内容：

- **第十九章 · 租赁**：练
- **第二十章 · 持有待售的非流动资产、处置组和终止经营**：学

目录约定：

```text
/
├── index.html
├── chapter19/
│   └── practice.html
└── chapter20/
    └── learn.html
```

GitHub Pages 通过 `.github/workflows/pages.yml` 自动部署。后续章节继续沿用 `chapterXX/learn.html` 与 `chapterXX/practice.html` 的结构，避免每加一章就重做总页面架构。

## 第 21–25 章补漏层（audit）

- `assets/audit21.js`～`audit25.js`：只补充课件考过、正文没点透的规则；每张卡都经过 PDF 与正文双重去重校验，正文已覆盖的内容不会重复出现。
- 挂载点统一为 `.chapter-map2 → .decision-lab → #why`，带稳定锚点 `#audit21`～`#audit25`，并自动补桌面/移动知识树链接（幂等）。
- 部署前检查（pages.yml）：JS 语法、分片连续性、内部资源引用、死锚点、重复注入，任一失败即阻断部署。
