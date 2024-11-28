//Прототипы
/*
const person = new Object({
	name: 'Maxim',
	age: 25,
	greet: function(){
		console.log('Greet');
	},
})

Object.prototype.sayHello = function(){
	console.log('Hello!');
}


const lena = Object.create(person);
lena.name = 'Elena';

const str =  new String('I am string');


let animal = {
	eats: true,
}

let rabbit = {
	jump: true,
}

rabbit.__proto__ = animal;
*/

//this

function hello(){
	console.log('Hello', this);
}

const person = {
	name: 'Mike',
	age: 25,
	sayHello: hello,
	sayHelloWindow: hello.bind(document),
	logInfo: function(job, phone){
		console.group(`${this.name} info:`)
		console.log(`Name is ${this.name}`);
		console.log(`Age is ${this.age}`);
		console.log(`Job is ${job}`)
		console.log(`Phone is ${phone}`)
		console.groupEnd()
	}
}

const lena = {
	name: 'Elena',
	age: 23,
}

//const fnLenaInfoLog = person.logInfo.bind(lena)
//person.logInfo.call(lena, 'Front', '2323423423')

person.logInfo.apply(lena, ['Front', '423234243324']);

///===========

const array = [1, 2, 3, 4, 5]

Array.prototype.multBy = function(n){
	return this.map(function(i){
		return i * n;
	})
}

console.log(array.multBy(3));