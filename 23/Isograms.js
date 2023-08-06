// DESCRIPTION:
//     An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// Example: (Input --> Output)
//
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)


// ОПИСАНИЕ:
//     Изограмма — это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. Реализуйте функцию, определяющую, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая строка является изограммой. Игнорировать регистр букв.
//
//     Пример: (Ввод --> Вывод)
//
// "Дерматоглифика" --> истина "аба" --> ложь "moOse" --> ложь (игнорировать регистр букв)


// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false


function isIsogram(str) {
    let arr = str.toLowerCase().split("")
    let newArr = arr.length

    for (let i = 0; i < newArr; i++) {
        let a = arr.pop()
        let index = arr.indexOf(a)
        if (index !== -1) {
            return false
        }
    }
   return true

}

let a =  isIsogram("dHmvciphkzgajswqyu")

console.log(a)