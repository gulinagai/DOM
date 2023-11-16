// Mostre no console cada parágrafo do site

 const todosospNL = window.document.querySelectorAll('p')
 todosospNL.forEach((item) => {
     console.log(item)
 })

// for(c=0; c < todosospNL.length ;c++){
//     console.log(todosospNL[c])
// }

// Mostre o texto dos parágrafos no console

todosospNL.forEach((item) => {
    console.log(item.innerText)
})

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img')

imgs.forEach((item, index) => {
    console.log(item, index)
})


let i = 0
imgs.forEach(() => {
    console.log(i++)
})

imgs.forEach(() => {
    i++
})
console.log(i) 
