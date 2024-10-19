// 1. Вывести в терминал строку “Hello World!” 
console.log("Hello World!");

// 2. Создать переменную для каждого типа данных 
const age = 25;
const userName = "Alex";
const isStudent = false;
const obj = null;
let country; 
const id = Symbol(123);
const bigNum = BigInt(1234567890000015);
const newArray = [1, 2, 3];

// 3. Вывести в консоль редактора кода созданные переменные 
console.log(age);
console.log(userName);
console.log(isStudent);
console.log(obj);
console.log(country);
console.log(id);
console.log(bigNum);
console.log(newArray);

// 4. Вывести ее тип через оператор typeof и функцию typeof 
console.log(typeof age);
console.log(typeof userName);
console.log(typeof isStudent);
console.log(typeof obj);
console.log(typeof country);
console.log(typeof id);
console.log(typeof bigNum);
console.log(typeof newArray);

// 5. Попробовать изменить переменную объявленную через const 
age = 50; 
console.log(age); //TypeError: Assignment to constant variable

// 6. Попробовать изменить переменную с типом object объявленную через const 
newArray = [true, true]; 
console.log(newArray); //TypeError: Assignment to constant variable

// 7. Попробовать изменить переменную с типом object объявленную через let 
let array = [0, 2, 5];
array = 43;
console.log(array); //43

// 8. Попробовать изменить переменную с типом object объявленную через var 
var array2 = [0, 2, 5];
array = 43;
console.log(array2); //[0, 2, 5]
