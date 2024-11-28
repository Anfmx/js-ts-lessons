// Перегрузка функций
//Сигнатуры функции задают какие комбинации параметров и возвращаемых значений поддерживаются
//Функция
function getCar(name, price) {
    return price ? "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 ".concat(name, ", \u0426\u0435\u043D\u0430 ").concat(price) : "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 ".concat(name);
}
var car1 = getCar('BMW');
var car2 = getCar('BMW', 10000); // Может принимать или не принимать несколько аргументов
console.log("".concat(car1, ", ").concat(car2));
