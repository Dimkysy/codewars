

function findShort(s){

    let arr = s.split(" ")
    let min = arr[0]

    for(let i =0; i< arr.length; i++) {
        if(min.length > arr[i].length) {
            min = arr[i]
        }
    }
    return min.length


}


findShort("bitcoin take over the world maybe who knows perhaps")