"use strict";
//Устарело
// Импорт пространства из другого файла
// /// <reference path="namespacesAndModules.ts" />
// const myNewPass = Utils.PI
// console.log(myNewPass)
Object.defineProperty(exports, "__esModule", { value: true });
// Модули (современное решение)
var namespacesAndModules_1 = require("./namespacesAndModules");
var myNewPass = namespacesAndModules_1.PI;
console.log(myNewPass);
