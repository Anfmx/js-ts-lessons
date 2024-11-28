
let someNum = 458;
console.log(someNum);

let someNums = 4.58;
console.log(someNums);


let someBigNum = 1e6; // 1 * 1000000 (число затем сколько нулей)
console.log(someBigNum);

let someLittleNum = 1e-6; //1 / 1000000
console.log(someLittleNum);

let numOne = Math.floor(5.8); // округление до меньшего
console.log(numOne); // 5

let numTwo = Math.ceil(2.2); //округляет до большего
console.log(numTwo); // 3

let numThr = Math.round(3.5); //округляет до ближайшего (по пр математики)
console.log(numThr); // 4

//Способ 1 округления до десятых сотых тысячных и тд

let numAnthOne = Math.round(5.845 * 10) / 10; // 58.45 -> 58 -> 5.8
console.log(numAnthOne); //5.8

let numAnthTwo = Math.round(5.845 * 100) / 100; // 584.5 -> 585 -> 5.85
console.log(numAnthTwo); //5.85

let numAnthThr = Math.round(5.8449 * 100) / 100; // 584.5 -> 585 -> 5.85
console.log(numAnthThr); //5.85

//Способ 2 округления

let numFour = 5.845;
console.log(numFour.toFixed(1)); //колво знаков после запятой (это будет строкой)
console.log(+numFour.toFixed(1)); //уже число из-за унарного оператора


console.log(0.1+0.2); //Проблема неточных вычислений (0.1 + 0.2 не будет равно 0.3)

if(0.1 + 0.2 === 0.3){
	console.log(true);
} else{
	console.log(false);
} //будет false

//Решение

let sourceNum = 1.005 + Number.EPSILON; //прибавляем очень маленькое число
let numFive = Math.round(sourceNum*100) / 100;
console.log(numFive);

//Проверки

console.log(Number(25 + "Hello")); //NaN

console.log(isNaN(25 + "Hello")); //True

console.log(NaN === NaN); //False (NaN никогда не равно NaN тк это уникальное значение)

//Проверка на конечность и бесконечность
console.log(isFinite("25")); //true
console.log(isFinite("Hello")); //false
console.log(isFinite(10 / 0)); //false


//возвращение чисел

let valueOne = parseInt("150.58px");
console.log(valueOne); //целое

let valueTwo = parseFloat("150.58px");
console.log(valueTwo); //дробное

//Функции Math

console.log(Math.random()); //выводит псевдослучайное число от 0 до 1

console.log(Math.max(9, -45, 34)); //выводит наиб значение
console.log(Math.min(9, -45, 34)); //выводит наим значение

console.log(Math.abs(-58)); //модуль числа

console.log(Math.pow(2, 4)); //2^4

//ДЗ

let homeNum = 1.005 + Number.EPSILON;
let result = Math.round(homeNum * 100) / 100;
console.log(result);


let value = "135.58px";
console.log(parseFloat(value));


let valueHome = 58 + "Hello";
if(isNaN(valueHome)){
	console.log("Result is NaN");
}


console.log(Math.max(10, 58, 39, -150, 0));


console.log(Math.floor(58.858));