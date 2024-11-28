
let textHi = "Hello!";
let textAll = `${textHi} John`;
console.log(textAll);

function someSum(a, b){
	return a + b;
}
console.log(`Summary: ${someSum(4, 7)}`);

let text = `Hello
There
you are`;
console.log(text); //Многострочный текст

let textOne = "Hello!\nThere you\nAre"; //Символ экранирования
console.log(textOne);

let textTwo = "Hello!\n\tThere you\n\t\tAre"; //Символ табуляции
console.log(textTwo);

console.log("Hello! Welcome \\ to home"); //чтобы вывести обратный слеш надо записать его 2 раза

console.log("A cup of \"Latte\" please"); //чтобы написать кавычки в строке

console.log("Work and live! \u{1F60D}"); //можно вставлять utf символы

///Работа со строками

console.log("Hello".length); //Свойство length

let textThr = "Hello!";
let firstSymbol = textThr[0];
let lastSymbol = textThr[textThr.length - 1];
console.log(firstSymbol);
console.log(lastSymbol);

for (const char of textThr){
	console.log(char);
}


let textFour = "Hello!";
console.log(textFour.toUpperCase()); //верхний регистр
console.log(textFour.toLowerCase()); //нижний регистр

//поиск подстроки

let textFive = "Hello!";
console.log(textFive.indexOf("el")); //находит начиная с первой позиции
console.log(textFive.indexOf("el", 3)); //-1 совпадений нет

//Способ Includes
console.log(textFive.includes("el")); //true
console.log(textFive.includes("el", 3)); //false

console.log(textFive.startsWith("el")); //false
console.log(textFive.endsWith("!")); //true

//Регистр имеет значение

let textCheck = "Hello!"
let searchText = "hE";

console.log(textCheck.toLowerCase().includes(searchText.toLowerCase())); //true тк все символы приведены в ниж регистр иначе false

//Получение подстроки

let textHel = "Hello!";
console.log(text.slice(1, 2)); //от и до (не включая)
console.log(text.slice(-2, -1));
console.log(text.slice(1));

//Сравнение строк
console.log("А" > "Б"); // false тк Б позже чем А
console.log("а" > "Б"); // true тк нижний регистр больше верхнего

//ДЗ

let textHome = "фрилансер";
console.log(textHome[5]);
console.log(textHome.slice(3, 6));
console.log(textHome.includes('лан', 4)); //false
