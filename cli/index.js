const commander = require('commander')
const Commander = require('commander')
const Database = require('./database')
const Hero = require('./hero')

async function main (){

    Commander
        .version('v1')
        .option('-N, --nome [value]', 'Nome do heroi')
        .option('-P, --poder [value]', 'Poder do Heroi')
        .option('-i, --id [value]', 'Id do Heroi')

        .option('-c, --cadastrar', 'Cadastrar um Heroi')
        .option('-l, --listar', 'Listar todos os Herois')
        .option('-r, --remover', 'Remove um Heroi pelo ID')
        .option('-a, --atualizar [value]', 'Atualizar um Heroi pelo ID')
        .parse(process.argv)

    const hero = new Hero(Commander.opts())
  
    try{

        if(Commander.opts().cadastrar){
            delete hero.id
            console.log(hero)
            const resultado = await Database.cadastrar(hero)
            if(!resultado){
                console.error('Heroi não foi cadastrado')
                return;
            }
            console.log('Heroi Cadastrado')
        }
        if(Commander.opts().listar){
            const result = await Database.listar()
            console.log(result)
            return;
        }
        if(Commander.opts().remover){
            const result = await Database.remover(hero.id)
            if(!result){
                console.error('Não foi possivel remover o heroi')
                return;
            }
            console.log('Heroi removido com sucesso')
        }
        if(Commander.opts().atualizar){
            const idParaAtualizar = parseInt(Commander.opts().atualizar);
            const dado = JSON.stringify(hero)
            const heroUpdate = JSON.parse(dado)
            const result = await Database.update(idParaAtualizar, heroUpdate)

            if(!result){
                console.error('Deu erro ao atualizar')
                return;
            }
            console.log('Heroi atualizado com sucesso')
        }   
    }
    catch(error){
        console.error('Deu ruim', error)
    }

}

main()