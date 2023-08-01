
// -1  =>  false
// 0  =>  true
// 3  =>  false
// 4  =>  true
// 25  =>  true
// 26  =>  false


var isSquare = function(n){
    let squareRoot = Math.sqrt(n);
    return Number.isInteger(squareRoot); // fix me
}



let a =  isSquare(-1)

console.log(a)