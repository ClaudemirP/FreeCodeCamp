function rot13(str) {
    let arr = []
    let res = []
    
    for (let key = 0; key < str.length; key++){
      arr.push(str.charCodeAt(key))
      //garante que só letras sem acentuação serão alteradas
      if(arr[key] >= 65 && arr[key] <= 99){
            arr[key] = (((arr[key] - 65) + 13) % 26) + 65
        }

      res += String.fromCharCode(arr[key])
    }
    return res
  }
  
  rot13("SERR PBQR PNZC")

//O método charCodeAt() retorna um número inteiro entre 0 e 65535 que representa a unidade de código UTF-16 no índice fornecido. A unidade de código UTF-16 corresponde ao ponto de código Unicode para pontos de códigos representáveis em uma única unidade de código UTF-16, mas também pode ser a primeira unidade de código de um par substituto não representável em uma única unidade de código UTF-16. Por exemplo: pontos de código Unicode  > (0x10000). Se você quer o valor do ponto de código inteiro, use codePointAt().

//O método String.fromCharCode() retorna uma string criada ao usar uma sequência específica de valores Unicode.

//O nome ASCII vem do inglês American Standard Code for Information Interchange ou ”Código Padrão Americano para o Intercâmbio de Informação”. Ele é baseado no alfabeto romano e sua função é padronizar a forma como os computadores representam letras, números, acentos, sinais diversos e alguns códigos de controle.
//As letras vão do 65 até o 99 no código ASCII e essa fórmula acrescenta 13 números a ela mantendo dentro do espaço entre 65 e 99