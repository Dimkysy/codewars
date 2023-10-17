// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"



function toJadenCase  (str)  {

    let arr = str.split(' ');
    let newArr = []
    let upperStr = ""


    for (let i=0; i< arr.length; i++ ) {
        upperStr = String(arr[i])
        lowerStr =  upperStr.slice(1, upperStr.length)
        newArr.push( upperStr[0].toUpperCase() + lowerStr)
    }
    return newArr.join(" ")
};

toJadenCase("how can mirrors be real if our eyes aren't real")

