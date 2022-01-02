//rest permite criar uma função que aceita um número variavel de parametros (...args)

const sum = (...n) => n.reduce((a,b) => a + b, 0);

console.log(sum(2,3,5))