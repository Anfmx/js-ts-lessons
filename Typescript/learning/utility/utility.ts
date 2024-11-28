
//Утилиты это просто инструменты использующиеся для упрощения разработки в ts

interface User5 {
    name:string;
    age?:number;
}

// Readonly Только для чтения

const userUtils1:Readonly<User5> = {
    name: 'John'
}

// Required Делает все свойства обязательными
const userUtils2:Required<User5> = {
    name: 'John',
    age: 25
}


//Record - создает тип с набором свойств типа 

interface PageInfo {
    title:string
}

type Page = 'home' | 'about' | 'contact';

const x:Record<Page, PageInfo> = {
    home: {title: 'home'},
    about: {title: 'about'},
    contact: {title: 'contact'},
}

// Pick<T, K> - создает тип выбирая заданное свойство из интерфейса

interface Todo {
    title:string;
    description:string;
    completed:boolean;
}
                        //Только выбранные типы
type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
    //нет description хотя он обязательный
    title: 'Clean room',
    completed: false
}

// Omit - позволяет удалять ненужное свойство у объекта

type TodoPreview2 = Omit<Todo, 'description'>

const todo2: TodoPreview2 = {
    title: 'Clean room',
    completed: false,
}

// Exclude<T, U> - создает тип исключая из него все типы
// которые передаются вторым аргументом

type T0 = Exclude<'a' | 'b' | 'c', 'a'>;
type T1 = Exclude<'a' | 'b', 'a' | 'a'>;
type T2 = Exclude<string | number | (() => void), Function>;


// Extract <T, U> - создает тип оставляя в нем только свойства
// которые передаются вторым аргументом
type T4 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;
type T5 = Extract<string | number | (() => void), Function>;

// NonNullable<T> - выбрасывает из типа все несуществующие типы
type T6 = NonNullable<string | number | undefined>;
type T7 = NonNullable<string[] | null | undefined>;


// ReturnType<T> - создает тип из вовзращаемой функцией типа

declare function f1(): { a: number, b: string };

type T10 = ReturnType<() => string>;// string
type T11 = ReturnType<(s: string) => void>; // void
type T12 = ReturnType<(<T>() => T)>;// {}
type T13 = ReturnType<(<T extends X, X extends number[]>() => T)>;// number[]
type T14 = ReturnType<typeof f1>; // { a: number, b: string }
type T15 = ReturnType<any>; // any
type T16 = ReturnType<never>; // any
// type T17 = ReturnType<string>; // Error
// type T18 = ReturnType<Function>; // Error


// InstanceType<T> - создает тип состоящий из типа экзмпляра
// функции конструктора

class C {
    x = 0;
    y = 0;
}

type T17 = InstanceType<typeof C>;     // C
type T18 = InstanceType<any>;          // any
type T19 = InstanceType<never>;        // any
// type T20 = InstanceType<string>;       // Error
// type T21 = InstanceType<Function>;     // Error