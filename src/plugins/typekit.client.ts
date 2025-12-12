export default defineNuxtPlugin(() => {
  const route = useRoute()

  // agent ページ
  if (route.path === '/agent') {
    loadTypekit('https://use.typekit.net/xxv3ubw.js')
  }

  // job-seeker ページ
  if (route.path === '/job-seeker') {
    loadTypekit('https://use.typekit.net/kas5wck.js') 
  }
})

function loadTypekit(src: string) {
  const script = document.createElement('script')
  script.src = src
  script.async = true
  script.onload = () => {
    try {
      // @ts-ignore
      Typekit.load()
    } catch (e) {
      console.error('Typekit load failed', e)
    }
  }
  document.head.appendChild(script)
}