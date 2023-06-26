// В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число.
//
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"


function highAndLow(numbers) {

    const arrNumbers = numbers.split(" ");  // разбиваем строку на массив


    let max = Number(arrNumbers[0]) //делаем заглушку приводим к типу Number, т.к метод сплит приводит к строке
    let min = Number(arrNumbers[0])

    for (let i = 0; i < arrNumbers.length; i++) {

        if (max < Number(arrNumbers[i])) {
            max = arrNumbers[i]
        }
        if (min > Number(arrNumbers[i])) {
            min = arrNumbers[i]
        }
    }
    return `${max} ${min}`

}

highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")

let a = highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")

console.log(a)

