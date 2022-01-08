function frankensplice(arr1, arr2, n){
    let localArray = arr2.slice()
    //um loop é criado para passar por todos os indices do arr1
    for (let i = 0; i < arr1.length; i++){
        //cada item é incluido separadamente
        localArray.splice(n, 0, arr1[i])
        //n fica maior a cada passada do loop para colocar os valores no lugar correto
        n++
    }
    return localArray
}

console.log(frankensplice([1,2,3], [4,5,6], 2))


function frankenstein(arr1, arr2, n){
    //copia o arr2 para a variavel localArray com slice para manter o original intacto
    let localArray = arr2.slice()
    //insere os valores de arr1 no index indicado pelo n
    //o rest (...) faz com que todos os valores do arr1 sejam passados para o novo array
    localArray.splice(n, 0, ...arr1)
    return localArray
}

console.log(frankenstein([1,2,3], [4,5,6], 2))

