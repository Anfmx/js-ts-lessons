// Enum
// Как константы но когда четко знаем чем является константа и ее значение

enum EnumRoles{
    ADMIN = 0, GUEST = 1, USER = 2
}

type TypeUserMain = {
    role: EnumRoles,
    color: EnumColors,
}

const user5: TypeUserMain = {
    role:EnumRoles.ADMIN,
    color:EnumColors.black
}


const enum EnumColors{
    black, pink, green
}

console.log(EnumRoles[0]) // Reverse-mapping - получение ключа по индексу и наобарот
