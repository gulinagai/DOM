export default function iniciarDropdownMenu(){
    
}
  
const dropdownMenus = document.querySelectorAll('[data-dropdown]')
dropdownMenus.forEach((menu)=>{
    ['touchstart', 'click'].forEach((tipoDeEvento)=>{
        menu.addEventListener(tipoDeEvento, handleClick)
    })
})

function handleClick (event){
    event.preventDefault()
    console.log(event)
    this.classList.toggle('active')
}