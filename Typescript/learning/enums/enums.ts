//Имена для набора численных значений
//Позволяют создать набор именованных числовых констант
//Смесь массива и объекта
export enum Directions {
    Up, //Имя = индекс
    Down = 2,
    Left,
    Right
};
// console.log(Directions.Up) // 0
// console.log(Directions[0])  // Up (Reverse enum)

//const enum не генерирует объект
// нужно для оптимизации
const enum Links{
    youtube = 'https://youtube.com',
    vk = 'https://vk.com/',
    facebook = 'https://facebook.com'
}

// Но при обращении к ним только тогда можно получить значения
const arr = [Links.vk, Links.facebook]
console.log(arr)
