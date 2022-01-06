function titleCase(str) {
    //vai receber a string dividida em arrays
    let array = str.split(' ')
    //vai receber a resposta no final 
    let res = []
    for(let x= 0; x < array.length; x++){
        //essa linha vai deixar todas as palavras em minusculas
        let lower = array[x].toLowerCase()
        //essa linha vai capitalizar a primeira letra de cada palavra e retorna o restante minusculo
        res.push(array[x].charAt(0).toUpperCase()+lower.slice(1))
    }
    //vai converter o array em string
    return res.join(' ')
  }
  
  titleCase("Retorne a string fornecida com a primeira letra de cada palavra em letra maiúscula. Certifique-se de que o resto da palavra esteja em letras minúsculas. Para o propósito desse exercício, você também deve capitalizar as palavras conectoras como the e of.");