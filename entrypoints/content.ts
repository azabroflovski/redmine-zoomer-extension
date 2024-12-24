export default defineContentScript({
  matches: ['*://*.redmine.xt-xarid.uz/*'],
  runAt: 'document_start',
  main() {

    const link = createCSSLink()
  
    async function updateUI() {
      const isEnabled = await storage.getItem('local:ui')
      
      if (isEnabled) {
        document.head.appendChild(link)
        window.addEventListener('DOMContentLoaded', DOMReady)
      } else {
        window.removeEventListener('DOMContentLoaded', DOMReady)
        link.remove()
      }
    }
   
    updateUI()
    storage.watch<boolean>('local:ui', updateUI)
  },
});

function createCSSLink() {
  const link = document.createElement('link')
  link.id = 'redmine-zoomer-styles'
  link.rel = 'stylesheet'
  link.type = 'text/css'
  link.href = browser.runtime.getURL('assets/content-style.css')

  return link 
}

function DOMReady() {
  setupBetterSearch()
}
