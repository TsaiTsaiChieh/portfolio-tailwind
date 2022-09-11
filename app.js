const body = document.querySelector('body')
const hamburger = document.querySelector('#hamburger')
const menu = document.querySelector('#menu')
const hLinks = document.querySelectorAll('.hLink')
const moon = document.querySelector('#moon')

hamburger.addEventListener("click", () => {
  menu.classList.toggle('hidden')
  hamburger.classList.toggle('bg-white')
})

// auto typing

const exampleText = ['Developer', 'Designer', 'Author'];
const exampleTyping = new AutoTyping('#text', exampleText, {
  typeSpeed: 100,
  deleteSpeed: 50,
  waitBeforeDelete: 2000,
  waitBetweenWords: 500,
});
exampleTyping.start()


hLinks.forEach(link => link.addEventListener('click', () => {
  console.log('cook');
  menu.classList.toggle('hidden')
  hamburger.classList.toggle('bg-white')
}))

moon.addEventListener("click", () => {
  console.log('ok');
  body.classList.toggle('dark')

})