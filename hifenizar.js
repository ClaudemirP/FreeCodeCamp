function spinalCase(str){
    //o replace está testando as palavras sem espaço mas com letra maiuscula no começo da palavra, acrescentando um underline entre elas
    str = str.replace(/([a-z])([A-Z])/g, '$1_$2')
    //o split está separando pelos underlines e espaços e o join substitui eles por hifens, depois tudo é passado para letra minuscula
    return str.split(/[\s_]/g).join('-').toLowerCase()
}


console.log(spinalCase('TestandoIssoAqui'))