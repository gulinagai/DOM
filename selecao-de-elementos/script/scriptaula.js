const animais = window.document.getElementById('animais')


const primeiraLi = window.document.querySelector('li')
console.log(primeiraLi)

const primeiroUl = window.document.querySelector('ul')
console.log(primeiroUl)

const linkInterno = window.document.querySelector('[href^="#"]')
console.log(linkInterno)

const animaisImg = window.document.querySelectorAll('.animaislista img')
console.log(animaisImg[3])

const menucl = window.document.querySelector('.menu')

const gridsectionnodelist = window.document.querySelectorAll('.gridsection')
const gridsectionHTMLcol = window.document.getElementsByClassName('gridsection')

menucl.classList.add('gridsection')

console.log(gridsectionnodelist)
console.log(gridsectionHTMLcol)