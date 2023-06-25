// Trolls are attacking your comment section!
//
//     A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//
// Your task is to write a function that takes a string and return a new string with all vowels removed.
//
//     For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//
//     Note: for this kata y isn't considered a vowel.


// Тролли атакуют ваш раздел комментариев!
//
//     Обычный способ справиться с этой ситуацией — удалить все гласные из комментариев троллей, нейтрализуя угрозу.
//
//     Ваша задача — написать функцию, которая принимает строку и возвращает новую строку, в которой удалены все гласные.
//
//     Например, строка «Этот сайт для неудачников, LOL!» станет «Ths wbst s fr lsrs LL!».
//
// Примечание: для этой ката y не считается гласной

// Array(3)
// 0:"apple"
// 1:"banana"
// 2:"orange"


function disemvowel(str) {
    const letter  = ["A","E","I","O","U","a","e","i","o","u"]

    const fruits = str.split(' '); // рабиваем предложения на слова и создаем массив
    let new_arr = []

    for (let j = 0; j < fruits.length; j++) { // цикл для перебора слов

        let letter_split = fruits[j] //берем первое слово
        letter_split =  letter_split.split('')//разбиваем слово на буквы

        let a =  findLetter(letter,letter_split) // вызываем фунуцию и передаем массив гласных и массив букв слова
        new_arr.push(a)//результат функции которая убирает гласные, собираем все новые слова в массив
    }
    return new_arr.join(" ") //из массива превращаем в строку

}


function findLetter (letter,letter_split) {


    for (let i = 0; i< letter.length; i++) {
        let letter_index = 0 // переменная для проверки найден ли индекс, требуеся каждый раз обновлять до 0, что бы запускался while

        while (letter_index !== -1 ) { // пока индекс не равен -1 продолждай делать следующее
            letter_index = letter_split.indexOf(letter[i]) // ищем индекс буквы в одном слове, цикл while позволяет нам найти не первое вхождение, а все буква в слое
            if (letter_index !== -1) {  // проверка что бы while не убрал все буквы из слова
                letter_split.splice(letter_index, 1) // удаляем найденую букву по индексу с 1 элемента т.к он у нас один
            }
        }
    }
    let letter_join = letter_split.join("") // склеиваем из букв слово без гласных и возвращаем
    return letter_join

}

let a = disemvowel("This website is for losers LOL!")

console.log(a)

