"use strict";
//Классы и модификаторы
// public - доступна откуда угодно
// private или # - вызывается только внутри класса
// protected - то же что и private, но может вызывать у классов
//которые унаследуют родителя(то есть в дочерних классах)
class Car {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getInfo() {
        return `${this.name} - ${this.price}`;
    }
}
class Bus extends Car {
    constructor(name, price) {
        super(name, price);
    }
    test() {
        return this.getInfo();
    }
}
console.log(new Bus('BMW', 1000).test());
//# sourceMappingURL=class&mod.js.map