// Позволяет описать форму объекта
// Именованый тип объета
// Может наследоваться и расширяться
// Не входящие в интерфейс свойства при попытке добавить их в объект вызывают ошибку
interface IUser {
    readonly name:string,   // Только для чтения
    age:number,
    job?:string,    // Опциональный тип
}

interface Pass {
    getPass():string;
}
// Расширение интерфейса
interface Admins extends IUser {
    getAccess(): string,
}

const mikeInterface:IUser = {
    name: 'Mike',
    age: 31,
}
console.log(mikeInterface)


// Интерфейсы могут описывать классы

// Суть интерфейса в классе что нужно реализовать минимальный набор 
//параметров, остальные могут быть добавлены
// Можно объединить несколько интерфейсов
class Mike implements IUser, Pass {
    name:string = 'Mike';
    age:number = 31;
    nickName:string = 'webDev'
    getPass():string {
        return `${this.name}${this.age}`
    }
}

class JohnClass implements Admins {
    name:string = 'Mike';
    age:number = 31;
    nickName:string = 'webDev'
    getPass():string {
        return `${this.name}${this.age}`
    }
    getAccess(): string {
        return ``
    }
}

const mike3 = new Mike()
console.log(mike3.getPass())



interface UserList {
    id:string,
    name:string,
    email:string,
    age?:number
}

class UserManager{
    private arr:UserList[] = []
    public addUser(user:UserList):void{
        this.arr.push(user)
    }
    public removeUserById(id:string):void{
        this.arr = this.arr.filter(obj => obj.id !== id)
    }
    public getUserById(id:string):UserList | undefined{
        const user = this.arr.find(obj => obj.id === id)
        return user;
    }
    public getAllUsers():UserList[]{
        return this.arr;
    }
}