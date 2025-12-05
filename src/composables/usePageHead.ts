import type { Head } from '@/types/head';

export const usePageHead = async (head: Head) => {
  const siteName = 'アウト オブ ザ ボックス';
  const siteDesc = 'ダミー';

  // ここが重要：絶対 URL（http://localhost:3000）
  const url = useRequestURL();
  const origin = url.origin;

  // Nuxt の baseURL と同じパス
  const basePath = '/outofthebox/';
  const ogpImages = `${origin}${basePath}images/`;

  const route = useRoute();
  const ogtype = route.path === '/' ? 'website' : 'article';

  return useHead({
    title: head.title ? `${head.title} | ${siteName}` : siteName,
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
      lang: 'ja',
    },
    link: [
      { rel: 'canonical', href: origin + route.fullPath },

      // favicon / manifest / apple-touch-icon は basePath
      { rel: 'icon', sizes: '48x48', href: `${basePath}favicon.ico` },
      { rel: 'icon', sizes: 'any', type: 'image/svg+xml', href: `${basePath}favicon.svg` },
      { rel: 'apple-touch-icon', sizes: '180x180', href: `${basePath}apple-touch-icon.png` },
      { rel: 'manifest', href: `${basePath}site.webmanifest` },
    ],
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'Cache-Control', content: 'no-store' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1, user-scalable=no, viewport-fit=cover' },
      { name: 'format-detection', content: 'telephone=no, email=no, address=no' },
      { name: 'theme-color', content: '#ffffff' },
      { hid: 'description', name: 'description', content: head.desc || siteDesc },

      { hid: 'og:type', property: 'og:type', content: ogtype },
      { hid: 'og:url', property: 'og:url', content: origin + route.fullPath },
      { hid: 'og:title', property: 'og:title', content: head.title ? `${head.title} | ${siteName}` : siteName },
      { hid: 'og:description', property: 'og:description', content: head.desc || siteDesc },

      // OGP 画像は絶対パス (origin + basePath)
      { hid: 'og:image', property: 'og:image', content: head.image || `${ogpImages}ogp.jpg` },

      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', name: 'twitter:title', content: head.title ? `${head.title} | ${siteName}` : siteName },
      { hid: 'twitter:description', name: 'twitter:description', content: head.desc || siteDesc },
      { hid: 'twitter:image', name: 'twitter:image', content: head.image || `${ogpImages}ogp.jpg` },
    ],
    script: [
      {
        src: 'https://use.typekit.net/xxv3ubw.js',
        async: true,
        tagPriority: 'high',
        crossorigin: 'anonymous',
        defer: true,
        onload: `
          try { Typekit.load(); } catch (e) {}
        `,
      },
    ],
  });
};
