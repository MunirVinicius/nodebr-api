function obterUsuario(callback){
    setTimeout(function() {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000);
}

function obterTelefone(idUsuario, callback){
    setTimeout(() =>{
        return callback(null,{
            telefone: '119904324325',
            ddd: '11'
        })
    }, 2000);
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

obterUsuario(function resolverUsuario(error,usuario){
    if(error){
        console.error('deu erro em usuario', error)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if(error){
            console.error('deu erro em telefone', error)
            return;
        }
        obterCep(usuario.id, function resolverCep(error2, cep){
            if(error){
                console.error('deu erro em telefone', error)
                return;
            }
            console.log(`
            Nome: ${usuario.nome},
            Cep: ${cep.rua},${cep.number},
            Telefone: (${telefone.ddd})${telefone.telefone}

            `)
        })
    })
})
