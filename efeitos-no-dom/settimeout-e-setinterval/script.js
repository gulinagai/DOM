// Mude a cor da tela para azul e depois para vermelho a cada 2s.

// document.body.style.backgroundColor = 'blue'

// for(let c = 1; c ; c++){
//     setTimeout(() => {
//         if(document.body.style.backgroundColor === 'blue'){ 
//             document.body.style.backgroundColor = 'red'
//         } else {
//             document.body.style.backgroundColor = 'blue'
//         }
        
//     }, 2000);
// }
document.body.style.backgroundColor = 'blue'
const meuloop = setInterval(()=>{
    if(document.body.style.backgroundColor === 'blue'){ 
             document.body.style.backgroundColor = 'blue'
         } else {
             document.body.style.backgroundColor = 'blue'
         }
}, 2000)

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo cique no pausar)

const div = document.querySelector('[data-cronometro]')
const botao = document.querySelector('button')
const limpar = document.querySelector('input[type="reset"]')

botao.addEventListener('click', iniciarCronometro)
botao.addEventListener('dblclick', pausarCronometro)
limpar.addEventListener('click', limparCronometro)

let s = 0
let m = 0
let h = 0
let d = 0
let meucronometro 
console.log(meucronometro)
function iniciarCronometro() {
    if(!meucronometro){
    meucronometro = setInterval(()=>{
        s++
        div.innerText = `${d}:${h}:${m}:${s}`
        if(s === 60){
            ++m
            s = 0
        }
        if(m === 60){
            ++h
            m = 0
        }
        if(h === 24){
            ++d
            h = 0
        }
    }, 1000)
}   
}
function pausarCronometro(){ 
    clearInterval(meucronometro)
    meucronometro = undefined
}
function limparCronometro(){
     s = 0
     m = 0
     h = 0
     d = 0
     div.innerText = `${d}:${h}:${m}:${s}`
     clearInterval(meucronometro)
}