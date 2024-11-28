class User {
    public nameClass:string; //Стоит по дефолту, к этому свойству или методу
    //можно получить доступ откуда угодно

    private ageClass:number; //Доступен только в данном классе(не доступен в наследниках)
    protected nickNameClass:string; //Доступен только в данном классе и наследники
    readonly pass:number; // Только для чтения
    constructor(nameClass:string, ageClass:number, nickNameClass:string, pass:number){
        this.nameClass = nameClass;
        this.ageClass = ageClass;
        this.nickNameClass = nickNameClass;
        this.pass = pass;
    }
}

class Admin {
    constructor(
        public name: string,
        public age: number,
        public nick: string,
        public pass: number
    ){} // Сокращенная форма без свойств и this
}

class PersonClass {
    private age:number = 20;

    constructor(public name:string){}

    //Изменять приватное свойство можно не только через set но и через методы
    setAge(age:number){
        this.age = age
    }
    set myAge(age:number){
        this.age = age
    }
}

const person = new PersonClass('John')
person.setAge(25) //Метод
person.myAge = 37; //Сеттер (свойство)

console.log(person)

const newUser = new User('Mike', 31, 'webDev', 123)
console.log(newUser)