let isComplete:boolean = false;
const decimal:number = 6;
const fullname:string = 'John'

// void когда функция ничего не возвращает
const greetUser = ():void => {
    alert('Hi')
}
function greetUser2():void {
    console.log()
}

//Массивы с одним типом
let list:number[] = [1, 2, 3]
let list2:Array<number> = [1, 2, 3] //Generic type

//Массивы с задаными типами (Кортеж)
let y: [string, number] = ['hi', 52]

// any - любой тип
let z:[any, any] = ['bye', 42]

// Enum

//Имена для набора численных значений
//Позволяют создать набор именованных числовых констант
//Смесь массива и объекта
// enum Directions {
//     Up = 1, //Имя = индекс
//     Down,
//     Left,
//     Right
// }
// console.log(Directions.Up) // 0


// never
//Функция возвращает ошибку и не заканчивает свое выполнение

function error(msg:string='hello'):never{
    throw new Error(msg)
}

//Функция постоянно выполняется
function infiniteLoop():never{
    while(true){

    }
}
// Т.е результата не получим никогда
// error()

//object (объекты)
const create = (o:object | null):void => { }
create({})


// Type
// Пользовательские типы

type Name = string; // Кастомный тип
let id:Name = '42';
console.log(id)