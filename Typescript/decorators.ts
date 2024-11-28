// Декораторы

function logClass(constructor: Function){
    console.log(constructor.name)
}

function logMethod(target:object, key:string, descriptor:PropertyDescriptor){
    console.log(key)
}

@logClass
class Plane {
    private id:number
    constructor(id:number){
        this.id = id
    }
    @logMethod
    getId(){
        return this.id
    }
}