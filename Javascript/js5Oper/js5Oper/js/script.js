
let resultTwo = "XD " + 58;
console.log(resultTwo, typeof resultTwo);

let resultThr = "1" + 1;	//Главный мем JS
console.log(resultThr, typeof resultThr);

let resultFr = "25";
let resultFrInfo = +resultFr; //число а не строка
console.log(resultFrInfo, typeof resultFrInfo);
/*
let users = 5;
users += 3;		Сокращенная сумма
console.log(users);
*/
let admins = 10;
let users = 5;
admins > users || users++;
console.log(users);

let name = null;
console.log(name ?? "Noname"); //вернет первый аргумент если он не null//undefined

let usersCounter = 0;
let newUsers = ++usersCounter; //префиксная запись (писать при присвоении или если надо что-то сравнить)
//userCounter++					//постфиксная запись
console.log(newUsers);

console.log(!false && 11 || 18 && !'');
console.log(true && 11);
console.log(18 && !false);

let name1 = 0;
console.log(name1 ?? "Noname");