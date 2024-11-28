
//Функция генератор

// function* strGenerator(){
// 	yield 'H'
// 	yield 'E'
// 	yield 'L'
// 	yield 'L'
// 	yield 'O'
// }

// const str = strGenerator()

// function* numberGen(n = 10){
// 	for(let i = 0; i < n; i++){
// 		yield i; //Порционное получение значений с помощью генераторов
// 	}
// }
// const num = numberGen(7); // Порционно доходит до 6 несмотря на цикл


// const iterator = {
// 	[Symbol.iterator]: function(n = 10){
// 		let i = 0;
// 		return {
// 			next(){
// 				if (i < n){
// 					return {value:++i, done: false}
// 				}
// 				return {value: undefined, done: true}
// 			}
// 		}
// 	},
// }


function* iter(n = 10){
	for(let i = 0; i < n; i++){
		yield i;
	}
}

for(let k of iter(7)){
	console.log(k);
}
