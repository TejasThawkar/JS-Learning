const accountId = 123456789;
let accountEmail = "tejas@gmail.com"
var accountPassword = "123456789";
accountCity = "Bangalore";
let accountState;

// accountId = 987654321;

accountEmail = "vibex@h=gmail.com";
accountPassword = "987654321";
accountCity = "Mumbai";


/*
Prefer not use var because it is function scoped and can be redeclared and updated.
*/

console.log(accountId);
console.table({
    accountEmail,
    accountPassword,
    accountCity,
    accountState
});