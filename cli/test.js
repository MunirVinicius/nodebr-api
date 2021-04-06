const { ok, deepStrictEqual} = require('assert')
const database = require('./database')

const DEFAULT_ITEM_CADASTRADO = {
    nome: 'Flash',
    poder:'Speed',
    id:1
}

const DEFAULT_ITEM_UPDATE  = {
    nome:'Batman',
    poder: 'Preparo',
    id: 2

}


describe ('Suite de manipulação de herois',() =>{
    before(async()=>{
        await database.cadastrar(DEFAULT_ITEM_CADASTRADO),
        await database.cadastrar(DEFAULT_ITEM_UPDATE)
    })

    it('Deve pesquisar um heroi, usando arquivos', async ()=>{
        const expected = DEFAULT_ITEM_CADASTRADO
        const [resultado] = await database.listar(expected.id)

        deepStrictEqual(resultado,expected)
    })

     it('Deve cadastrar um heroi, usando arquivos',  async ()=>{
        const expected = DEFAULT_ITEM_CADASTRADO
        const [actual] = await database.listar(DEFAULT_ITEM_CADASTRADO.id)
        deepStrictEqual(actual, expected)
    })
    it('Deve remover um heroi por id', async()=>{
        const expected = true;
        const result = await database.remover(DEFAULT_ITEM_CADASTRADO.id)
        deepStrictEqual(result, expected)
    })
    it('Deve atualizar um heroi pelo id', async()=>{
        const expected = {
            ...DEFAULT_ITEM_UPDATE,
            nome:'Lanterna Verde',
            poder: "Anel Foda",
        }
        const newData = {
            nome:'Lanterna Verde',
            poder: "Anel Foda",
        }
        await database.update(DEFAULT_ITEM_UPDATE.id,newData)
        const [result] = await database.listar(DEFAULT_ITEM_UPDATE.id)
        deepStrictEqual(result , expected)
    })
    
})  
