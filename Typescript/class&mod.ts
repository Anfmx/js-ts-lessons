//Классы и модификаторы

// public - доступна откуда угодно

// private или # - вызывается только внутри класса

// protected - то же что и private, но может вызывать у классов
//которые унаследуют родителя(то есть в дочерних классах)

class Car{
    name: string
    price: number

    constructor(name:string, price:number){
        this.name = name
        this.price = price
    }
    protected getInfo():string{
        return `${this.name} - ${this.price}`
    }
    // anything(){
    //     return this.getInfo()
    // }
}

class Bus extends Car{
    constructor(name:string, price:number){
        super(name, price)
    }
    test(){
        return this.getInfo()
    }
}

console.log(new Bus('BMW', 1000).test())
