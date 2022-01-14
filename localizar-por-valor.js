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

/*Localizar por valor

Faça uma função que olha através de um array de objetos (primeiro argumento) e retorna um array de todos os objetos que têm pares de nome e valor correspondentes (segundo argumento). Cada par de nome e valor do objeto fonte tem que estar presente no objeto da coleção se ele for ser incluído no array retornado.

Por exemplo, se o primeiro argumento é [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], e o segundo argumento é { last: "Capulet" }, em seguida, você deve retornar o terceiro objeto do array (o primeiro argumento), porque contém o nome e o seu valor, que foi passado como segundo argumento.
*/