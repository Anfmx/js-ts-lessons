// То же что и сет но добавляет только объекты
// не итерируется
// add(value), has(value), delete(value)
const users = [
	{name: 'Mike'},
	{name: 'Alex'},
	{name: 'John'},
];

const visits = new WeakSet();

visits.add(users[0]).add(users[1])

users.splice(1, 1)

console.log(visits.has(users[0]));
console.log(visits.has(users[1]));