// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// Создайте функцию, которая принимает целое число в качестве аргумента и возвращает «Четное» для четных чисел или «Нечетное» для нечетных чисел.

function evenOrOdd(number) {
    if(number % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

let a =  evenOrOdd(3)

alert(a)