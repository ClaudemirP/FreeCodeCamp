function translatePigLatin(str) {
  let vogal = ["a","e","i","o","u"]
  let res = ''
  //separando
  for (let indice = 0; indice < str.length; indice++){
    if (vogal.some(vog => vog === str[indice])){
      break
    } else {
      res += str[indice]
    }
  }
  //verificando
  if(res == ''){
    return str + 'way'
  } else {
    return str.slice(res.length) + res + 'ay'
  }
}

translatePigLatin("glove")
