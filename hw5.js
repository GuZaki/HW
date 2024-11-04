// 1. Преобразовать строку в массив слов. Напишите функцию stringToarray(str), которая преобразует строку в массив слов.
const stringToarray = str => str.split(' ');

//console.log(stringToarray('hello world'));

// 2. Напишите функцию deleteСharacters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.
const deleteСharacters = (str, length) => str.slice(0, length);
//console.log(deleteСharacters("hello world", 3));

// 3. Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами.
// При этом все символы строки необходимо перевести в верхний регистр.
const insertDash = str => str.toUpperCase().split(' ').join('-');

//console.log(insertDash("hello world hello world hello world"));

// 4. Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.
const capitalizeFirstChar = str => {
  // 1 вариант
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
  // 2 варивнт
  //return `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;
};
//console.log(capitalizeFirstChar("hello WoRld"));

// 5. Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.
const capitalize = str => {
  // 1 вариант
  return str
    .split(" ")
    .map((str) => str[0].toUpperCase() + str.slice(1).toLowerCase())
    .join(" ");

  // 2 варивнт
  //return str.split(' ').map(capitalizeFirstChar).join(' ');
};
//console.log(capitalize("hello woRld hello woRld cv hello woRld"));

// 6. Напишите функцию changeRegister(str), которая принимает в качестве аргумента строку и заменяет регистр каждого символа на противоположный. 
// Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».
const changeRegister = str => str
                              .split('')
                              .map(i => i.toUpperCase() === i ? i.toLowerCase() : i.toUpperCase())
                              .join('');

//console.log(changeRegister("КаЖдЫй ОхОтНиК"));

// 7. Напишите функцию removeChar(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.
const removeChar = str => {
  const regExp = /[^А-Яа-я0-9 ]/g;
  return str.replace(regExp, '');
}
//console.log(removeChar("КаЖдЫй О*** 999ОтНиК"));

// 8. Напишите функцию zeros(num, len), которая дополняет нулями до указанной длины числовое значение с дополнительным
// знаком «+» или «-» в зависимости от передаваемого аргумента.
const zeros = (num, len) => {
  const tempNum = num > 0
    ? '+' + num.toFixed(len - num.toString().length)
    : num.toFixed(len + 1 - num.toString().length);

  return tempNum.replace(/\./g, '');
  // 2 вариант
  //return tempNum.split('').filter(i => i !== '.').join('')
}
//console.log(zeros(-8, 2));

// 9. Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.
const comparison = (str1, str2) => {
  return str1.toLowerCase() === str2.toLowerCase();
}
//console.log(comparison("КаЖдЫй", "каждый"));

// 10. Напишите функцию insensitiveSearch(str1, str2), которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.
const insensitiveSearch = (str1, str2) => str1.toLowerCase().includes(str2.toLowerCase());
//console.log(insensitiveSearch("hello woRld hello world hello world",'heLLo'));

// 11. Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором
// несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.
const initCap = str => str.split(" ").map(capitalizeFirstChar).join('');
//console.log(initCap("hello woRld hello world hello world"));

// 12. Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются
// символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.
const initSnake = str => {
  const tempStr = str
    .split("")
    .map((i) => i.replace(/[A-Z]/g, `_${i.toLowerCase()}`))
    .join(""); // если условие четко выполняется (CamelCase), можно сразу возвращать строку

  return tempStr[0] === "_" ? tempStr.slice(1) : tempStr; // если первые буквы отличаются по регистру
}
//console.log(initSnake('helloWorldHelloWorld'));

// 13. Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.
const repeatStr = (str, n) => str.repeat(n);
//console.log(repeatStr("hello ", 5));

// 14. Напишите функцию path(pathname), которая возвращает имя файла (подстрока после последнего символа "/" ) из полного пути к файлу.
const path = pathname => pathname.split('/').at(-1);
//console.log(path("hello1/hello2/hello3/hello4/hello5"));

// 15. Создайте функцию endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.
const endsWith = (str1, str2) => str1.endsWith(str2);
//console.log(endsWith("hello", "llo"));

// 16. Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.
const getSubstr = (str, char, pos) => {
  return pos === 0
    ? str.slice(0, str.indexOf(char))
    : str.slice(str.indexOf(char)+1);
}
//console.log(getSubstr("hopopoellopooop", 'e', 2)); 

// 17. Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.
const insert = (str, substr, pos = 0) => {
  const tempArr = str.split("");
  tempArr.splice(pos, 0, substr);
  return tempArr.join('');
}
//console.log(insert("hello", 'W', 3));

// 18. Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n.
// Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.
const limitStr = (str, n, symb = '...') => str.slice(0, n) + symb;
//console.log(limitStr("helllllo", 4, '-+-+'));

// 19. Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.
const count = (str, stringsearch) => {
  const regExp = new RegExp(stringsearch, "g");
  return str.match(regExp).length;
}
//console.log(count("hellllo", "he"));

// 20. Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.
const strip = str => str.trim();
//console.log(strip("  hello World      "));

// 21. Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.
const cutString = (str, n) => str.split(' ').slice(0, n).join(' ');
//console.log(cutString("hello World Hello World World Hello World", 3));

// 22. Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.
const findWord = (word, str) =>  str.includes(word);
//console.log(findWord("lo", "hello"));

const arr1 = [2, 8, 5, 2, 8]
const arr2 = [2, 8, 5, 2, 8];
// const newArr = arr.reduce((acc, item) => (item % 2 === 0 && item > 0) ? acc + item : acc, 0)
// console.log(newArr)

function fff(arg1, arg2) {
  if(arg1.length !== arg2.length) return false
  let result = true
  for(let num in arg1){
    if(arg1[num] !== arg2[num]){
      result = false
    }
  }
  return result
}

console.log(fff(arr1, arr2));
