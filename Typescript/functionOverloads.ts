// Перегрузка функций

function getCar(name:string):string
function getCar(name:string, price:number):string   //Сигнатуры функции
//Сигнатуры функции задают какие комбинации параметров и возвращаемых значений поддерживаются

//Функция
function getCar(name:string, price?:number):string{     // ? - означает что данный параметр может принять что-то а может и не принять(быть проигнорирован)
    return price ? `Название ${name}, Цена ${price}` : `Название ${name}`
}

const car1 = getCar('BMW')
const car2 = getCar('BMW', 10000) // Может принимать или не принимать несколько аргументов
console.log(`${car1}, ${car2}`);