"use strict";
// Enum
// Как константы но когда четко знаем чем является константа и ее значение
var EnumRoles;
(function (EnumRoles) {
    EnumRoles[EnumRoles["ADMIN"] = 0] = "ADMIN";
    EnumRoles[EnumRoles["GUEST"] = 1] = "GUEST";
    EnumRoles[EnumRoles["USER"] = 2] = "USER";
})(EnumRoles || (EnumRoles = {}));
const user5 = {
    role: EnumRoles.ADMIN,
    color: 0 /* EnumColors.black */
};
console.log(EnumRoles[0]); // Reverse-mapping - получение ключа по индексу и наобарот
//# sourceMappingURL=enum.js.map