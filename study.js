
/* alert('Hello');
[1, 2].forEach(alert); */


// let message = 'Hello!';
// Змінні
/* let user = 'John';
let age = 25;
let message = 'Hello';

alert(message);
[user, age].forEach(alert); */

// Сталі
// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
// const COLOR_BLUE = "#00F";
// const COLOR_ORANGE = "#FF7F00";

// let color = COLOR_ORANGE;
// alert(color);
/* let name = 'Jhon';
let admin = 'Jhon';
alert(admin); */

/* let admin, name; // можно объявить две переменные через запятую

name = "Джон";

admin = name;

alert(admin); // "Джон"

const ourPlanet = 'Earth'
const userName='Vladyslav' 
const birthday = '18.04.1982';

const age = someCode(birthday);
  */

// Типы данных

/* Число (number)
let n = 123;
n = 12.345; */

/* Чтобы создать значение типа BigInt, необходимо добавить n в конец числового литерала:

символ "n" в конце означает, что это BigInt
const bigInt = 1234567890123456789012345678901234567890n; */

/* Cтрока
Строка (string) в JavaScript должна быть заключена в кавычки.

let str = "Привет";
let str2 = 'Одинарные кавычки тоже подойдут';
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`; */
/* 

Булевый (логический) тип
Булевый тип (boolean) может принимать только два значения: true (истина) и false (ложь).

Такой тип, как правило, используется для хранения значений да/нет: true значит «да, правильно», а false значит «нет, не правильно».

Например:

let nameFieldChecked = true; // да, поле отмечено
let ageFieldChecked = false; // нет, поле не отмечено
Булевые значения также могут быть результатом сравнений:

let isGreater = 4 > 1; */

// alert( isGreater ); // true (результатом сравнения будет "да")

// let isGreater = 4 > 1;

// alert(isGreater);

// let age = null;

/* typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert  */// "function"  (3)

// let name = prompt('тебе звати?',"Vlad");

// alert(name); // Тебе 100 лет!

// let test = prompt("Test", '');

// let isBoss = confirm("Ты здесь главный?");

// alert( isBoss ); // true, если нажата OK

// let value = true;
// alert(typeof value);

// value = String(value); // теперь value это строка "true"
// alert(typeof value); // string
// alert("6" / "2");

// let str = "123";
// alert(typeof str); // string

// let num = Number(str); // становится числом 123

// alert(typeof num); // number

// let x = 1;

// x = -x;
// alert(x);
// let x = 1, y = 3;
// alert( y - x ); // 2, бинарный минус вычитает значения
// alert( 5 % 2 ); // 1, остаток от деления 5 на 2
// alert(8 % 3); // 2, остаток от деления 8 на 3
// alert( 2 ** 2 ); // 4  (2 умножено на себя 2 раза)
// alert( 2 ** 3 ); // 8  (2 * 2 * 2, 3 раза)
// alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2, 4 раза)

// let a = prompt("Первое число?",  1);
// let b = prompt("Второе число?",  2);

// alert(1 + 2);

// let result = 5 > 4; // результат сравнения присваивается переменной result
// alert(result); // true

//  > 4 → true
// "ананас" > "яблоко" → false
// "2" > "12" → true
// undefined == null → true
// undefined === null → false
// null == "\n0\n" → false
// null === +"\n0\n" → false

// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');


// if (year == 2015) {
//   alert( 'Да вы знаток!' );
// } else {
//   alert( 'А вот и неправильно!' ); // любое значение, кроме 2015
// }

// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

// if (year < 2015) {
//   alert( 'Это слишком рано...' );
// } else if (year > 2015) {
//   alert( 'Это поздновато' );
// } else {
//   alert( 'Верно!' );
// }

// let accessAllowed;
// let age = prompt('Сколько вам лет?', '');

// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// alert(accessAllowed);
// let company = prompt('Какая компания создала JavaScript?',"");
//  if (company == 'Netscape') {
//   alert('Верно!');
// } else {
//   alert('Не знаете? ECMAScript!');
// }



