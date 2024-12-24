import './style.css';

const checkbox = document.querySelector('input')

storage.getItem<boolean>('local:ui')
  .then(isEnabled => {
    if (isEnabled) {
      checkbox?.click()
    }
  })

checkbox?.addEventListener('input', async (event) => {
  await storage.setItem('local:ui', checkbox.checked)
})

