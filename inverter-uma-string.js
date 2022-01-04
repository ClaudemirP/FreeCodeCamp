function reverseString(str) {
    //o metodo split() separa a string em substrings e retorna um array
    //o metodo reverse() inverte um array
    //o metodo join() junta todos os indices do array em uma string
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("hello"));