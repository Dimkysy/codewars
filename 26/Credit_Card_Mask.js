// return masked string
function maskify(cc) {

    if (cc.length >= 5) {
        let newArr = cc.split("")
        let arr = []
        let len = cc.length - 4 // 10 - 4 = 6
        let star = "#"

        for (let i = 0; i < 4; i++) {
            arr.push(newArr.pop())
        }
       let str =  arr.reverse().join("")

       for (let j = 1; j < len ; j++) {
           star = star + "#"
       }
       return star + str

    } else {
        return cc
    }
}


let a = maskify('45562')

console.log(a)