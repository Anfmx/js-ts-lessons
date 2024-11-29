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
