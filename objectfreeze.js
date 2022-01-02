let obj = {
    name: "FreeCodeCamp",
    review : "Awesome"
}

Object.freeze(obj) //impede a mudança do que foi declarado nesse objeto

obj.review = "Bad" //retorna um erro
obj.newProp = "Test" //retorna um erro

console.log(obj)
