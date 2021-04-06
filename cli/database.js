const { readFile, writeFile } = require("fs")
const{promisify} = require('util')
const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)



class Database{
    constructor(){
        this.NOME_ARQUIVO = 'heroes.json'
    }
    async obterDadosArquivo(){
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString())
    }

    async escreverArquivo(dados){
        await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
        return true
    }
    async cadastrar(hero){
        const dados = await this.obterDadosArquivo()
        const id = hero.id <= 2 ? hero.id : Date.now();
        const HeroID = {
            id,...hero
        }
        const dadosFinal = [
            ...dados,HeroID
        ]
        const result = await this.escreverArquivo(dadosFinal)
        return result
    }
    async listar(id){
        const dados = await this.obterDadosArquivo()
        const dadosFiltrados = dados.filter(item => (id ? ( item.id === id) : true))
        return dadosFiltrados
    }
}

module.exports = new Database()