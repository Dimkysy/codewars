// Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.


// Возвращает количество (количество) гласных в заданной строке.
//
// Мы будем рассматривать a, e, i, o, u как гласные для этой Ката (но не y).
//
// Входная строка будет состоять только из строчных букв и/или пробелов.


function getCount(str) {

    const arrayVowels = ["a", "e", "i", "o", "u"]
    const dataFields = str.split("");

    let count = 0;

    for (let i =0; i< dataFields.length; i++) {
        for (let j = 0; j< arrayVowels.length; j++) {
            if (dataFields[i].includes(arrayVowels[j])) {
                count = count + 1
            }
        }
    }
  return count

}


let a = getCount("abracadabra")

console.log(a)