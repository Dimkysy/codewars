
function generateShape(integer){
    let str = ""
    for (let i = 1; i <= integer; i++) {
        for (let j = 1; j <= integer; j++) {
            str += "+"

            if (j === integer && i === integer) {
                return str
            }

            else if (j === integer ) {
                str += "\n"
            }
        }
    }
}
