

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
//
// В этом ката вы создадите функцию, которая берет список неотрицательных целых чисел и строк и возвращает новый список с отфильтрованными строками.


// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


function filter_list(l) {
    let arr = l.filter(number =>  typeof  number  === 'number')
    return arr
}



 filter_list([1,2,'a','b'])




