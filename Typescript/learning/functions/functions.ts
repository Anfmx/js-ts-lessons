
//Тип объединения - |
const createPassword = (username:string = 'Max', age:number | string = 0) => `${username} ${age}`;
console.log(createPassword('Jack', '31'))


// Опциональный аргумент ?
// age?:number
const createPasswordAnother = (username:string, age?:number) => `${username}, ${age}`;
console.log(createPasswordAnother('Mike'))


// Пример с REST
const createSkills = (name:string, ...skills:string[]):string => {
    return  `${name}, my skills is: ${skills}`
}
console.log(createSkills('Mike', 'TS', 'JS', 'Linux'))
const array:string[] = ['dfsd', 'sdfsdf', 'ohjohohjhoj']


// Function variable type
// обычно подобное это legacy код
// let myFunc;
function oldFunc(name:string):void{
    console.log(`Hello ${name}`)
}

// Describe function type
// Описание функции которая будет присвоена в эту переменную
let myFunc: (firstArg:string) => void;

myFunc = oldFunc;
myFunc('John')


import { Directions } from "./enums";
const newUp = Directions;
console.log(Directions.Up)