// function updateLight(current) {
//     let newArr = ['green', 'yellow', 'red'];
//     let color = (newArr.indexOf(current) + 1) % newArr.length;
//     return newArr[color]
// }
// console.log(updateLight('red'))

// function solution(str, ending){
//     let arr = str.split('');
//     let status = (str.indexOf(ending))
//     return status + 1 == arr.length
// }

// console.log(solution('abc', 'c'))

function twoSort(s) {
    let newArr = [];
    s.sort()[0].split('').forEach(elem => {
        newArr.push(elem + '***')
    });
    return newArr.join('').slice(0, -3);
}

console.log(twoSort(['bitcoin']))

function roundToNext5(n){
    (n < 0) ? n % 5 === 0 : -(--n - (-n % 5))
    return n % 5 === 0 ? n : n + (5 - (n % 5)) 
}
console.log(roundToNext5(-121))