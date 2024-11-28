// 4 типа декоратора: класса, свойства, метода и акксессора
// Декораторы нужны для логов, откладки и поиска багов


// Класса
const logClass = (constructor: Function):void => {
    console.log(constructor)
};

const logProperty = (target:Object, propertyKey:string|symbol) => {
    console.log(propertyKey)
}

const logMethod = (
    target:Object,
    propertyKey:string|symbol,
    descriptor: PropertyDescriptor,
):void => {
    console.log(propertyKey)
}

const logSet = (
    target:Object,
    propertyKey:string|symbol,
    descriptor: PropertyDescriptor,
):void => {
    console.log(propertyKey)
}

@logClass
class Man {

    // Декоратор свойства
    @logProperty
    secret:number;

    constructor(public name:string, public age:number, secret:number){
        this.secret = secret
    }

    // Декоратор метода
    @logMethod
    public getPass():string{
        return `${this.name}${this.age}`;
    }

    //Декоратор акксессора
    @logSet
    set myAge(age:number){
        this.age = age;
    }
};

// Фабрика декораторов

function factory(value:any){
    return function (target:any){
        console.log(target)
    }
}


const enumerable = (value: boolean) => {
    return (
        target: any,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor
    ) => {
        descriptor.enumerable = value;
    };
}
    
    class Test {
    
        constructor(public name: string, public age: number) {}
    
        @enumerable(false)			// <--- Call decorator factory with argument
        public getPass(): string {
            return `${this.name}${this.age}`;
        }
    
    }


// @f @g x - Несколько декораторов (композиция декораторов)

// Результаты вычисляются последовательно сверху вниз
// Результаты снизу вверх

