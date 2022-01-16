function myReplace(str, before, after) {
  //testa se o before começa com letra maiuscula ou minuscula usando o metodo test do regex
  /^[A-Z]/.test(before) ? after = after[0].toUpperCase() + after.slice(1) : after.toLowerCase()
  //troca eles com replace
  return str.replace(before, after)
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))