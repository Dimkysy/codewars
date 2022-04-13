function stringy(size) {
    // your code here
    let array = [];
    for ( let i = 1; i <= size; i++) {
        if ( i % 2 == 0) {
            array.push(0)
        } else {
            array.push(1)
        }
    }
    return  array.join('')
}

console.log(stringy(6))