// let value = prompt('Введите число', 0);

// if (value > 0) {
//   alert( 1 );
// } else if (value < 0) {
//   alert( -1 );
// } else {
//   alert( 0 );
// }

// const name = 'Влад'
// const age = 33
// function getAge() {
//   return age
// }
// const output = `Привіт, мене звати ${name} і мені ${age} роки.`
// console.log(output)

// const output = `
// <div>This is div</div>
//   <p>This is p</p>
// `

// console.log(output)

// function changeColor(element) {
//   var currentColor = element.style.backgroundColor;
//   if (currentColor == "red") {
//     element.style.backgroundColor = "green";
//   } else {
//     element.style.backgroundColor = "red";
  
//

// let height = 0;

// alert(height || 100); // 100
// alert(height ?? 100); // 0

// let fruit = prompt("Какой фрукт купить?", "apple");

// let bag = {
//   [fruit]: 5, // имя свойства будет взято из переменной fruit
// };

// alert( bag.apple ); // 5, если fruit="apple"
// let i = 5;

// while (i) {
//   alert( i++);
// }

// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert( 'Маловато' );
//   case 4:
//     alert( 'В точку!' );
//   case 5:
//     alert( 'Перебор' );
//   default:
//     alert( "Нет таких значений" );
// }

// let sum = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
//   let result = a + b;
//   return result; // если мы используем фигурные скобки, то нам нужно явно указать "return"
// };

// alert( sum(1, 2) ); // 3


// typeof undefined // "undefined"

// typeof 0 // "number"

// typeof 10n // "bigint"

// typeof true // "boolean"

// typeof "foo" // "string"

// typeof Symbol("id") // "symbol"

// typeof Math // "object"  (1)

// typeof null // "object"  (2)

// typeof alert // "function"  (3)


// let fruits = ["Яблоко", "Апельсин", "Слива"];

// alert( fruits[0] ); // Яблоко
// alert( fruits[1] ); // Апельсин
// alert( fruits[2] ); // Слива


// let family = ["table", "chair", "bed", "picture"];

// for (let counter = 0; counter < family.length; counter++){
//   console.log("interior: " + family[counter]);
// }

// // console.log(family.length);
// // console.log(family[0]);
// // console.log(family[3]);
// // console.log(family[1], family[2], family[3])

// let star = ["*"];
// for (let i = 0; i< 77; i++){
//   console.log("*")
//   console.log("**");
//   console.log("***");
//   console.log("****");
//   console.log("******");
//   console.log("*******");
//   console.log("********");
//   console.log("*********");
//   console.log("**********");
//   console.log("***********");
//   console.log("************");
//   console.log("*************");
//   console.log("**************");
//   console.log("***************");
// }

// let symbol = "*";
// for (let i = 1; i < 25; i++){
//   symbol=symbol+"*"
//   console.log(symbol)
// }
// "use strict";
// console.log(this);
// typeof undefined
// console.log(typeof undefined)
// let arr=[0,1,2,3]
// console.log(arr)

// function hello(name) {
//   let phrase = `Привет, ${name}!`;

//   debugger;  // <-- тут отладчик остановится

//   say(phrase);
// }

// function showPrimes(n) {
//   nextPrime:
//   for (let i = 2; i < n; i++) {

//     // проверяем, является ли i простым числом
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }

//     alert(i);
//   }
// }

/* unction showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);
  }
}
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }

  return true;
} */

// let num = 8
// while (num) {
//   console.log(num);
//   num--;
// }



/* setTimeout(() => {


  alert('Привет');

}, 2000);





let dno =  (arg1, arg2, arg3) => {
  console.log('dno', arg1, arg2+arg3);
}

let satana =  (arg1, arg2, arg3) => {
  console.log('dno', arg1, arg2+arg3);
}

dno(1, 2, 3); */

/* let arr = ["I", "go", "home"];
console.log(arr,length) */

let user = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  alert("Привет!");
};

user.sayHi();

console.log(user)