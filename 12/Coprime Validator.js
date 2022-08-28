function isCoprime(x,y) {
    let arr = []
    let arr2 = []
    let comprime;
    let index;

    for (let i = 1; i <= x; i++) {
        if (x % i === 0) {
            arr.push(i)
        }
    }
    for (let i = 1; i <= y; i++) {
        if (y % i === 0) {
            arr2.push(i)
        }
    }


    for (let i = 0; i < arr.length;i++) {
        index = arr2.indexOf(arr[i])
        if (index != -1) {
            comprime = arr[i]
        }
    }

    if (comprime === 1) {
        return true
    } else {
        return false
    }
}

