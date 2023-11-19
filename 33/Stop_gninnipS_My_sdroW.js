// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"



function spinWords(string){
    let strArr = string.split(" ")

    for( i=0; i < strArr.length; i++) {
        if (strArr[i].length >= 5) {
            strArr[i] = strArr[i].split("").reverse().join("")
        }
    }
    return  strArr.join(" ")
}


spinWords("Hey fellow warriors")