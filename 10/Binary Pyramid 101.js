
function binary (del) {
    let arr = []
    while ( del /2) {
        if (del % 2 === 0  && del/2 != 1) {
            del = del/2
            arr.push(0)
        }  else if (del % 2 != 0) {
            arr.push(1)
            del =  Math.floor(del /2)
        }

        else if (del/2 === 1) {
            arr.push(0)
            arr.push(1)
            break
        }
    }
    return (arr.reverse().join(''))
}




function binaryPiramid (n,m) {

    let arr2 = []
    let sum = 0;


    for (;n <= m; n++ ) {
        arr2.push(Number(binary(n)))
    }

    for (let i = 0; i< arr2.length; i++) {
        sum += arr2[i]

    }
    return(binary(sum))
}


binaryPiramid(1,6)