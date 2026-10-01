import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "XFlySim Document",
  description: "XFlySim Document Site",

  lastUpdated: true,

  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      themeConfig: {
        logo: "/logo.png",
        siteTitle: "XFlySim 文档",
        outline: { label: "目录", level: [2, 3] },
        editLink: {
          pattern:
            "https://github.com/XFlySim/XFlySim-Document/edit/main/docs/:path",
          text: "在 GitHub 上编辑此页面",
        },
        lastUpdated: {
          text: "最后更新时间",
          formatOptions: { dateStyle: "short", timeStyle: "short" },
        },
        docFooter: { prev: "上一页", next: "下一页" },
        nav: [
          { text: "首页", link: "/" },
          {
            text: "平台守则",
            items: [
              { text: "用户准则", link: "/rules/user-rules" },
              { text: "管制员连线条例", link: "/rules/controller-rules" },
            ],
          },
          { text: "连线教程", link: "/tutorial/" },

          {
            text: "更多",
            items: [
              {
                text: "航空知识",
                link: "/knowledge/",
              },
              { text: "API 开发文档", link: "/api/" },
              { text: "贡献成员", link: "/contributors/" },
            ],
          },
        ],
        sidebar: [
          {
            text: "平台守则",
            items: [
              { text: "用户准则", link: "/rules/user-rules" },
              { text: "管制员连线条例", link: "/rules/controller-rules" },
            ],
          },
          {
            text: "连线教程",
            items: [
              { text: "快速开始", link: "/tutorial/" },
              { text: "微软模拟飞行 2020/2024", link: "/tutorial/msfs" },
              { text: "X-Plane 11/12", link: "/tutorial/xplane" },
              { text: "P3D", link: "/tutorial/p3d" },
              { text: "XVoice 语音", link: "/tutorial/xvoice" },
            ],
          },
          {
            text: "航空知识",
            items: [
              { text: "知识首页", link: "/knowledge/" },
              {
                text: "缩小垂直间隔（RVSM）与米制飞行高度层",
                link: "/knowledge/rvsm",
              },
              { text: "过渡高度与高度表拨正", link: "/knowledge/altimeter" },
            ],
          },
          {
            text: "API 开发文档",
            items: [
              { text: "接口总览", link: "/api/" },
              { text: "活动管理", link: "/api/activity" },
              { text: "EFB 航行情报", link: "/api/efb" },
              { text: "Infinite Flight", link: "/api/infinite-flight" },
              { text: "XVoice 语音", link: "/api/xvoice" },
            ],
          },
          {
            text: "关于",
            items: [{ text: "贡献成员", link: "/contributors/" }],
          },
        ],
        notFound: {
          title: "页面未找到",
          quote: "您访问的页面不存在或已被移动。",
          linkLabel: "返回首页",
          linkText: "回到首页",
          code: "404",
        },
      },
    },
    "zh-TW": {
      label: "繁體中文",
      lang: "zh-TW",
      description: "XFlySim 文件網站",
      themeConfig: {
        logo: "/logo.png",
        siteTitle: "XFlySim 文檔",
        outline: { label: "目錄", level: [2, 3] },
        editLink: {
          pattern:
            "https://github.com/XFlySim/XFlySim-Document/edit/main/docs/:path",
          text: "在 GitHub 上編輯此頁面",
        },
        lastUpdated: {
          text: "最後更新時間",
          formatOptions: { dateStyle: "short", timeStyle: "short" },
        },
        docFooter: { prev: "上一頁", next: "下一頁" },
        nav: [
          { text: "首頁", link: "/zh-TW/" },
          {
            text: "平台守則",
            items: [
              { text: "用戶準則", link: "/zh-TW/rules/user-rules" },
              { text: "管制員連線條例", link: "/zh-TW/rules/controller-rules" },
            ],
          },
          { text: "連線教學", link: "/zh-TW/tutorial/" },
          {
            text: "更多",
            items: [
              {
                text: "航空知識",
                link: "/zh-TW/knowledge/",
              },
              { text: "貢獻成員", link: "/zh-TW/contributors/" },
            ],
          },
        ],
        sidebar: [
          {
            text: "平台守則",
            items: [
              { text: "用戶準則", link: "/zh-TW/rules/user-rules" },
              { text: "管制員連線條例", link: "/zh-TW/rules/controller-rules" },
            ],
          },
          {
            text: "連線教學",
            items: [
              { text: "快速開始", link: "/zh-TW/tutorial/" },
              { text: "微軟模擬飛行 2020/2024", link: "/zh-TW/tutorial/msfs" },
              { text: "X-Plane 11/12", link: "/zh-TW/tutorial/xplane" },
              { text: "P3D", link: "/zh-TW/tutorial/p3d" },
              { text: "XVoice 語音", link: "/zh-TW/tutorial/xvoice" },
            ],
          },
          {
            text: "航空知識",
            items: [
              { text: "知識首頁", link: "/zh-TW/knowledge/" },
              {
                text: "縮小垂直間隔（RVSM）與米制飛行高度層",
                link: "/zh-TW/knowledge/rvsm",
              },
              {
                text: "過渡高度與高度表撥正",
                link: "/zh-TW/knowledge/altimeter",
              },
            ],
          },
          {
            text: "關於",
            items: [{ text: "貢獻成員", link: "/zh-TW/contributors/" }],
          },
        ],
        notFound: {
          title: "頁面未找到",
          quote: "您訪問的頁面不存在或已被移動。",
          linkLabel: "返回首頁",
          linkText: "回到首頁",
          code: "404",
        },
      },
    },
    en: {
      label: "English",
      lang: "en-US",
      description: "XFlySim Document Site",
      themeConfig: {
        logo: "/logo.png",
        siteTitle: "XFlySim Docs",
        outline: { label: "On this page", level: [2, 3] },
        editLink: {
          pattern:
            "https://github.com/XFlySim/XFlySim-Document/edit/main/docs/:path",
          text: "Edit this page on GitHub",
        },
        lastUpdated: {
          text: "Last updated",
          formatOptions: { dateStyle: "short", timeStyle: "short" },
        },
        docFooter: { prev: "Previous", next: "Next" },
        nav: [
          { text: "Home", link: "/en/" },
          {
            text: "Rules",
            items: [
              { text: "User Guidelines", link: "/en/rules/user-rules" },
              {
                text: "Controller Regulations",
                link: "/en/rules/controller-rules",
              },
            ],
          },
          { text: "Tutorial", link: "/en/tutorial/" },
          {
            text: "More",
            items: [
              {
                text: "Aviation Knowledge",
                link: "/en/knowledge/",
              },
              { text: "Contributors", link: "/en/contributors/" },
            ],
          },
        ],
        sidebar: [
          {
            text: "Rules",
            items: [
              { text: "User Guidelines", link: "/en/rules/user-rules" },
              {
                text: "Controller Regulations",
                link: "/en/rules/controller-rules",
              },
            ],
          },
          {
            text: "Tutorial",
            items: [
              { text: "Getting Started", link: "/en/tutorial/" },
              {
                text: "Microsoft Flight Simulator 2020/2024",
                link: "/en/tutorial/msfs",
              },
              { text: "X-Plane 11/12", link: "/en/tutorial/xplane" },
              { text: "P3D", link: "/en/tutorial/p3d" },
              { text: "XVoice", link: "/en/tutorial/xvoice" },
            ],
          },
          {
            text: "Aviation Knowledge",
            items: [
              { text: "Knowledge Home", link: "/en/knowledge/" },
              {
                text: "RVSM and Metric Flight Levels in China",
                link: "/en/knowledge/rvsm",
              },
              {
                text: "Transition Altitude & Altimeter Settings",
                link: "/en/knowledge/altimeter",
              },
            ],
          },
          {
            text: "About",
            items: [{ text: "Contributors", link: "/en/contributors/" }],
          },
        ],
        notFound: {
          title: "PAGE NOT FOUND",
          quote: "The page you are looking for does not exist.",
          linkLabel: "Go to homepage",
          linkText: "Back to home",
          code: "404",
        },
      },
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
      options: {
        detailedView: true,
        locales: {
          root: {
            translations: {
              button: { buttonText: "搜索文档" },
              modal: {
                displayDetails: "显示详细列表",
                resetButtonTitle: "重置搜索",
                backButtonTitle: "关闭搜索",
                noResultsText: "未找到相关结果：",
                footer: {
                  selectText: "选择",
                  selectKeyAriaLabel: "回车",
                  navigateText: "导航",
                  navigateUpKeyAriaLabel: "上箭头",
                  navigateDownKeyAriaLabel: "下箭头",
                  closeText: "关闭",
                  closeKeyAriaLabel: "esc"
                }
              }
            }
          },
          "zh-TW": {
            translations: {
              button: { buttonText: "搜尋文件" },
              modal: {
                displayDetails: "顯示詳細列表",
                resetButtonTitle: "重設搜尋",
                backButtonTitle: "關閉搜尋",
                noResultsText: "未找到相關結果：",
                footer: {
                  selectText: "選擇",
                  selectKeyAriaLabel: "Enter",
                  navigateText: "導航",
                  navigateUpKeyAriaLabel: "上箭頭",
                  navigateDownKeyAriaLabel: "下箭頭",
                  closeText: "關閉",
                  closeKeyAriaLabel: "esc"
                }
              }
            }
          }
        },
        miniSearch: {
          searchOptions: {
            fuzzy: 0.2,
            prefix: true,
            boost: { title: 4, titles: 3, text: 1 }
          }
        }
      }
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/XFlySim/XFlySim-Document" },
    ],
  },
});
