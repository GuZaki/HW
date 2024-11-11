// 1. Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.
const getWordLength = array => array.map((word) => word.length);
//console.log(getItemLength(['новый', 'массив', 'строк', 'o']));

// 2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers),
// которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers
// до этой позиции включительно.
const numbers = [2, 3, 5, 7, 11, 13, 17, 19];

function currentSums(array) {
    let newArray = [];
    array.reduce((acc, num) => {
        newArray.push(acc + num)
        return acc + num;
    }, 0);
    return newArray;
}
//console.log(currentSums(numbers));

// 3. Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны
// быть равны семи: (0:7), (1:6) и т.д.
const getSumItems = array => {
    let arr = []
    for(let num of array) {
        for(let i of array) {
            if(num + i === 7) {
                arr.push([num, i]);
            }
        }
    }
    return arr
}
//console.log(getSumItems([2, 5, 7, 0]));

// 4. Напишите код, создающий массив, который будет состоять из первых букв слов строки str.
const getFirstLetter = str => str.split(' ').map(word => word[0]);
//console.log(getFirstLetter("Напишите код, создающий массив"));

// 5. Напишите код, создающий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str.
const getLetters = str => str.split("").map((word, ind, arr) => arr[ind-1] + word + arr[ind+1]).slice(1,-1);
//console.log(getLetters("Напишите"));

// 6. Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.
const sortNumbers = array => array.sort((a, b) => b - a);
//console.log(sortNumbers([2, 3, 1, 2, 13, 17, 19]));

// 7. Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел.
const getSortedArray = (array1, array2, array3) => sortNumbers([...array1, ...array2, ...array3]);

//2 вариация
//const getSortedArray = (array1, array2, array3) => sortNumbers([...array1, ...array2, ...array3]).join(' '); // значения через пробел
//console.log(getSortedArray([1, 2, 3], [14, 5], [6, 2]));

// 8. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
const getSumOfArray = array => array.flat().reduce((acc, number) => acc + number, 0);
//console.log(getSumOfArray([[1, 2, 3], [4, 5], [6, 10]]));

// 9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
const getReverseArray = array => {
    let reverseArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reverseArray.push(array[i]);
    }
    return reverseArray;
};
//console.log(getReverseArray([2, 3, 1, 2, 13, 17, 19]));

// 10. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
const getTotalMoreThan = array => {
    let res = 0;
    let counter = 0;
    // 1 вариант
    for (let number of array) {
    if (res <= 10) {
        res += number;
        counter++;
    }
}

  // 2 вариант
  // array.forEach(number => {
  // if(res <= 10) {
  //     res += number;
  //     counter++;
  //   }
  // });
    return counter;
};
//console.log(getTotalMoreThan([2, 3, 1, 1, 2, 13, 17, 19]));// 6

// 11. Напишите функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция
// принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5)
// сделает массив ['x', 'x', 'x', 'x', 'x'].
const arrayFill = (value, quantity) => Array(quantity).fill(value);
// console.log(arrayFill('x', 5));

const city1 = {
    name: 'Moscow',
    population: 13149803,
    getCityName(){
        return this.name
    },
    getPopulation(){
        return this.population
    }
}

const city2 = {
  name: "Minsk",
  population: 2000000,

};

// console.log(call.getCityName())
// console.log(city.getPopulation());

function n() {
    const a = 10;
    return function g(b){
        return a * b;
    }
}


console.log(n(10));