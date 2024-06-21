import { fileURLToPath, URL } from 'node:url'

import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'

export default {
  title: 'VitePress',
  description: 'Just playing around',
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  },

  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Test', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Test here', link: '/api-examples' }
        ]
      },
      {
        text: 'Basic',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Input', link: '/components/input' },
          { text: 'Selcet', link: '/components/select' },
          { text: 'Switch', link: '/components/switch' },
          { text: 'Form', link: '/components/form' }
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
}
