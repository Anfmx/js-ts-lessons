
const people = [
	{name: 'John', age: 20, budget: 25000},
	{name: 'Adam', age: 17, budget: 5000},
	{name: 'Mike', age: 25, budget: 42000},
];

// for(let i = 0; i< people.length; i++){
// 	console.log(people[i]);
// } //ES5

// for(let key of people){
// 	console.log(key)
// } //ES6

//forEach

// people.forEach(person => console.log(person));


//Map

// const newPeople = people.map(person => person.age * 3);
// console.log(newPeople);


//Filter

// const adults = []
// for(let i = 0; i < people.length; i++){
// 	if(people[i].age >= 18){
// 		adults.push(people[i])
// 	}
// }
// console.log(adults)

// const adults = people.filter(person => person.age>=18);
// console.log(adults)


//Reduce

// let amount = 0;
// for (let i = 0; i < people.length; i++) {
// 	amount += people[i].budget
// }
// console.log(amount);


// const amount = people.reduce((total, currentValue) => total + currentValue.budget, 0);

// console.log(amount);

//Find

// const mike = people.find(person => person.name === 'Mike');
// console.log(mike);


// //findIndex

// const mikeIndex = people.findIndex(person => person.name === 'Mike');
// console.log(mikeIndex);


// =========

const newPeople = people
	.filter(person => person.budget > 20000)
	.map(person => {
		return {
			info: `${person.name} (${person.age})`,
			budget: person.budget,
		}
	})
	.reduce((total, person) => total + person.budget, 0);



console.log(newPeople);