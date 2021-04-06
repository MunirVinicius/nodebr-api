const { ok, deepStrictEqual} = require('assert')
const database = require('./database')

const DEFAULT_ITEM_CADASTRADO = {
    nome: 'Flash',
    poder:'Speed',
    id:1
}


describe ('Suite de manipulação de herois',() =>{
    before(async()=>{
        await database.cadastrar(DEFAULT_ITEM_CADASTRADO)
    })

    it('Deve pesquisar um heroi, usando arquivos', async ()=>{
        const expected = DEFAULT_ITEM_CADASTRADO
        const [resultado] = await database.listar(expected.id)

        deepStrictEqual(resultado,expected)
    })

     it('Deve cadastrar um heroi, usando arquivos',  async ()=>{
        const expected = DEFAULT_ITEM_CADASTRADO
        const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRADO)
        const [actual] = await database.listar(DEFAULT_ITEM_CADASTRADO.id)

        deepStrictEqual(actual, expected)
    })
})  
