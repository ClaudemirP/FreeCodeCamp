function confirmEnding(str, target) {
    
    let quote = "\w?"+target+"$"
    let regex = new RegExp(quote)
    return regex.test(str);
}
  
confirmEnding("Bastian", "n");

