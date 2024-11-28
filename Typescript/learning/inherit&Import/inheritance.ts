
class UserClassInherit{
    static secret = 12345;
    private nickName:string = 'webDev';
    constructor(public username:string, public age:number){}

    getPass():string {
        return `${this.username}${UserClassInherit.secret}`;
    }
}
const mike = new UserClassInherit('Mike', 32);
console.log(mike.getPass());


class John extends UserClassInherit {
    constructor(age:number){
        super('john', age);
    }
}
const john5 = new John(32)
console.log(john5.username)


// Абстрактные классы

// 1. Невозможно создать экземпляр
// 2. Типо интерфейс который описывает как должны выглядеть потомки

abstract class Guest {
    constructor(public name:string, public age:number){}
    greet():void {
        console.log(this.name)
    }
    abstract getPass():string; //Реализация метода в потомке обязательна тк стоит abstract
}

class Stranger extends Guest{
    name:string = 'Unknown'
    constructor(age:number){
        super('Unknown', age)
    }
    getPass():string{
        return`${this.age}${this.name}`
    }
}
const guest = new Stranger(25);
console.log(guest.getPass())
