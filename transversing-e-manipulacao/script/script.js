// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')

const copiamenu = menu.cloneNode(true)

const copy = document.querySelector('.copy')
const pcopy = document.querySelector('.copy p')
copy.insertBefore(copiamenu, pcopy)
// Selecione o primeiro DT do dl de Faq

const faq = document.querySelector('.faq')
const primeirodt = faq.children[1].children[0]
console.log(primeirodt)
// Selecione o DD referente ao primeiro DT
const ddproximodoprimeirodt = primeirodt.nextElementSibling
console.log(ddproximodoprimeirodt)

// Substitua o conteúdo html de .faq pelo conteúdo html de .animais

const animais = document.querySelector('.animais')
faq.innerHTML = animais.innerHTML