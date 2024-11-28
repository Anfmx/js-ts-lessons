

//let num = 0;
/*
while(num < 5) {
	console.log(num);
	num++;
}
*/
/*
do {
	console.log(num);
	num++;
} while (num < 5);
*/
/*
for (let num = 0; num < 5; num++) {
	console.log(num);
}*/
/*
for (; num < 5; num++) {
	console.log(num);
	if (num == 2) break;
}
console.log(`Work has ended, num = ${num}`);
*/
/*
for (; num < 5; num++){
	if (num == 2) continue;
	console.log(num);
}
*/

//let num = 1;
/*
for(num = 1; num <=5; num++){
	console.log(num);
}*/
/*
while(num <= 5){
	console.log(num);
	num++;
}*/
/*
do {
	console.log(num);
	num++;
} while (num <= 5);*/
/*
let num = 8;
while(num) {
	console.log(num);
	num--;
}*/
/*
for (let num = 0; num < 3; num++){
	console.log(`Number: ${num}`);
}*/
/*
let num = 0;
while (num < 3){
	console.log(`Number: ${num}`);
	num++
}*/

breakPoint: for (let num = 0; num < 2; num++){
	for(let size = 0; size < 3; size++){
		if (size == 1){
			break breakPoint;
		}
		console.log(size);
	}
}