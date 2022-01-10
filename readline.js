//importar o readline 
const readline = require('readline')
//criar a interface e as entradas e saidas 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', (line)=>{
    let res = line.split(' ')
    console.log(res)    
})

rl.on('SIGINT', ()=>{
    console.log('bye bye')
    rl.pause()
})

rl.question('Qual seu nome? ', (nome)=>{
    console.log('Prazer', nome)
})