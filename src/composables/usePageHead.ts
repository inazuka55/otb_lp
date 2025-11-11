import type { Head } from '@/types/head';

export const usePageHead = async (head: Head) => {
  const config = useRuntimeConfig();
  const siteName = 'アウト オブ ザ ボックス';
  const siteDesc = 'ダミー';
  const baseUrl = config.public.baseURL;
  const baseDir = config.public.baseDir;
  const basePath = baseUrl + baseDir;
  const ogpImages = basePath + 'images/';
  const route = useRoute();
  const ogtype = route.path === '/' ? 'website' : 'article';

  return useHead({
    title: head.title ? `${head.title} | ${siteName}` : siteName,
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
      lang: 'ja',
    },
    link: [
      { rel: 'canonical', href: `${baseUrl}${route.fullPath}` },
      { rel: 'icon', sizes: '48x48', href: baseDir + 'favicon.ico' },
      { rel: 'icon', sizes: 'any', type: 'image/svg+xml', href: baseDir + 'favicon.svg' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: baseDir + 'apple-touch-icon.png' },
      { rel: 'manifest', href: baseDir + 'site.webmanifest' },
    ],
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'Cache-Control', content: 'no-store' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1, user-scalable=no, viewport-fit=cover' },
      { name: 'format-detection', content: 'telephone=no, email=no, address=no' },
      { name: 'theme-color', content: '#ffffff' },
      { hid: 'description', name: 'description', content: head.desc ? head.desc : siteDesc },
      { hid: 'og:type', property: 'og:type', content: ogtype },
      { hid: 'og:url', property: 'og:url', content: `${baseUrl}${route.fullPath}` },
      { hid: 'og:title', property: 'og:title', content: head.title ? `${head.title} | ${siteName}` : siteName },
      { hid: 'og:description', property: 'og:description', content: head.desc ? head.desc : siteDesc },
      { hid: 'og:image', property: 'og:image', content: head.image ? head.image : `${ogpImages}ogp.jpg` },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', name: 'twitter:title', content: head.title ? `${head.title} | ${siteName}` : siteName },
      { hid: 'twitter:description', name: 'twitter:description', content: head.desc ? head.desc : siteDesc },
      { hid: 'twitter:image', name: 'twitter:image', content: head.image ? head.image : `${ogpImages}ogp.jpg` },
    ],
    script: [
      {
        innerHTML: `
          (function(d) {
            var config = {
              kitId: 'brp1jeg',
              scriptTimeout: 3000,
              async: true
            },
            h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
          })(document);
        `,
        async: true,
      },
      { src: '//www.googletagmanager.com/gtag/js?id=G-Q7FM2EE50Z' },
      {
        innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-Q7FM2EE50Z');
        `,
        async: true,
      },
    ],
  });
};
