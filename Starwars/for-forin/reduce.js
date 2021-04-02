const { obterPessoas } = require('./service')

Array.prototype.meuReduce= function (callback, valorInicial){
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
    for (let index = 0; index <= this.length; index++){
        valorFinal = callback(valorFinal, this[index], this)
    }
    return valorFinal
}

async function main (){
    try{
        const {results} = await obterPessoas('')
        const pesos = results.map(item => parseInt(item.height))
        console.log('pesos', pesos)

        // const total = pesos.reduce((last, next) =>{
        //     return last + next
        // },0)
        const minhaLista =[
            ['Munir', 'Jes'],
            ['Node is Nice', 'By ~ Me :)']
        ]

        const total = minhaLista.meuReduce((anterior,proximo)=>{
            return anterior.concat(proximo)
        }, [])
        .join(',')
        console.log(`total`, total)
    }   
    catch(error){
        console.error('deu ruim', error)
    }
}

main()