function frankenstein(arr1, arr2, n){
    //copia o arr2 para a variavel localArray com slice para manter o original intacto
    let localArray = arr2.slice()
    //insere os valores de arr1 no index indicado pelo n
    localArray.splice(n, 0, ...arr1)
    return localArray
}

console.log(frankenstein([1,2,3], [4,5,6], 2))