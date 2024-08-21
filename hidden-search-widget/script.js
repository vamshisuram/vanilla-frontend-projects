// input box (hidden)
// search button
// - click event toggle position inside input box
// - toggle input box

const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus();
})
