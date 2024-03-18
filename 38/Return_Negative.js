

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
//
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12




function makeNegative(num) {
    let number

    number =  Math.sign(num)

    if (number === 1 ) {
        return 0 - num
    } else if (number === -1) {
        return num
    } else  if (number === 0) {
        return num
    }
}

makeNegative(1)