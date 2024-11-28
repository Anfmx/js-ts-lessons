//массив

let arr = [
	"John",
	"Mike",
];

//многомерный массив
let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

console.log(arr[0]); //John

let arrTwo = [
	"Mike",
	{
		type: "JS",
		age: 36,
	},
	true,
	function (){
		console.log("Hello there");
	},
];

console.log(arrTwo);
console.log(arrTwo[0]);
console.log(arrTwo[1].type);
arrTwo[3](); //Для функций

console.log(matrix.length); //Длина массива

/*При присвоении новой переменной массив не копируется,
лишь добавляется ссылка на него (т.ж что и с объектами)*/

let arrThr = ["John", "Mike", "Richard"];

console.log(arrThr);

let arrNew = arrThr;

arrNew.length = 2;
console.log(arrThr);


//Изменение значений
let arrFour = ["John", "Mike", "Richard"];
arrFour[0] = "Vlad";
console.log(arrFour);

//Добавление значений
arrFour[3] = "Vita";
console.log(arrFour);

///Методы массива

//push доб элемент в конец массива
let arrFive = ["Ваня", "Влад", "Оля"];
arrFive.push("Вася");
console.log(arrFive);

arrFive.push("Дима", "Катя");
console.log(arrFive);

//shift удаляет элемент вначале так что второй элем. становится первым
arrFive.shift();
console.log(arrFive);

//pop удаляет последний элемент массива
arrFive.pop();
console.log(arrFive);

//unshift добавляет элемент в начало
arrFive.unshift("Игорь");
console.log(arrFive);

///Удаление/Добавление конкретных элементов
//delete
let arrTr = ["Ваня", "Игорь", "Оля"];
delete arrTr[1];
console.log(arrTr);

//Удаление элемента
let arrSix = ["Ваня", "Игорь", "Оля"];
arrSix.splice(1, 1); //(с какого места, кол-во элементов удаления)
console.log(arrSix);

//Возвращение удаленного элемента в переменную
let arrSev = ["Ваня", "Игорь", "Оля"];
let removed = arrSev.splice(1, 1);
console.log(removed);

//Замена элем.
let arrEigh = ["Ваня", "Игорь", "Оля"];
arrEigh.splice(0, 1, "Коля"); //(0 позиция, кол-во заменяемых элементов, новый элемент)
console.log(arrEigh);

//Добавляем элементы
let arrNine = ["Ваня", "Игорь", "Оля"];

arrNine.splice(1, 0, "Коля", "Маша"); /*(начиная с первого, 
0 это добавление, добавляемые элементы...)*/
console.log(arrNine);

///Копирование массива

let arrTen = ["Ваня", "Игорь", "Оля"];
let arrEl = arrTen.slice(1, 2); //начиная с 1-ой до 2-ой (не включая)
console.log(arrEl);

//Копирование всего массива
let arrTwelve = arrTen.slice();
console.log(arrTwelve);

//Метод concat
let arrThirt = ["Ваня", "Игорь", "Оля"];
let arrFourt = arrThirt.concat("Петя");
console.log(arrFourt);

//indexOf и includes

console.log(arrTen.indexOf("Игорь")); //1
console.log(arrTen.indexOf("Вася")); //-1
console.log(arrTen.indexOf("Игорь"), 2); //-1

console.log(arrTen.includes("Игорь")); //true
console.log(arrTen.includes("Игорь"), 2); //false


//Поиск в массиве. find и findIndex
let arrFift = [
	{name: "Вася", age: 36},
	{name: "Коля", age: 18},
	{name: "Оля", age: "Неизвестно"}
];

let resultOne = arrFift.find(function (item, index, array){
	return item.age === 18;
});
/*let resultOne = arrFift.find(item => item.age === 18);*/
console.log(resultOne);//возвращает эелемент

let resultTwo = arrFift.findIndex(item => item.age === 18);
console.log(resultTwo); //возвращает индекс

//filter
let result = arrFift.filter(function(item, index, array){
	return item.age >= 18;
});
console.log(result);

//Сортировка

let arrA = ["Игорь", "Ваня", "Оля"];
console.log(arrA.sort());

let arrB = [8, 22, 1]; /*1, 22, 8 тк это строки и
применяется лексикографический порядок*/
//console.log(arrB.sort());
function compare(a, b){
	console.log(`Сравнение ${a} и ${b}`);
	/*if(a > b) return 1;
	if(a == b) return 0;
	if(a < b) return -1;*/
	return a - b;
}
console.log(arrB.sort(compare));

//Метод reverse
//let arrA = ["Игорь", "Ваня", "Оля"];
console.log(arrA.reverse()); //меняет порядок на обратный

let resultThr = arrA.map(function(item, index, array){
	return item[0];
});
console.log(arrA);
console.log(resultThr);

//Метод split и join

let str = "Ваня, Игорь, Оля";

let arrStr = str.split(", "); //преобразовывает строку в массив
console.log(arrStr);


let arrC = ["Игорь", "Ваня", "Оля"];
let strNew = arrC.join(", "); //Преобразовывает массив в строку
console.log(strNew);

//Массивы основаны на объектах

if (Array.isArray(strNew)){
	console.log("Array");
}else {console.log("Not array");}

//Перебор элементов

let arrFor = ["Игорь", "Ваня", "Оля"];
for (let i = 0; i < arrFor.length; i++){
	console.log(arrFor[i]);
}

for (let arrItem of arrFor){
	console.log(arrItem);
}

//Метод forEach

let arrs = ["Игорь", "Ваня", "Оля"];
arrs.forEach(function(item, index, array){
	console.log(`${item} находится на ${index} позиции в ${array}`);
});

//Метод reduce/reduceRight
let arrRed = [1, 2, 3, 4];
let value = arrRed.reduce(function(previousValue, item, index, array) {
	return item + previousValue;
}, 0);
console.log(value); //10

//ДЗ

let users = ["Ваня", "Игорь"];
users.push("Оля");
users[1] = "Петя";
console.log(users.length);
let valHome = users.splice(0, 1);
console.log(valHome);
users.unshift("Маша", "Паша");
console.log(users);

//

let strHome = "Ваня,Игорь,Оля";
let arrsg = strHome.split(",");

console.log(arrsg);

let arrNum = [9, 2, 8];
let reduceValue = arrNum.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
})