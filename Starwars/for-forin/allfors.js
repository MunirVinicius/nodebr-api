const service = require('./service.js') 

async function main (){
    try{
        const result = await service.obterPessoas('')
        const names = []

        // for (let i in result.results){
        //     const pessoa = result.results[i]
        //     names.push(pessoa.name)
        // }
        for (pessoa of result.results){
            names.push(pessoa.name)
        }
        console.log('names', names)
    }
    catch(error){
        console.error('deu erro', error)
    }
}

main()