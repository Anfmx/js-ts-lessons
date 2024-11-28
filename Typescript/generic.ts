// Generic (дженерики)
// когда не знаем какой тип будет приниматся или несколько типов
function entity<T>(args: T):T{
    return args
}
entity<number>(1)
entity<string>('1')

class Channel<T>{
    private name: T

    constructor(name:T){
        this.name = name
    }
    getName():T{
        return this.name
    }
}
console.log(new Channel<string>('Red group').getName())
new Channel<number>(25)

// Дженерики в стрелочных функциях
const entity2 = <T>(args:T):T => {
    return args
}
// В интерфейсах

interface IPair<K, V>{
    key: K,
    value: V,
}

const pair1:IPair<string, number> = {
    key: 'qwe',
    value: 23
}

type TypeLength = {
    length: number
}

function getNameLength<T extends TypeLength>(entity:T):number{
    return entity.length;
}

getNameLength('sdafsd')
getNameLength([0, 1, 2])