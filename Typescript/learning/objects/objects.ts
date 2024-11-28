//Кастомный тип
type Person = {
    name:string,
    age:number,
    nickName?:string, // ? - для опциональности
    getPass?: () => string | undefined // ? - для опциональности
}

let user:Person = {
    name: 'Mike',
    age: 30,
    nickName: 'webDev',
}

let admin:Person = {
    name: 'John',
    age: 25,
    getPass() {
        return `${this.name}, age is ${this.age}`
    },
}

console.log(admin.getPass?.()) // ?. - Вызывает метод если он существует

let newList:number[] = [1, 2, 3]