function telephoneCheck(str) {
  let regex = new RegExp(/^[1]?\s?[\d]{3}\s?(?:-)[\d]{3}\s?(?:-)[\d]{4}|^[1]?\s?[\d]{3}\s?[\d]{3}\s?[\d]{4}|^[1]?\s?(?:\()[0-9]{3}(?:\))\s?[0-9]{3}\s?(?:-)[0-9]{4}$/)
  return regex.test(str)
}

console.log(telephoneCheck("(555)555-5555"))
telephoneCheck("555-555-5555")
