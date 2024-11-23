// 1. Что выведет функция?
// function f() {
//   alert(this);
// }

// let user = {
//   g: f.bind(null),
// };
// user.g();

//Ответ:
// При использовании директивы 'use strict' при вызове функции будет выведет пераданный аргумент null
// При отстствии директивы 'use strict' будет выводиться глобальный объект (Window)

// 2. Можем ли мы изменить this дополнительным связыванием?
// function f() {
//  alert(this.name);
// }
 
// f = f.bind({ name: "Вася" }).bind({ name: "Петя" });
// f();
 
// // Ответ:
// // нет, метод bind позволяет выполнить новую привязку, но не позволяет изменить уже существующую
 
// // 3. В свойство функции записано значение. Изменится ли оно после применения bind?
// function sayHi() {
//  alert( this.name );
// }
// sayHi.test = 5;
 
// let bound = sayHi.bind({
//  name: "Вася"
// });
// alert( bound.test );
 
// // Ответ:
// // нет. Не совсем понятно условие задачи, можно будет рассмотреть?)
 
// // 4. Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в
// // зависимости от ответа. Однако, его вызов приводит к ошибке. Почему?
// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }
 
// let user = {
//   name: 'Вася',
//   loginOk() {
//     alert(`${this.name} logged in`);
//   },
//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };
 
// askPassword(user.loginOk, user.loginFail);
 
// // Ответ:
// // В функцию askPassword при ее вызове не передается контекст объекта user, если создайть связанную функцию (используя bind)
// // в передаваемых при вызове функции askPassword аргументов, то все отработает (askPassword(user.loginOk.bind(user), user.loginFail.bind(user)))
 
// // 5. Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).
// // Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?
// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }
 
// let user = {
//   name: 'John',
//   login(result) {
//     alert(this.name + (result ? ' logged in' : ' failed to log in'));
//   }
// };
 
// askPassword(user.login.bind(user, true), user.login.bind(user, false));
 
// // 6. Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на value из переменной elem.
// const elem = {
//   value: 'Привет'
// }
 
// function func(surname, name) {
//   alert(this.value + ', ' + surname + ' ' + name);
// }
 
// //Тут напишите конструкцию с bind()
// let say = func.bind(elem);
// say('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
// say('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'

// // 7. Есть функция которая складывает три числа. Выполните каррирование.
// // const sum = (a, b, c) => a + b + c
// function getSum (a) {
//   return function (b) {
//       return function (c) {
//           return a + b + c;
//       }
//   }
// } 
// console.log(getSum(5)(10)(15)); 

// // 8. Реализовать таймер-функцию используя замыкания. Функция принимает два аргумента начальное значение и значение завершения. 
// // Таймер движется назад. При достижении точки завершения в консоль выводится значение таймера и сообщение о завершении работы таймера
// function creatTimer(start, end) {
 
//   function timer() {
//     return `Таймер = ${end}, его работа завершена`;
//   }
 
//   for(let i = start; i >= end; i--){
//       console.log(i);
//       if(i === end) return timer();
//   }  
// }
 
// console.log(creatTimer(10, 0)); 