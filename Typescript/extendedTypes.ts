// Расширенные типы

type TypeIsNumber<T> = T extends number ? 'yes' : 'no';
type Type1 = TypeIsNumber<number>


type TypeBrand = 'bmw' | 'mclaren' | 'merc'
type TypePrice = '15000' | '40000' | '20000'

type TypeCar = `${TypeBrand} ${TypePrice}`
const car3:TypeCar = 'bmw 20000'