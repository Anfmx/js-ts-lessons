
const citiesRu = ['Moscow', 'Saint-Petersburg', 'Kazan', 'Novosibirsk'];
const citiesEu = ['Berlin', 'Prague', 'Paris'];

/// Spread

// console.log(...citiesRu)
// console.log(...citiesEu)

// const allCities = [...citiesRu, 'Washington', ...citiesEu]
// const allCities = citiesEu.concat(citiesRu);
// console.log(allCities)

const citiesRuPopulation = {
    Moscow: 20,
    SaintPetersburg: 8,
    Kazan: 5,
    Novosibirsk: 3,
}

const citiesEuPopulation = {
    Berlin: 10,
    Prague: 3,
    Paris: 2,
}

// console.log({...citiesRuPopulation})
// console.log({...citiesRuPopulation, ...citiesEuPopulation})

///Practice

// const nums = [5, 37, 42, 17]
// console.log(Math.max(5, 37, 42, 17))
// console.log(Math.max(...nums))

// const divs = document.querySelectorAll('main > div')
// const nodes = [...divs]
// console.log(divs, Array.isArray(divs))
// console.log(nodes, Array.isArray(nodes))


/// Rest

function sum(a, b, ...rest){
    return a + b + rest.reduce((acc, iter) => acc + iter, 0);
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8]

//Spread!!!

// const a = nums[0]
// const b = nums[1]

// const [a, b, ...other] = nums //Все элементы кроме a, b записываются в массив other

// console.log(a, b, other)

const person = {
    name: 'John',
    age: 25,
    city: 'Moscow',
    country: 'Russia'
}

const {name, age, ...address} = person
console.log(name, age, address)
