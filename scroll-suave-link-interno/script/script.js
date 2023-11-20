function iniciarnavtab(){
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
}
iniciarnavtab()

function iniciarnavaccordionlist(){
const dldt = document.querySelectorAll('dl dt')

dldt[0].classList.add('ativo')
dldt[0].nextElementSibling.classList.add('ativo')

function clicou(){
    this.classList.toggle('ativo')
    this.nextElementSibling.classList.toggle('ativo')
}
dldt.forEach((dt)=>{
    dt.addEventListener('click', clicou)
})
}
iniciarnavaccordionlist()

const linksinternos = document.querySelectorAll('a[href^="#"]')

function scrollarparasection(event){
    event.preventDefault()
    const href = this.getAttribute('href')
    console.log(href)
    const section = document.querySelector(href)
    console.log(section)

    // const topo = section.offsetTop
    // window.scrollTo({
    //     top: topo,
    //     behavior: 'smooth'
    //})
     section.scrollIntoView({
         behavior: 'smooth',
         block: 'start',
     })
}

linksinternos.forEach((link)=>{
    link.addEventListener('click', scrollarparasection)
})

