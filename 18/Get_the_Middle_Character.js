


function getMiddle(s) {

    let arr = s.split("")
    let newArr = []

    if ( arr.length % 2 == 0 ) {
        let index = arr.length / 2
        newArr.push( arr[index-1],arr[index])
    } else {
        let index = Math.floor(arr.length / 2)
        newArr.push(arr[index])
    }

    return newArr.join("")
}

getMiddle("testing")