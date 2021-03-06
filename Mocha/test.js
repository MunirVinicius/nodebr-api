const assert = require('assert')
const service = require('./service')
const nock = require('nock')
describe('Star Wars Test', function(){
    this.beforeAll(()=>{
        const response = {
            "count": 1, 
            "next": null, 
            "previous": null, 
            "results": [
                {
                    "name": "R2-D2", 
                    "height": "96", 
                    "mass": "32", 
                    "hair_color": "n/a", 
                    "skin_color": "white, blue", 
                    "eye_color": "red", 
                    "birth_year": "33BBY", 
                    "gender": "n/a", 
                    "homeworld": "http://swapi.dev/api/planets/8/", 
                    "films": [
                        "http://swapi.dev/api/films/1/", 
                        "http://swapi.dev/api/films/2/", 
                        "http://swapi.dev/api/films/3/", 
                        "http://swapi.dev/api/films/4/", 
                        "http://swapi.dev/api/films/5/", 
                        "http://swapi.dev/api/films/6/"
                    ], 
                    "species": [
                        "http://swapi.dev/api/species/2/"
                    ], 
                    "vehicles": [], 
                    "starships": [], 
                    "created": "2014-12-10T15:11:50.376000Z", 
                    "edited": "2014-12-20T21:17:50.311000Z", 
                    "url": "http://swapi.dev/api/people/3/"
                }
            ]
            }
      nock(`https://swapi.dev`).get(`/api/people/?search=R2-D2`).reply(200,response)

    })
    it('Deve buscar o R2D2 com o formato correto', async () => {
        const expected = [{nome: 'R2-D2', peso: '96'}]
        const nome = 'R2-D2'
        const resultado = await service.obterPessoas(nome)
        assert.deepStrictEqual(resultado, expected)
    })
})