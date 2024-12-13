// // function getMiddle(s) {
// // 	return s.slice(Math.round((s.length / 2) - 1 ), (s.length / 2) + 1);
// // }
// // console.log(getMiddle('midd'))

// // function factorial(n){
// // 	if(n<0 || n>12){
// // 		throw new Error('RangeError')
// // 	}
// // 	return (n != 0) ? n * factorial(n-1) : 1;
// // }
// // console.log(factorial(13))

// let arr = [1, 2, 3, 4, 4, 5, 5, 6]

// let newArr = new Set();
// for(let i = 0; i<arr.length;i++){
//     newArr.add(arr[i])
// }
// console.log([...newArr])

// Array.prototype.uniqueValue = function() {
//     let list = new Set();
//     for(let i = 0; i < this.length; i++){
//         list.add(this[i]);
//     }
//     return [...list]
// }

// console.log([1, 2, 2, 3, 4, 5, 5, 5].uniqueValue())

// // function countSheep(sheep){
// //     if(sheep === undefined || sheep === null) 0;
// //     return sheep.filter(count => count === true).length
// // }

// // console.log(countSheep([true, false, ]))

// // function gooseFilter(birds) {
// //     let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
// //     return birds.filter(item => !geese.includes(item))
// // }

// // console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))

// function firstNonConsecutive (arr) {
//     return arr.reduce((acc, current) => {
//         if(!(current - acc)){
//             return current
//         }
//     })
// }

// function gimme (triplet) {
//     return triplet.findIndex(item => item < Math.max(...triplet) && item > Math.min(...triplet))
// }
// console.log(gimme([-1, -5, 10]))

// console.log(firstNonConsecutive([1,2,3,4, 7, 8, 9]))

// function isUnique(str){
//     str = str.split('').sort().join('')
//     for(let i = 0; i < str.length - 1; i++){
//         if(str[i] === str[i+1]){
//             return false;
//         }
//     }
//     return true
// }
// console.log(isUnique('123'))

// strTest = 'world'
// console.log(strTest[0]) // Элемент строки можно получать также как из массива

// function reverseString(str){
//     let newStr = ''
//     for(let i = str.length - 1; i >= 0; --i){
//         newStr += str[i]
//     }
//     return newStr;
// }
// console.log(reverseString('hello'))

// function firstUniqChar(str) {
//     let countMap = new Map();

//     for (let i = 0; i < str.length; i++) {
//         if (countMap.has(str[i])) {
//             countMap.set(str[i], countMap.get(str[i]) + 1); // Увеличиваем счетчик
//         } else {
//             countMap.set(str[i], 1);
//         }
//     }
//     console.log(countMap)
//     for (let i = 0; i < str.length; i++) {
//         if (countMap.get(str[i]) === 1) {
//             return str[i]; // Возвращаем первый уникальный символ
//         }
//     }

//     return -1; // Если нет уникальных символов
// }
// console.log(firstUniqChar('swiss'))

// let testObject = {
//     'a': 3,
//     'b': 4
// }
// console.log(testObject['a'])

// function isValid(s) {
//     let stack = [];
//     let map = { '(': ')', '{': '}', '[': ']' };
//     console.log(map['('])
//     for (let char of s) {
//         if (map[char]) {
//             // Если это открывающая скобка, добавляем в стек
//             stack.push(char);
//         } else {
//             // Если это закрывающая скобка, проверяем, что она соответствует последней открытой
//             if (stack.length === 0 || map[stack.pop()] !== char) {
//                 return false;
//             }
//         }
//     }

//     // Если стек пуст, все скобки сбалансированы
//     return stack.length === 0;
// }
// console.log(isValid('([)]'))

// var isAnagram = function(test, original) {
//     const normalize = (str) => str.toLowerCase().split('').sort().join('');
//     return normalize(test) === normalize(original);
// };

// console.log(isAnagram('foefet', 'toffee'))

// function binToDec(bin) {
//     let binArr = bin.split('').map(elem => Number(elem))
//     console.log
//     let newArr = [];
//     for(let i = 0; i < binArr.length; i++){
//         newArr.push(binArr[i] * Math.pow(2, binArr.length - i - 1))
//     }
//     console.log(newArr)
//     return newArr.reduce((acc, current) => acc + current)
// }
// console.log(binToDec('1001001'))

console.log([2, 4, 6, [5], [[6]]].flat());

Array.prototype.myFlat = function (depth = 1) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    Array.isArray(this[i]) && depth > 0
      ? newArr.push(...this[i].myFlat(depth - 1))
      : newArr.push(this[i]);
  }
  return newArr;
};

console.log([2, 4, 6, [5], [[6]], 8, 9].myFlat(3));
