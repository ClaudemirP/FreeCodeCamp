function pairElement(str) {
    const pairings = {
      "A": "T",
      "T": "A",
      "G": "C",
      "C": "G"
    }
    return str.split('').map(elem => [elem, pairings[elem]]);
  }
  
  console.log(pairElement("GCG"))
  pairElement("GCG");