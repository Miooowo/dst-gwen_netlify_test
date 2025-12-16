import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 共享属性和其他顶层内容...
  head: [['link', { rel: 'icon', href: 'https://raw.githubusercontent.com/Miooowo/miowo_photobed/main/dst64/avatar_ghost_gwen.png' }]],
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "小小格温wiki",
      description: "英雄联盟同人模组",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: '首页', link: '/' },
          { text: '模组介绍', link: '/guide' },
          { text: '支持创作者', link: 'https://afdian.com/a/cheesekitten' }
        ],

        sidebar: [
          {
            items: [
              { text: '模组介绍', link: '/guide' },
              // { text: '支持创作者', link: 'https://afdian.com/a/cheesekitten' }
            ]
          }
        ],

        socialLinks: [
          { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ],
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      title: "Little Gwen Wiki",
      description: "League of Legends Fan Mod",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Mod Introduction', link: '/en/guide' }
        ],

        sidebar: [
          {
            items: [
              { text: 'Mod Introduction', link: '/en/guide' },
            ]
          }
        ],

        socialLinks: [
          { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ],
      }
    }
  }
})
