// [19, 5, 42, 2, 77], the output should be 7.


function sumTwoSmallestNumbers(numbers) {

    let n = 0
    let newArray = []
    let sum = 0

    while (n !== 2) {
        let min = numbers[0]

        for (let i = 0; i < numbers.length; i++) {
            if (min > numbers[i]) {
                min = numbers[i]
            }
        }
        let index = numbers.indexOf(min)
        newArray.push( parseInt(numbers.splice(index, 1).join()) )
        n = n + 1
    }

    for (let j = 0; j< newArray.length; j++) {
        sum = sum + newArray[j]
    }
    return sum

}

sumTwoSmallestNumbers([19, 5, 42, 2, 77])