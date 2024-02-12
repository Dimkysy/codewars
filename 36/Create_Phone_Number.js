// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"


function createPhoneNumber(numbers) {

    let arr1 = []
    let arr2 = []
    let arr3 = []

    if (numbers.length >= 10) {
        while (numbers.length > 0) {
            switch (numbers.length) {
                case 10: {
                    for (let i = 0; i < 3; i++) {
                        arr1.push(numbers[i])
                    }
                    numbers.splice(0, 3);
                    break
                }
                case 7: {
                    for (let i = 0; i < 3; i++) {
                        arr2.push(numbers[i])
                    }
                    numbers.splice(0, 3);
                }
                case 4: {

                    for (let i = 0; i < 4; i++) {
                        arr3.push(numbers[i])
                    }
                    numbers.splice(0, 4);
                    break
                }
            }
        }
    }
    let str = "(" + arr1.join("") + ")" + " " + arr2.join("") + "-" + arr3.join("")

    return   str

}


let a = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

console.log(a)
