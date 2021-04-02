const axios = require('axios')

const URLI = `https://swapi.dev/api/people/`

async function obterPessoas(nome){
    const url = `${URLI}?search=${nome}`
    const result = await axios.get(url)
    return result.data.results.map(mapearPessoas)
}

function mapearPessoas(item){
    return{
        nome: item.name,
        peso: item.height
    }
}
module.exports = {
    obterPessoas
}