function convertToRoman(num) {
  //um objeto com a base dos numeros para verificação
  let romanNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  //a resposta vai ser inserida nessa variavel
  let res = "";
  //passa por todo o objeto romanNum
  for (let key in romanNum){
    //verifica se num é maior ou igual ao valor do objeto
    while(num >= romanNum[key]){
      //caso seja ele vai acrescentar a chave a resposta
      res += key;
      //e tirar o valor de num para repassar o loop
      num -= romanNum[key];   
    }
  }
 return res;
}
convertToRoman(36);

//Conversor de numerais romanos

//Converta o número dado em um número romano.

//Todas as respostas de números romanos devem ser fornecidas em maiúsculas.
