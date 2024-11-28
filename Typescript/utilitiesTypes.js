"use strict";
// // Взяли все кроме id
// interface ICarUpdate extends Omit<ICar, 'id'>{} 
// // Взяли только id
// interface ICarId extends Pick<ICar, 'id'>{} 
// // Делает все свойства необязательными
// interface IOptionalCar extends Partial<ICar>{} 
// // Делает поля доступными только для чтения
// interface IReadOnlyCar extends Readonly<ICar>{} 
// //Record
// // Для создание своего типа
// type TypeCarRecord = Record<'name' | 'price', string | number>
// // Делает все поля обязательными
// interface ICarRequired extends Required<ICar>{} 
// type TypeGetName = () => string
// //  Какой тип вовзращает эта функция
// type Return = ReturnType<TypeGetName>
// // Возвращает только то что совпадает
// type Any = Extract<'mike' | 'john', 'mike' | 'william'>
// // Исключает по первому параметру
// type Any = Exclude<'mike' | 'john', 'mike' | 'william'>
// type NotNull = NonNullable<string | number | null | undefined>
// const car:ICarRequired = {
//     name: 23
// }
//# sourceMappingURL=utilitiesTypes.js.map