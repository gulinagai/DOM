const novaPromessa = new Promise(function(resolve, reject) {
    let condicao = false
    if(condicao){
        setTimeout(()=>{
            resolve({nome: 'guli', idade: 24})
        }, 1000)
    } else {
        reject('Operação falhou')
    }
})

console.log(novaPromessa)
novaPromessa

.then( meuObjeto =>{
    console.log(meuObjeto)
    meuObjeto.futuraProfissão = 'Programador'
    console.log(meuObjeto)
    return meuObjeto
})
.then( meuObjeto =>{
    meuObjeto.cachorro = 'Toddy'
    console.log(meuObjeto)
    return meuObjeto
})

.then( meuObjeto =>{
    meuObjeto.latir = function(){
        return `${this.cachorro} latiu!`
    }
    console.log(meuObjeto)
    return meuObjeto
})

.then((meuObjeto)=> meuObjeto + 2)

.then((meuObjeto)=> console.log(meuObjeto), (rejeicao)=>{
    console.log(rejeicao)
})
// .catch((rejeicao)=>{
//     console.log(rejeicao)
// })
