// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false



function XO(str) {
    let arr = str.toLowerCase().split("")

   let repeateX = arr.filter(x => x === "x" )
   let repeateY =  arr.filter(y => y === "o" )

    if ( repeateX.length !== repeateY.length ) {
        return false
    } else {
        return true
    }
}


let a = XO("zpzpzpp")

console.log(a)