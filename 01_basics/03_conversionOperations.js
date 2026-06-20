let score = "13abc"

console.log(typeof score); //number

let valueInNumber = Number(score);
console.log(valueInNumber); //NaN
console.log(typeof valueInNumber);

//"33" => 33
//"33abc" => NaN
//true => 1
//false => 0

let isLoggedIn = 2;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

let someNumber = 33;
let StringNumber = String(someNumber);
console.log(StringNumber);
console.log(typeof StringNumber);