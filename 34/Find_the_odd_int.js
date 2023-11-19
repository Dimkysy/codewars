// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"



function findOdd(arr) {

    let newArrSort = []
    let unionArr = []
    newArrSort.push(arr[0])

    for (let i = 1; i< arr.length; i++) {
       let findNumber =  newArrSort.find(a => a == arr[i] )
        if (findNumber === undefined) {
            newArrSort.push(arr[i])
        }
    }

    for (let j =0; j < newArrSort.length ; j++ ) {
        let filterArr = arr.filter(a => a == newArrSort[j])
        unionArr.push(filterArr)
    }

    for (let k = 0; k < unionArr.length; k++) {
        if (unionArr[k].length % 2 != 0) {
            return unionArr[k][0]
        }
    }
}





let a =  findOdd([0,1,0,1,0,2,3,1,6,5,3,4,0,1])

console.log(a)