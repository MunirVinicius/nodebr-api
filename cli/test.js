const { ok, deepStrictEqual} = require('assert')
const database = require('./database')

const DEFAULT_ITEM_CADASTRADO = {
    nome: 'Flash',
    poder:'Speed',
    id:1
}


describe ('Suite de manipulação de herois',() =>{

    it('Deve pesquisar um heroi, usando arquivos', async ()=>{
        const expected = DEFAULT_ITEM_CADASTRADO
        const [resultado] = await database.listar(expected.id)

        deepStrictEqual(resultado,expected)
    })

    // it('Deve cadastrar um heroi, usando arquivos',  async ()=>{
    //     const expected = DEFAULT_ITEM_CADASTRADO
    //     ok(null, expected)
    // })
})  
