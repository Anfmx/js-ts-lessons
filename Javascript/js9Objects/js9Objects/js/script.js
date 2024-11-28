/*
let userInfo = {
	name: "John",
	age:30,
};


let firstPart = "likes";
let userInfo = {
	name: "Mike",
	age: 30,
	[firstPart + " javascript"]: true,
};

console.log(userInfo["likes javascript"]);*

let id = Symbol("id");
let userInfo = {
	name: "Mike",
	age: 30,
	[id]: "Something",
}
console.log(userInfo);*/
/*
let userInfo = {
	name: "John",
	age: 30,
	adress: {
		city: "London",
		street:"Baker st. 221b"
	},

};

console.log(userInfo);

console.log(userInfo.adress.city);

function makeUserInfo(name, age) {
	return{
		name, //name: name,
		age,  //age: age,
	};
}
let user = makeUserInfo("John", 30);
console.log(user);*/


/*
let userInfo = {
	name: "Mike",
	adress: "Freedom st"
};

userInfo.age = 30; //добавление свойства
userInfo.adress = "Baker st"; //переопределение свойства
delete userInfo.name; //удаление свойства

console.log(userInfo);*/



//Object.assign
/*
let userInfo = {
	name: "John",
	age:30,
};

let user = Object.assign({}, userInfo);

user.age = 18;

console.log(userInfo);
console.log(user);
При приравнивании объекта к новой переменной он не дублируется а лишь меняется ссылка
для дубликата необходимо использовать Object.assign*/

/*
let userInfo = {
	name: "Mike",
	age: 30,
	adress: {
		city: "London",
		street: "Baker",
	}
};

 Проверка №1
if(userInfo.age){
	console.log(userInfo.age);
} 

//console.log(userInfo?.adress?.street); Проверка №2

if ("name" in userInfo){
	console.log(userInfo.name);
}*/



/*
let userInfo = {
	name: undefined,
}


if(userInfo.name){ //False
	console.log(userInfo.name);
}

if("name" in userInfo){ //True
	console.log(userInfo.name);
}*/

/*
let userInfo = {
	name: "John",
	age: 30,
	address: {
		city: "London",
		street:"Baker st. 221b"
	},

};


for(let key in userInfo){ //перебор ключей и их значений
	console.log(key, userInfo[key]);
}

/*
let userInfo = {
	name: "John",
	age: 30,
	address: {
		city: "London",
		street:"Baker st. 221b"
	},
	showinfo() {
		//console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г. ${userInfo.address.city}, улица ${userInfo.address.street}`);
		console.log(`${this.name}, ${this.age} лет. Адрес: г. ${this.address.city}, улица ${this.address.street}`);
	},
};

userInfo.showinfo();*/


//Функция-конструктор
/*
function UserInfo(name){
	this.name = name;
	this.age = 30;
}
console.log(new UserInfo("Mike"));
console.log(new UserInfo("John"));*/
/*
let userInfo = {
	name: "John",
	age: 30,
	address: {
		city: "London",
	},
};
for (const key in userInfo.address){	//Способ перебора ключей for... in
	console.log(userInfo.address[key]);
}*/

let userInfo = {
	name: "Вася",
	age: 30,
};
userInfo.name = "Лена";
console.log(userInfo);
delete userInfo.name;
console.log(userInfo);