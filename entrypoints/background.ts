export default defineBackground(() => {
  browser.tabs.query({ currentWindow: true, active: true }, (tabs) => {
    const currentTab = tabs[0]
    const target = {
      tabId: currentTab?.id!
    }

    browser.scripting.insertCSS({
      target,
      files: ['assets/content-style.css']
    })
  })
});
