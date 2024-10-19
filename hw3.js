// 1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
function getSquareOfNumber(num) {
  return num * num;
}

// 2. Сделайте функцию, которая возвращает сумму двух чисел.
function getSumOfNumbers(num1, num2) {
  return num1 + num2;
}

// 3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
function getNewNumber(num1, num2, num3) {
  return (num1 - num2) / num3;
}

// 4. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
function getDayOfWeek(num) {
  switch (num) {
    case 1:
      return "Понедельник";
    case 2:
      return "Вторник";
    case 3:
      return "Среда";
    case 4:
      return "Четверг";
    case 5:
      return "Пятница";
    case 6:
      return "Суббота";
    case 7:
      return "Воскресенье";
    default:
      return "Нет такого дня недели";
  }
}
// console.log(getDayOfWeek(6))

// 5. Сделайте функцию, которая параметрами принимает 2 числа.
// Если эти числа равны - пусть функция вернет true, а если не равны - false.
function compareEqualOfNumbers(num1, num2) {
  return num1 === num2 ? true : false;
}
// console.log(compareEqualOfNumbers(2, 2))

// 6. Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false.
function compareSumOfNumbers(num1, num2) {
  return num1 + num2 > 10 ? true : false;
}
// console.log(compareSumOfNumbers(5, 6))

// 7. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет.
// Если отрицательное - пусть функция вернет true, а если нет - false.
function checkNegativeNumber(num) {
  return num < 0 ? true : false;
}
// console.log(checkNegativeNumber(0))

// 8. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 9.
// Если это так - пусть функция возвращает true, если не так - false.
function isNumberInRange(num) {
  return num > 0 && num < 9 ? true : false;
}
// console.log(isNumberInRange(1))

// 9. Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти.
// Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.
function isNumberInRange2(num) {
  return num > 0 && num < 10 ? true : false; // так как в предыдущем задании условие меньше 9
}

function getNumberInRange(array) {
  const arrayOfRangeNumbers = array;
  return arrayOfRangeNumbers.filter((number) => isNumberInRange2(number));
}
// console.log(getNumberInRange([1, 0, 5, 6, 9]));
// console.log(getNumberInRange([1, 1, 3, 6, 1]));
// console.log(getNumberInRange([1, 0, 9, 6, 1]));
// console.log(getNumberInRange([4, 1, 0, -3, -6, 11]));

// 10. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
function getDigitsSum(digit) {
  // 1 вариант
  const str = digit.toString();
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += +str[i];
  }
  return sum;

  // 2 вариант
  return digit
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, num) => acc + num);
}
// console.log(getDigitsSum(639));

// 11. Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
function getYearSum(n) {
  // 1 вариант
  let years = [];
  for (let i = 1; i < n; i++) {
    getDigitsSum(i) === 13 ? years.push(i) : false;
  }
  return years;

  // 2 вариант
  for (let i = 1; i < n; i++) {
    getDigitsSum(i) === 13 ? console.log(i) : false;
  }
}
// console.log(getYearSum(2020));

// 12. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет.
// Если четное - пусть функция возвращает true, если нечетное - false.
function isEven(num) {
  return num % 2 === 0 ? true : false;
}
// console.log(isEven(50));

// 13. Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
function arrayIsEven(arr) {
  let evenArray = arr.filter((number) => isEven(number));
  return evenArray;
}
// console.log(arrayIsEven([1, 0, 50, 6, 9]));
// console.log(arrayIsEven([1, 1, 3, 6, 10]));
// console.log(arrayIsEven([1, 0, 90, 6, 1]));
// console.log(arrayIsEven([4, 1, 0, -3, -6, 11]));

// 14. Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).
function getDivisors(num) {
  let arrayOfDivisors = [];
  for (let i = 0; i <= num; i++) {
    num % i === 0 ? arrayOfDivisors.push(i) : false;
  }
  return arrayOfDivisors;
}
// console.log(getDivisors(50));

// 15. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).
function getSum(num) {
  // 1 вариант
  let result = getDigitsSum(num);
  for (let i = 0; i < result; i++) {
    result = result < 9 ? result : getDigitsSum(result);
  }
  return result;
}
// console.log(getSum(55551222969999955));

// 16. Напишите стрелочную функцию, которая будет возвращать true если строка является палиндромом и false в противном случае.
const isStringPalindrom = (string) => {
    return (
      string.toLowerCase().split("").reverse().join("").replaceAll(" ", "") ===
      string.toLowerCase().replaceAll(" ", "")
    );
}
console.log(isStringPalindrom("А роза упала на лапу Азора"));