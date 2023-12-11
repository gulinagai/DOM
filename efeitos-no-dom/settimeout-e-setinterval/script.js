// setTimeout((texto)=>{
//     console.log(texto)
//     console.log(this)
// }, 1000, 'tempo de 1s')

// const btn = document.querySelector('button')
// btn.addEventListener('click', mostrarThis)

// function mostrarThis(){
//     setTimeout(()=>{
//         console.log(this)
//         this.classList.add('ativo')
//     })
// }
let i = 0
for(let c = 10;c >= 0; c--){
    setTimeout(()=>{
        console.log(c)    
    }, 1000 * i)   
    i++
    }
a = 10

const loop = setInterval(()=>{
    console.log(a--)
    if(a === 0){
        clearInterval(loop)
    }
}, 1000)