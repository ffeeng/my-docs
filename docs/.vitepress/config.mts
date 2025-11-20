import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  base:'/my-docs/',
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '前端', link: '/markdown-examples' },
      { text: '后端', link: '/markdown-examples' },
      { text: '运维', link: '/markdown-examples' },
      { text: '业务', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: '前端',
        items: [
          { text: 'sse', link: '/front/sse' }
        ]
      },  {
        text: '后端',
        items: [
          { text: 'basic', link: '/backend/index' }
        ]
      },  {
        text: '运维',
        items: [
          { text: 'basic', link: '/devops/index' }
        ]
      },  {
        text: '业务',
        items: [
          { text: 'basic', link: '/business/index' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ffeeng/myDocs' }
    ]
  }
})
