// Интерфейсы и типы


interface IUserEmail {
    email: string,
}

interface IUser extends IUserEmail {
    name: string
    age: number
} 

const user1:IUser = {
    name: 'Mike',
    age: 26,
    email: 'dfsdfsd@gmail.com'
}




type TypeEmail = {
    email: string
}

type TypeUser = {
    name: string
    age: number
} & TypeEmail;

const user2:TypeUser = {
    name: 'Mike',
    age: 26,
    email: 'dfsdfsd@gmail.com'
}
