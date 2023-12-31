function iniciarnavtab(){
    const tabmenu = document.querySelectorAll('[data-tab="menu"] li')
    const tabcontent = document.querySelectorAll('[data-tab="content"] section')
    
    if(tabmenu.length && tabcontent.length){
    tabcontent[0].classList.add('ativo')
    
    function classtabcontent(index){
        tabcontent.forEach((section)=>{
            section.classList.remove('ativo', section.dataset.anime)
        })
        tabcontent[index].classList.add('ativo', tabcontent[index].dataset.anime)
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
    const dldt = document.querySelectorAll('[data-anime="accordion"] dt')
    
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
    
    const linksinternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')
    
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
    
    function animacaodoscroll(){
        const sections = document.querySelectorAll('[data-anime="scroll"]')
        const telasessentaporc = window.innerHeight * 0.6
        if(sections.length){
            function animaraoscroll(){
                sections.forEach((section)=>{
                    const sectiontopo = section.getBoundingClientRect().top
                    const sectionnotopocomp = (sectiontopo - telasessentaporc) < 0
                    if(sectionnotopocomp){
                        section.classList.add('ativo')
                    }  
                })
            }
            animaraoscroll()
            window.addEventListener('scroll', animaraoscroll)
        }
        }
    animacaodoscroll()
    