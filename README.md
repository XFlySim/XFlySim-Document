# XFlySim-Document

XFLYSIM 连飞平台文档站源码，基于 [VitePress](https://vitepress.dev) 构建。

## 在线地址

<https://docs.xflysim.com>

## 内容

- **平台守则** — 用户准则、管制员守则
- **连线教程** — 微软模拟飞行 2020/2024、X-Plane 11/12、P3D、XVoice 语音
- 支持简体中文、繁體中文、English 三种语言

## 本地开发

环境要求：Node.js 18+

```bash
npm install
npm run docs:dev
```

启动后访问 http://localhost:5173 进行预览。

## 构建与预览

```bash
npm run docs:build    # 构建静态站点，输出到 docs/.vitepress/dist
npm run docs:preview  # 本地预览构建产物
```

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

## 参与贡献

欢迎通过 [Issue](https://github.com/XFlySim/XFlySim-Document/issues) 反馈问题，或在页面底部点击「在 GitHub 上编辑此页面」直接修改并提交 PR。