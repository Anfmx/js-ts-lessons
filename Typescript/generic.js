"use strict";
// Generic (дженерики)
// когда не знаем какой тип будет приниматся или несколько типов
function entity(args) {
    return args;
}
entity(1);
entity('1');
class Channel {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
console.log(new Channel('Red group').getName());
new Channel(25);
// Дженерики в стрелочных функциях
const entity2 = (args) => {
    return args;
};
const pair1 = {
    key: 'qwe',
    value: 23
};
function getNameLength(entity) {
    return entity.length;
}
getNameLength('sdafsd');
getNameLength([0, 1, 2]);
//# sourceMappingURL=generic.js.map