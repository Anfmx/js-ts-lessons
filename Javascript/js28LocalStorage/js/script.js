
const myNum = 42;


// localStorage.removeItem('number')
// console.log(localStorage.getItem('number'))

// localStorage.setItem('number', myNum.toString())
// console.log(localStorage.getItem('number'))

// localStorage.clear()


const obj = {
    name: 'Mike',
    age: 20,
}

localStorage.setItem('person', JSON.stringify(obj))
//превращает объект в строку т.е json
const raw = localStorage.getItem('person')
const person = JSON.parse(raw)
person.name = 'John'
console.log(person)

/// ==============

window.addEventListener('storage', event => {
    console.log(event)
})
// window.onstorage = () => {}