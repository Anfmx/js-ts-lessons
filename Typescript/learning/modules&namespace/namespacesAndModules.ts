// Пространства имен

// namespace Utils{
//     export const PI:number = 3.14; // Переменная доступна если она экспортируется (export)
//     const PASS:string = '12345'
// }

// const myPass = Utils.PI //Ошибка при отсутсвии export
// console.log(myPass)


// Модули
//Без импорта в другом файле значение будет существовать только тут
// и не будет засорять глобальную область видимости
export const PI:number = 3.14; 

export const sayHello = ():string => `Hello`;
