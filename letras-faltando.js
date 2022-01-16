function fearNotLetter(str) {
    //charCodeAt muda a letra para o numero corresponde ascii
    let start = str.charCodeAt(0)
    let finish = str.charCodeAt(str.length - 1)
  
    for (let i = start; i <= finish; i++){
        //fromCharCode muda o numero ascii para a letra correspondente
      let codeLetter = String.fromCharCode(i);
      let strLetter = str[i-start];
      if (codeLetter !== strLetter){
        return codeLetter;
      }
    }
  }
  
  fearNotLetter("abce");
  console.log(fearNotLetter("abce"))