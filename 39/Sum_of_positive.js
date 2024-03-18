function positiveSum(arr) {

    let newArr = []
    let sum = 0

    newArr = arr.filter(a => a > 0)

    if (newArr.length !== 0) {
        for (let i = 0; i < newArr.length; i++) {
            sum = sum + newArr[i]
        }
        return sum
    } else {
        return sum
    }

}


positiveSum([1, 2, -3, -4, 5])