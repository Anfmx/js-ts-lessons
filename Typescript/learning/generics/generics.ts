// Динамически манипулирует типами

// Стрелочная функция
const getter = <T>(data: T):T => data

// Декларирование функции
function getter2<T>(data:T):T {
    return data
}

// getter(10).length   // Property 'length' does not exist
getter('test').length


// Можно контролировать какой тип данных будет в <>
getter<string>('test2')


// В классах
// <T, K> означает что аргументы могут быть как разных типов так и одного
// Если один из аргументов должен быть только одним типом то после дженерика пишется extends и тип
class Liam<T, K extends number> {
    constructor(public name:T, public age:K){}
    public getPass():string {
        return `${this.name}${this.age}`
    }
    public getSec():number {
        return this.age**2;
    }
}

// const liam = new Liam('test3', '25')
const max = new Liam(123, 321)
const william = new Liam('tests12345', 321)


class Stack<T>{
    constructor(public arr:T[] = []){}
    public push(input:T):void{
        this.arr.push(input);
    }
    public peek():T | undefined{
        return this.arr[this.arr.length - 1]
    }
    public pop():T | undefined {
        return this.arr.pop();
    }
    public isEmpty():boolean {
        return this.arr.length === 0
    }
}

let checks = new Stack()

checks.push(32)
console.log(checks.peek())
console.log(checks.pop())
console.log(checks.isEmpty())