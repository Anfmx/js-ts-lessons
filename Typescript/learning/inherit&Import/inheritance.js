var UserClassInherit = /** @class */ (function () {
    function UserClassInherit(name, age) {
        this.name = name;
        this.age = age;
    }
    UserClassInherit.prototype.getPass = function () {
        return "".concat(this.name).concat(UserClassInherit.secret);
    };
    UserClassInherit.secret = 12345;
    return UserClassInherit;
}());
var john = new UserClassInherit('John', 32);
console.log(john.getPass());
