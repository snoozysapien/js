let score = "33"
let code = "121fp1119"
let a = null
let b= undefined

console.log(typeof score);

let valueInNumber = Number(score)
let codeInNumber = Number(code)

console.log(typeof valueInNumber);
console.log(typeof codeInNumber);
console.log([codeInNumber,a,b]); //NaN means not a no.

//boolean covert into 0 or 1

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// empty string return false and "something" is true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);