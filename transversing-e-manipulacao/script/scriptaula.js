const img1 = document.querySelector('img')
function clicounaimagem(event){
    console.log('Clicou!')
    console.log(event.path)
}

img1.addEventListener('click', clicounaimagem)

const link = document.querySelector('a')
function clicou(event){
    event.preventdefault
    console.log('Clicou no link!')
}
link.addEventListener('click', clicou)

function pressionoutecla(event){
    console.log(event.key)
}
window.addEventListener('keydown', pressionoutecla)

const todasasimgs = document.querySelectorAll('img')

function clicou(event){
    const srcimg = event.currentTarget.getAttribute('src')
    console.log(srcimg)
}
todasasimgs.forEach((imagem)=>{
    imagem.addEventListener('click', clicou)
})
