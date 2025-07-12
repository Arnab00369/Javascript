//CASE 1: Where Variable is number but taken as String
let score = "36";

//Determining the type of 'score' variable
console.log("The type of 'score' variable is = ",typeof score);
console.log("The type of 'score' variable is = ",typeof(score));

//Converting String to Number
let valueInNumber = Number(score);
console.log("The type of 'score' variable after converting is = ",typeof valueInNumber);



//CASE 2: Where Variable is mixed of String + Number
let a = "12bc"; //Not a pure number

//Determining the type of 'a' variable
console.log("The type of 'a' variable is = ",typeof a);
console.log("The type of 'a' variable is = ",typeof(a));

//Converting String to Number
let valueInNumber_2 = Number(a);
console.log("The type of 'a' variable after converting is = ",typeof valueInNumber_2);
console.log("Value of 'a' after conversion to number is =  ",valueInNumber_2);
//NOTE:: Output(Not a Number) ==> Value of 'a' after conversion to number is =   NaN
// Keep in mind that converting a Non-Numerical value can in times give wrong results