function squareSum(numbers){

    let newArr = numbers.map (a =>  Math.pow(a,2))
    let sum = 0

    for(let i=0; i< newArr.length; i++) {
        sum = sum + newArr[i]
    }


    return sum
}

console.log(squareSum([1,2]))