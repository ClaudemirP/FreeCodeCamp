function myReplace(str, before, after) {
  //testa se o before começa com letra maiuscula ou minuscula usando o metodo test do regex
  if (/^[A-Z]/.test(before)){
    after = after[0].toUpperCase() + after.slice(1)
  } else {
    after = after[0].toLowerCase() + after.slice(1)
  }
  //troca eles com replace
  let res = str.replace(before, after)
  return res;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
