//Data_Types_Summary.js
/*
NOTE:: 
====
Javascript is a Dynamically Types Language, as we do not need to mention the data types of a variable
*/
/* Primitive Data Types ==> 7 Types or Categories:: 
   ==============================================
   1) Number,
   2) String,
   3) Boolean,
   4) Null,
   5) Undefined,
   6) Symbol ==> Unique Feature, and
   7) BigInt ==> Used for large values outside the scope of Integer; Scientific or huge values
*/
const score =100;
const score_Value = 100.6;

const is_Voter = true;
const outside_Temperature = null;
let user_Email; //undefined value

//Using Symbol
const id = Symbol('123');
const another_ID = Symbol('123');

console.log(id === another_ID);//Output: false ==> as we have made both the varibales as unique

//Using bigNumber
const bigNUmber=455165545515151122n;//Add 'n' after number to represent it as BigInt
console.log(bigNUmber);



/* Reference or Non-Primitive Data Types:: 
   =====================================
  1) Arrays,
  2) Objects, and
  3) Functions
*/

//Array
const heroes = ['Iron Man','Captain America','Batman','Saktiman'];
console.log(heroes);

//Objects
let myObj = {
   Name: "Arnab Jana",
   Age: 21,
}
console.log(myObj);

//Functions
const myFunction = function(){
console.log("Hi, there this is Arnab Jana");
}


//Determining Data Types of Variables::
console.log(typeof bigNUmber);//bigint
console.log(typeof outside_Temperature);//object
console.log(typeof heroes);//object
console.log(typeof myObj);//object
console.log(typeof myFunction);//function
console.log(typeof another_ID);//symbol
console.log(typeof id);//symbol