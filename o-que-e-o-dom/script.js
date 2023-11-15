// Retorne o url da página atual utilizando o objeto window
let href = window.location.href
console.log(href)
// Seleciona o primeiro elemento a página que
// possua a classe ativo
window.document.querySelector('.ativo')

// Retorne a linguagem do navegador
const language = window.navigator.language
console.log(language)
// Retorne a largura da janela
console.log(`A janela possui ${window.innerWidth} pixels`)