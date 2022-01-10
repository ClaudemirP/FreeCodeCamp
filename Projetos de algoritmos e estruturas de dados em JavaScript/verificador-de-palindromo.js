function palindrome(str) {
    let string = str.split('')
    .filter(item => item != ' ')
    .join('').replace(/[\W_]/g, '')
    .toLowerCase()
  
    let reverse = string.split('')
    .reverse().join('')
    
    return string == reverse;
  }
  
  palindrome("eye");