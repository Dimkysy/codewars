// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
//
//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
//
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
//
// Note: The function accepts an integer and returns an integer.


function square(n) {
    return n * n
}

function squareDigits(num) {
    let arr = []
    let a = num + ""
    let b = []
    arr = a.split("")
    for (let i = 0; i < arr.length; i++) {
       b.push(square(Number(arr[i])))
    }
   let squr =  b.join("")
   return   Number(squr)

}


squareDigits(3212)

