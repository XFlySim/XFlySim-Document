<p align="center">
  <img src="docs/public/logo.png" alt="XFlySim" width="120" />
</p>

<h1 align="center">XFlySim-Document</h1>

[![VitePress](https://img.shields.io/badge/VitePress-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://github.com/vuejs/vitepress)
[![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=Markdown&logoColor=white)](https://www.markdownguide.org/)

> **在线访问**：<https://docs.xflysim.com>

## 关于项目

本项目为 XFLYSIM 连飞平台官方文档站，集中存放用户准则、连线教程与平台守则等文档。

### 技术栈

- [VitePress](https://vitepress.dev/) - 基于 Vite 的静态站点生成器
- [Vue 3](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Markdown](https://www.markdownguide.org/) - 轻量级标记语言

## 快速开始

以下步骤帮助你在本地快速启动文档站，进行预览或贡献。

### 前置要求

确保你的环境中已安装以下工具：

- [Node.js](https://nodejs.org/) 18.0 或更高版本
- [npm](https://www.npmjs.com/) 包管理器（或任意包管理工具如 yarn、pnpm）
- [Git](https://git-scm.com/) 版本控制系统

### 克隆仓库

```bash
git clone https://github.com/XFlySim/XFlySim-Document.git
cd XFlySim-Document
```

### 安装依赖

```bash
npm install
```

### 本地开发

启动本地开发服务器：

```bash
npm run docs:dev
```

启动后，在浏览器中访问 http://localhost:5173 即可实时预览文档。

### 构建生产版本

```bash
npm run docs:build
```

构建产物将输出到 `docs/.vitepress/dist` 目录，可用于部署。

## 目录结构

```
docs/
├── .vitepress/            # 站点配置与主题
│   └── config.mts         # 站点配置（导航、侧边栏、i18n 等）
├── public/                # 静态资源（logo 等）
├── rules.md               # 用户准则（简体中文）
├── controller-rules.md    # 管制员守则
├── tutorial/              # 连线教程
├── contributors.md        # 贡献成员
├── zh-TW/                 # 繁體中文版本
└── en/                    # English version
```

## 项目贡献者

[![](https://contrib.rocks/image?repo=XFlySim/XFlySim-Document)](https://github.com/XFlySim/XFlySim-Document/graphs/contributors)

我们欢迎每一位贡献者！如果你希望参与文档编写、功能改进或问题反馈，请通过 [Issue](https://github.com/XFlySim/XFlySim-Document/issues) 与我们联系。
