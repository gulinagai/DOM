const listaanimais = document.querySelector('.animaislista')
listaanimais.classList.add('homem', 'mulher')
listaanimais.classList.remove('homem')
listaanimais.classList.toggle('mulher')
//listaanimais.classList.toggle('mulher')
console.log(listaanimais.classList.contains('animaislista'))
listaanimais.classList.toggle('homem')
listaanimais.classList.replace('homem', 'mulher')





const animais = document.querySelector('.animais')
console.log(animais)
console.log(animais.attributes[1])

const imagens = document.querySelectorAll('.animaislista img')
console.log(imagens[0])

console.log(imagens[0].setAttribute('alt', 'mudei o alt'))

imagens[--imagens.length].setAttribute('alt', 'mudei o texto alternativo') 

if(imagens[0].hasAttribute('src')){
    console.log('tem src')
}

imagens[0].removeAttribute('src')

console.log(imagens[1].hasAttributes())

