const EventEmmiter = require('events')
class MeuEmissor extends EventEmmiter {

}
const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'

meuEmissor.on(nomeEvento, function (click) {
    console.log('um usuario clickou', click)
})

// meuEmissor.emit(nomeEvento, 'na barra de rolagem')

// let count = 0
// setInterval(function (){
//     meuEmissor.emit(nomeEvento, 'no ok ' + (count++))
// },1000)

const stdin = process.openStdin()
stdin.addListener('data', function (value){
    console.log(`você digitou: ${value.toString().trim()}`)
})