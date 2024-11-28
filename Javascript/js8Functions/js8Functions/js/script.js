/*

function showMessage(){
	console.log("Message");
}

showMessage();

function calcSum(numOne = 1, numTwo = 2){
	let numSumm = numOne + numTwo;
	console.log(`Summary: ${numSumm}`)
}

calcSum(5, 5);

//Объявление функции
function calcSumm(numOne, numTwo){
	if (numTwo === 1) {
		return numOne;
	} else{
		return numOne * calcSumm(numOne, numTwo - 1)
	}
}

console.log(calcSumm(2,3));

//Функциональное выражение
let showMessage = function(){
	console.log("Hello");
};

//Стрелочная функция
let getMessage = (text, name) => text + ', ' + name + '!';
console.log(getMessage("Hello", "John"));

function showMessage1(text, name){
	console.log(text + ", " + name + "!");
}

setTimeout(showMessage1, 3000, "Hello", "Mike");


function showNumber(num) {
	console.log(num);
	if(num < 5){
		setTimeout(showNumber, 1000, ++num);
	}
}
setTimeout(showNumber, 1000, 1)

*/

'use strict'

/*
if(2 > 1){
	function showMessage() {
		console.log('Message');
	}
}

console.log(showMessage);*/

/*
function showMessage(){
	console.log("Message")
}
if(2 > 1){
	showMessage();
}
*/
/*
function showMessage(){
	console.log("Message")
}

function check(){
	if(2 > 1){
		showMessage();
	}
}

check();*/

let showMessage;

if(2 > 1){
	showMessage = function(){
		console.log("Message");
	}
}

showMessage();