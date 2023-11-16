// Retorne no console todas as imagens do site
let todasasimagensNL = window.document.querySelectorAll('img')
console.log(todasasimagensNL) //mais fácil

// ou

let animaislistaElements = window.document.getElementsByClassName('animaislista')
let todasasimagensHC = animaislistaElements[0].querySelectorAll('img')
console.log(todasasimagensHC)

// Retorne no console apenas as imagens que começaram com a palavra imagem

let imagensesp = window.document.querySelectorAll('img[alt^="Imagem"]')
console.log(imagensesp)
 

// Selecione todos os links internos (onde o href começa com #)

let linksinternos = window.document.querySelectorAll('[href^="#"]')
console.log(linksinternos)
// Selecione o primeiro h2 dentro de .animaisdescricao

let primh2animdesc = window.document.querySelector('body .animais .animaisdescricao h2')
console.log(primh2animdesc)
// Selecione o último p do site

let todososp = window.document.querySelectorAll('p')
console.log(todososp)
const ultimop = todososp[todososp.length - 1]
console.log(ultimop)
