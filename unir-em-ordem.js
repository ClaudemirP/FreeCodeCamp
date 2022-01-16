function uniteUnique(arr) {
    let unique = []
    let allArr = Array.from(arguments).reduce((arr1, arr2) => arr1.concat(arr2))
  
    allArr.forEach(function(elem){
      if (!unique.includes(elem)){
        unique.push(elem)
      }
    })
    return unique;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);