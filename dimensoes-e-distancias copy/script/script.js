// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraimg = document.querySelector('img')
console.log(`O topo da primeira imagem possui ${primeiraimg.offsetTop}px de distância em relação ao topo do página.`)

// Retorne a soma da largura de todas as imagens
function somarlarguraimg(){
const todasasimg = document.querySelectorAll('img')
let somawidth = 0
todasasimg.forEach((imagem)=>{
    console.log(imagem.offsetWidth)
    somawidth += imagem.offsetWidth
})
console.log(`Soma da largura das imagens = ${somawidth}px.`)
}

window.onload = function () {
    somarlarguraimg()
}



// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

linkpag = document.querySelectorAll('a')
linkpag.forEach((link)=>{
    console.log(link.getBoundingClientRect().width)
    console.log(link.getBoundingClientRect().height)
     if(link.offsetWidth >= 48 && link.offsetHeight >= 48){
        console.log('Está dentro do recomendado')
     } else {
        console.log('Está fora do recomendado')
     }

})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserpq = window.matchMedia('(max-width: 720px)')
let menu = document.querySelector('.menu')
if(browserpq.matches){
    menu.classList.add('menu-mobile')
} 