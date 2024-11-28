
function calcValues(a, b){
    return [
        a + b,
        a - b,
        a * b,
        a / b,
    ]
}

// const result = calcValues(42, 10)

// const sum = result[0]
// const sub = result[1]

const [sum, sub = 0, mult, ...other] = calcValues(42, 10);
//sub = 0 знач по умолч

// console.log(sum, mult, other, sub)

const person = {
    name: 'Mike',
    age: 20,
    address: {
        country: 'Russia',
        city: 'Moscow'
    },
}

//const name = person.name
//name: firstName (тоже name но задаем другое имя переменной)
// const {
//     name: firstName = 'No name',
//     age,
//     car = 'None',
//     address: {city: ruCities, country},
// } = person;

// const {name, ...info} = person
// console.log(name, info)

function logPerson({name: firstName = 'None', age}){
    console.log(firstName + ' ' + age);
}
logPerson(person)