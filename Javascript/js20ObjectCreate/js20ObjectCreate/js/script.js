
const person = Object.create({
	calculateAge(){ //Прототип объекта
		console.log('Age:', new Date().getFullYear() - this.birthYear)
	}
}, {
	name: {
		value: 'Mike',
		enumerable: true, //Возможность возвращать поле
		writable: true, //Возможность изменить поле
		configurable: true //Возможность удалять ключ у объекта
	},
	birthYear: {
		value: 1998,
		enumerable: true,
		configurable: false
	},
	age: {
		get(){
			return new Date().getFullYear() - this.birthYear;
		},
		set(value){
			document.body.style.background = 'red'
			console.log('Set age', value)
		} 
	}
})

// person.name= 'John'
// person.birthYear= 2000

delete person.birthYear;

for(let key in person){
	if(person.hasOwnProperty(key)){
		console.log('Key', key, person[key]);
	}
	
}

person.calculateAge