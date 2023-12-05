function Naosei(){
    this.cor = 'preto'
    this.lados = 4
}

const nsei = new Naosei()

 const phtml = document.querySelector('p')

 const pjs = document.createElement('p')

 console.log(pjs.constructor.name)
 console.log(Object.getPrototypeOf(pjs))

 console.log(HTMLElement.hasOwnProperty('dataset'))

 console.log(Object.getPrototypeOf(HTMLParagraphElement.prototype))

 const div = document.querySelector('div')
 console.log(div.dataset)