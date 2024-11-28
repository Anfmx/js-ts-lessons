"use strict";
//Assetrions (утверждения)
// Принудительное присвоение типа
// const inputElem = document.querySelector('input')
// const value1 = (inputElem as HTMLInputElement).value //1 Вариант
// const value2 = (<HTMLInputElement>inputElem).value //2 Вариант
// ! - позволяет указать что возвращаемый тип не null или undefined
const getLength = (text) => {
    return text.length;
};
// console.log(getLength(null)) // Ошибка
console.log(getLength('Hello'));
//# sourceMappingURL=assertions.js.map