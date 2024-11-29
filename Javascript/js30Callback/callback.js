// Callback-функция функция переданная в другую функцию в качестве аргумента
// которая затем вызывается после определенного действия

// function greet(name){
//     console.log('hi' + name)
// }

// function userInput(callback){
//     let name  = console.log('Enter name')
//     callback()
// }
// userInput()

// Функция для передачи в другую функцию (коллбэк)
// function sayHi(){
//     console.log('hi')
// }
//                         // Функция как аргумент
// function executeCallback(callback){
//     callback()  // Вызов переданный функции     То есть здесь sayHi и она вызывается тк стоят ()
// }

// executeCallback(sayHi) // Функция sayHi передается в аргумент



// function greet(name){
//     console.log('hi ' + name + '!')
// }

// function executeCallback2(callback, userName) {
//     callback(userName)      // Вызываем аргумент(переданную в будущем функцию)
//     // в функции вызываем userName которая является аргументом первой функции
// }

// executeCallback2(greet, 'john')



// function delayGreeting(callback){
//     setTimeout(() => {
//         callback('Alice')
//     }, 2000);
// }
// delayGreeting(greet)


// function fetchData(callback){
//     setTimeout(() => {
//         const user = {user: 'test'}
//         callback(user); // Вызываем функцию getData и в ее аргумент передаем объект
//     },3000);
// }

// function getData(data){
//     console.log(data)
// }

// fetchData(getData)


function logBeforeAfter(callback){
    console.log("Before callback")
    callback();
    console.log('After callback')
}

function hw(){
    console.log('Hello world')
}

logBeforeAfter(hw)


function processData(data, callback){
    callback(data.map(num => num*2))    // Вызываем функцию и в ее аргумент передаем результат
}

function printRes(res){
    console.log(res)
}

processData([1, 2, 3, 4], printRes)


function delayedExec(callback, delay){
    setTimeout(callback, delay)
}

function sayHW(){
    console.log('after delay')
}

delayedExec(sayHW, 2000)

//======================//

function filterArr(callback, array){
    callback(array)     // вызывается isEven(тк в isEven аргумент numArr то значение array передается в аргумент numArr функции isEven)
}

function isEven(numArr){
    const res = numArr.filter(num => num % 2 === 0)
    console.log(res)
}
filterArr(isEven, [1, 2, 3, 4, 5, 6])


function transformArray(callback, array){
    return array.map(callback)       // array.map(num => Math.pow(num, 2))
}

function square(num){
    return Math.pow(num, 2)
}

const result = transformArray(square, [2, 4, 5])
console.log(result)

//map implementation

Array.prototype.myMap = function(callback){
    let newArr=[];
    for(let item of this){
        newArr.push(callback(item)) // Значение item передается в аргумент функции (которая потом описывается)
    }
    return newArr;
}

console.log([2, 4, 6].myMap(num => num*2))  //в callback передаем свою функцию
