Data_Types_Summary.js
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

console.log(id === another_ID);



/* Reference or Non-Primitive Data Types:: 
   =====================================
  1) Arrays,
  2) Objects, and
  3) Functions
*/