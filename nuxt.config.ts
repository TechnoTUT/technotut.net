import { readdirSync } from 'node:fs'
import { relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxt/eslint', '@nuxt/image'],

  content: {
    ignores: ['\\.vue$'],
  },

  image: {
    quality: 80,
    format: ['webp'],
  },


  app: {
    head: {
      title: '豊橋技術科学大学 音楽技術部 (TechnoTUT)',
      htmlAttrs: {
        lang: 'ja',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'TechnoTUT - Music & Live production Club.' },
        { property: 'og:title', content: '豊橋技術科学大学 音楽技術部 (TechnoTUT)' },
        { property: 'og:description', content: '豊橋技術科学大学 音楽技術部 (TechnoTUT) 公式HP' },
        { property: 'og:image', content: 'https://technotut.net/images/home/hero-bg_mid.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://technotut.net/images/home/hero-bg_mid.jpg' },
        { name: 'theme-color', content: '#050505' },
        { name: 'referrer', content: 'strict-origin-when-cross-origin' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/images/logo/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Noto+Sans+JP:wght@300..700&display=swap',
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  nitro: {
    output: {
      publicDir: fileURLToPath(new URL('./out', import.meta.url)),
    },
    prerender: {
      crawlLinks: true,
      routes: ['/', '/access', '/activity', '/join-us', '/gikadaifes', '/independent', '/audio-heihachiro'],
    },
  },

  hooks: {
    'pages:extend'(pages) {
      const contentDir = fileURLToPath(new URL('./content', import.meta.url))

      function scanVueFiles(dir: string, baseDir: string = dir): { fullPath: string; relPath: string }[] {
        let results: { fullPath: string; relPath: string }[] = []
        try {
          const list = readdirSync(dir, { withFileTypes: true })
          for (const dirent of list) {
            const fullPath = resolve(dir, dirent.name)
            if (dirent.isDirectory()) {
              results = results.concat(scanVueFiles(fullPath, baseDir))
            } else if (dirent.isFile() && dirent.name.endsWith('.vue')) {
              const relPath = relative(baseDir, fullPath).replace(/\\/g, '/')
              results.push({ fullPath, relPath })
            }
          }
        } catch {
          // ignore if dir does not exist
        }
        return results
      }

      const vueFiles = scanVueFiles(contentDir)
      for (const { fullPath, relPath } of vueFiles) {
        // Convert relPath to route path
        // e.g. "special/feature.vue" -> "/special/feature"
        // e.g. "special/index.vue" -> "/special"
        // e.g. "index.vue" -> "/"
        let routePath = '/' + relPath.replace(/\.vue$/, '')
        if (routePath.endsWith('/index')) {
          routePath = routePath.slice(0, -6) || '/'
        }

        const routeName = 'content-' + relPath
          .replace(/\.vue$/, '')
          .replace(/\//g, '-')
          .replace(/^_/, '')

        // Unshift so content vue routes take precedence over catch-all [...slug].vue
        pages.unshift({
          name: routeName,
          path: routePath,
          file: fullPath,
        })
      }
    },
  },
})
