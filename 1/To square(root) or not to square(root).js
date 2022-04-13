function squareOrSquareRoot(array) {
    let arrayChenge = []
    for (let i = 0; i < array.length; i++) {
        if (Math.sqrt(array[i]) ) {
            let x = Math.sqrt(array[i])
            if (Number.isInteger(x)) {
                arrayChenge.push(x)
            }
            else {
                x = array[i] * array[i]
                arrayChenge.push(x)
            }
        }
    }
    return arrayChenge;
}

