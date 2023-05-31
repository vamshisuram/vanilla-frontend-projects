const container = document.querySelector('.container')
const openBtn = document.getElementById('open')
const closeBtn = document.getElementById('close')

openBtn.addEventListener('click', () => {
  container.classList.add('show-nav')
  console.log('open click');
})
closeBtn.addEventListener('click', () => {
  container.classList.remove('show-nav')
  console.log('close click');
})