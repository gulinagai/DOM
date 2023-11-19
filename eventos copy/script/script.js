// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item, clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const todososlinks = document.querySelectorAll('a[href^="#"]')

function clicou(event){
    for(c = 0; c < todososlinks.length ;c++){
    todososlinks[c].classList.toggle('ativo')
    }
    event.preventDefault()
}

todososlinks.forEach((link)=>{
    link.addEventListener('click', clicou)
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const tudo = window.document.querySelectorAll('*')
function clicando(event){
    console.log(event.currentTarget)
    event.target.remove()
}

tudo.forEach((elemento)=>{
elemento.addEventListener('click', clicando)
})


//Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento



// Se o usuário clicar na tecla (t), aumente todo o texto do site


function pressionou(event){
    if(event.key === 't'){
       window.document.documentElement.classList.toggle('bodymaior')
    }
}

window.document.body.addEventListener('keydown', pressionou)
