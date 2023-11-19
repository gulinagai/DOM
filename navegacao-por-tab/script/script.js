const tabmenu = document.querySelectorAll('.jstabmenu li')
const tabcontent = document.querySelectorAll('.jstabcontent section')

if(tabmenu.length && tabcontent.length){
tabcontent[0].classList.add('ativo')

function classtabcontent(index){
    tabcontent.forEach((section)=>{
        section.classList.remove('ativo')
    })
    tabcontent[index].classList.add('ativo')
}

tabmenu.forEach((li, index)=>{
    li.addEventListener('click', ()=>{
        classtabcontent(index)
    })

})

}