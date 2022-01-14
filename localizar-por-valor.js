function whatIsInAName(collection, source) {
    let arr = [];
    // Altere apenas o código abaixo desta linha
    let props = Object.keys(source);
    arr = collection.filter(obj => 
      props.every(prop => obj.hasOwnProperty(prop) && obj[prop] === source[prop]
      ));
    // Altere apenas o código acima desta linha
    return arr;
  }

  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

//O método Object.keys() retorna um array de propriedades enumeraveis de um determinado objeto, na mesma ordem em que é fornecida por um laço for...in (a diferença é que um laço for-in  enumera propriedades que estejam na cadeia de protótipos).

//O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida.

  /* function whatIsInAName(collection, source) {
  let arr = [];
  // Altere apenas o código abaixo desta linha
  let props = Object.keys(source);
  arr = collection.filter(obj => 
    props.every(prop => obj.hasOwnProperty(prop) && obj[prop] === source[prop]
    ));

  // Altere apenas o código acima desta linha
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); */