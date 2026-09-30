import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'XFlySim Document',
  description: 'XFlySim Document Site',

  lastUpdated: true,

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        logo: '/logo.png',
        siteTitle: 'XFlySim 文档',
        outline: { label: '目录', level: [2, 3] },
        editLink: {
          pattern: 'https://github.com/XFlySim/XFlySim-Document/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页面'
        },
        lastUpdated: {
          text: '最后更新时间',
          formatOptions: { dateStyle: 'short', timeStyle: 'short' }
        },
        docFooter: { prev: '上一页', next: '下一页' },
        nav: [
          { text: '首页', link: '/' },
          {
            text: '平台守则',
            items: [
              { text: '用户准则', link: '/rules' },
              { text: '管制员守则', link: '/controller-rules' }
            ]
          },
          { text: '连线教程', link: '/tutorial' },
          { text: '贡献成员', link: '/contributors' }
        ],
        sidebar: [
          {
            text: '平台守则',
            items: [
              { text: '用户准则', link: '/rules' },
              { text: '管制员守则', link: '/controller-rules' }
            ]
          },
          {
            text: '连线教程',
            items: [
              { text: '快速开始', link: '/tutorial' },
              { text: '微软模拟飞行 2020/2024', link: '/tutorial/msfs' },
              { text: 'X-Plane 11/12', link: '/tutorial/xplane' },
              { text: 'P3D', link: '/tutorial/p3d' },
              { text: 'XVoice 语音', link: '/tutorial/xvoice' }
            ]
          },
          {
            text: '关于',
            items: [
              { text: '贡献成员', link: '/contributors' }
            ]
          }
        ],
        notFound: {
          title: '页面未找到',
          quote: '您访问的页面不存在或已被移动。',
          linkLabel: '返回首页',
          linkText: '回到首页',
          code: '404'
        }
      }
    },
    'zh-TW': {
      label: '繁體中文',
      lang: 'zh-TW',
      description: 'XFlySim 文件網站',
      themeConfig: {
        logo: '/logo.png',
        siteTitle: 'XFlySim 文檔',
        outline: { label: '目錄', level: [2, 3] },
        editLink: {
          pattern: 'https://github.com/XFlySim/XFlySim-Document/edit/main/docs/:path',
          text: '在 GitHub 上編輯此頁面'
        },
        lastUpdated: {
          text: '最後更新時間',
          formatOptions: { dateStyle: 'short', timeStyle: 'short' }
        },
        docFooter: { prev: '上一頁', next: '下一頁' },
        nav: [
          { text: '首頁', link: '/zh-TW/' },
          {
            text: '平台守則',
            items: [
              { text: '用戶準則', link: '/zh-TW/rules' },
              { text: '管制員守則', link: '/zh-TW/controller-rules' }
            ]
          },
          { text: '連線教學', link: '/zh-TW/tutorial' },
          { text: '貢獻成員', link: '/zh-TW/contributors' }
        ],
        sidebar: [
          {
            text: '平台守則',
            items: [
              { text: '用戶準則', link: '/zh-TW/rules' },
              { text: '管制員守則', link: '/zh-TW/controller-rules' }
            ]
          },
          {
            text: '連線教學',
            items: [
              { text: '快速開始', link: '/zh-TW/tutorial' },
              { text: '微軟模擬飛行 2020/2024', link: '/zh-TW/tutorial/msfs' },
              { text: 'X-Plane 11/12', link: '/zh-TW/tutorial/xplane' },
              { text: 'P3D', link: '/zh-TW/tutorial/p3d' },
              { text: 'XVoice 語音', link: '/zh-TW/tutorial/xvoice' }
            ]
          },
          {
            text: '關於',
            items: [
              { text: '貢獻成員', link: '/zh-TW/contributors' }
            ]
          }
        ],
        notFound: {
          title: '頁面未找到',
          quote: '您訪問的頁面不存在或已被移動。',
          linkLabel: '返回首頁',
          linkText: '回到首頁',
          code: '404'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      description: 'XFlySim Document Site',
      themeConfig: {
        logo: '/logo.png',
        siteTitle: 'XFlySim Docs',
        outline: { label: 'On this page', level: [2, 3] },
        editLink: {
          pattern: 'https://github.com/XFlySim/XFlySim-Document/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        },
        lastUpdated: {
          text: 'Last updated',
          formatOptions: { dateStyle: 'short', timeStyle: 'short' }
        },
        docFooter: { prev: 'Previous', next: 'Next' },
        nav: [
          { text: 'Home', link: '/en/' },
          {
            text: 'Rules',
            items: [
              { text: 'User Guidelines', link: '/en/rules' },
              { text: 'Controller Guidelines', link: '/en/controller-rules' }
            ]
          },
          { text: 'Tutorial', link: '/en/tutorial' },
          { text: 'Contributors', link: '/en/contributors' }
        ],
        sidebar: [
          {
            text: 'Rules',
            items: [
              { text: 'User Guidelines', link: '/en/rules' },
              { text: 'Controller Guidelines', link: '/en/controller-rules' }
            ]
          },
          {
            text: 'Tutorial',
            items: [
              { text: 'Getting Started', link: '/en/tutorial' },
              { text: 'Microsoft Flight Simulator 2020/2024', link: '/en/tutorial/msfs' },
              { text: 'X-Plane 11/12', link: '/en/tutorial/xplane' },
              { text: 'P3D', link: '/en/tutorial/p3d' },
              { text: 'XVoice', link: '/en/tutorial/xvoice' }
            ]
          },
          {
            text: 'About',
            items: [
              { text: 'Contributors', link: '/en/contributors' }
            ]
          }
        ],
        notFound: {
          title: 'PAGE NOT FOUND',
          quote: 'The page you are looking for does not exist.',
          linkLabel: 'Go to homepage',
          linkText: 'Back to home',
          code: '404'
        }
      }
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      { icon: 'github', link: 'https://github.com/XFlySim/XFlySim-Document' }
    ]
  }
})
