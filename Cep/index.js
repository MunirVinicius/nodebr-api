const util = require('util')
const obterCepAsync = util.promisify(obterCep)

function obterUsuario(){
    return new Promise(function resolverPromise(resolve, reject){
        setTimeout(function() {
        return resolve({
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })}, 1000);

    })

}

function obterTelefone(idUsuario){
    return new Promise(function resolverPromise(resolve, reject){
        setTimeout(() =>{
            return resolve({
                telefone: '99043243',
                ddd: '11'
            })
        }, 2000);

    })
}

function obterCep(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            rua: 17340000,
            number: 0
        })
    }, 2000);
}

const error = null || "" || false;
main ()
async function main(){
    try{
        console.time('medida-promise')
        const usuario = await obterUsuario ()
        // const telefone = await obterTelefone(usuario.id)
        // const cep = await obterCepAsync(usuario.id)
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterCepAsync(usuario.id)
        ])
        const cep = resultado[1] 
        const telefone = resultado[0]
        console.log(`
            Nome: ${usuario.nome},
            Telefone:(${telefone.ddd}) ${telefone.telefone},
            Cep: ${cep.rua}, ${cep.number}

        `)
        console.timeEnd('medida-promise')
    }
    catch(error){
        console.error('Deu erro', error)
    }
}

// const usuarioPromise = obterUsuario();

// usuarioPromise
//     .then(function (usuario){
//         return obterTelefone(usuario.id)
//             .then(function resolverTelefone(result){
//                 return {
//                     usuario: {
//                         nome: usuario.nome,
//                         id: usuario.id,
//                     },
//                     telefone: result
//                 }
//             })
//         })
//     .then(function (resultado){
//         const cep = obterCepAsync(resultado.usuario.id)
//         return cep
//             .then(function resolverCep(result){
//                 return {
//                     usuario: resultado.usuario,
//                     telefone: resultado.telefone,
//                     cep: result
//                 }
//             })
//     })
//     .then(function (resultado){
//         console.log(`
//             Nome: ${resultado.usuario.nome}
//             Cep: ${resultado.cep.rua},${resultado.cep.number}
//             Telefone: (${resultado.telefone.ddd})${resultado.telefone.telefone}
//         `)
//     })
//     .catch(function (error){
//         console.error('Deu erro ', error)
//     })

// obterUsuario(function resolverUsuario(error,usuario){
//     if(error){
//         console.error('deu erro em usuario', error)
//         return;
//     }
//     obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
//         if(error){
//             console.error('deu erro em telefone', error)
//             return;
//         }
//         obterCep(usuario.id, function resolverCep(error2, cep){
//             if(error){
//                 console.error('deu erro em telefone', error)
//                 return;
//             }
//             console.log(`
//             Nome: ${usuario.nome},
//             Cep: ${cep.rua},${cep.number},
//             Telefone: (${telefone.ddd})${telefone.telefone}

//             `)
//         })
//     })
// })
