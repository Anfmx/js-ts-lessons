//Устарело
// Импорт пространства из другого файла
// /// <reference path="namespacesAndModules.ts" />
// const myNewPass = Utils.PI
// console.log(myNewPass)


// Модули (современное решение)
import { PI, sayHello } from './namespacesAndModules';

const myNewPass = PI;
console.log(myNewPass)

console.log(sayHello())
