import './style.css';

const checkbox = document.querySelector('input')
const isEnabled = await storage.getItem('local:ui')

if (isEnabled) {
  checkbox?.click()
}

checkbox?.addEventListener('input', async (event) => {
  await storage.setItem('local:ui', checkbox.checked)
})

