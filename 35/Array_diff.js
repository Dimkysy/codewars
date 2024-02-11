function arrayDiff (array1, array2) {

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j< array2.length; j++) {
            let result = array1.indexOf(array2[j])
            if (result >= 0  ) {
                array1.splice(result,1)
            }
        }
    }
    return array1
}


let a = arrayDiff([1,2], [1])

console.log(a)