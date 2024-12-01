// function getMiddle(s) {
// 	return s.slice(Math.round((s.length / 2) - 1 ), (s.length / 2) + 1);
// }
// console.log(getMiddle('midd'))

// function factorial(n){
// 	if(n<0 || n>12){
// 		throw new Error('RangeError')
// 	}
// 	return (n != 0) ? n * factorial(n-1) : 1;
// }
// console.log(factorial(13))

let arr = [1, 2, 3, 4, 4, 5, 5, 6]

let newArr = new Set();
for(let i = 0; i<arr.length;i++){
    newArr.add(arr[i])
}
console.log([...newArr])

Array.prototype.uniqueValue = function() {
    let list = new Set();
    for(let i = 0; i < this.length; i++){
        list.add(this[i]);
    }
    return [...list]
}

console.log([1, 2, 2, 3, 4, 5, 5, 5].uniqueValue())



// function countSheep(sheep){
//     if(sheep === undefined || sheep === null) 0;
//     return sheep.filter(count => count === true).length
// }

// console.log(countSheep([true, false, ]))


// function gooseFilter(birds) {
//     let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     return birds.filter(item => !geese.includes(item))    
// }

// console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))


function firstNonConsecutive (arr) {
    return arr.reduce((acc, current) => {
        if(!(current - acc)){
            return current
        }
    })
}



function gimme (triplet) {
    return triplet.findIndex(item => item < Math.max(...triplet) && item > Math.min(...triplet))
}
console.log(gimme([-1, -5, 10]))


console.log(firstNonConsecutive([1,2,3,4, 7, 8, 9]))



let array = ["a", "b", "a", "c", "a", "d"];
let idx = array.indexOf(element);
console.log(idx)