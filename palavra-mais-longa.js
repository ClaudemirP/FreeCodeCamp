function findLongestWordLength(str) {
    let res = str.split(' ').sort((a,b) => a.length - b.length)
    return res[res.length -1].length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");