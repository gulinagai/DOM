// Adicione a classe ativo a todos os itens do menu

const itensmenua = window.document.querySelectorAll('.menu a')
itensmenua.forEach((item) => {
    item.classList.add('ativo')
    console.log(item.classList)
})

// Remova a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensmenua.forEach((item) => {
    item.classList.remove('ativo')
})
itensmenua[0].className = 'ativo'

// Verifique se as imagens possuem o atributo alt

const imagens = document.querySelectorAll('img')
imagens.forEach((item) =>{
    if(item.hasAttribute('alt')){
        console.log('tem alt')
    } else {
        console.log('não tem')
    }
})

// Modifique o href do link externo no menu

const linkexterno = document.querySelector('a[href^="https://"]')
linkexterno.setAttribute('href', 'https://www.google.com/')
