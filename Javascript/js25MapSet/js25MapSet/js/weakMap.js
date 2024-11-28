

// Ключи в weakMap только объекты (примитивы не могут быть ключами в weakMap)
// недоступны многие методы объектов и переборы
// присутсвуют только следующие методы
// get(key), set(key, value), delete(key), has(key)

let obj = {name: 'weakmap'}

// const arr = [obj];

// obj = null

// console.log(arr[0])

const map = new WeakMap([
    [obj, 'obj data']
])

map.set({name:'weak'}, 'weak data')
// get set delete has
console.log(map.get(obj))
obj = null;

//=====================

const cache = new WeakMap()

function cacheUser(user){
    if(!cache.has(user)){
        cache.set(user, Date.now())
    }
    return cache.get(user)
}

let john = {name: 'John'}
let mike = {name: 'Mike'}

cacheUser(john)
cacheUser(mike)

mike = null;

console.log(cache.has(john))
console.log(cache.has(mike))