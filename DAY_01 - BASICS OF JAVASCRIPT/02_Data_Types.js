"use strict"; // Treating all JS codes as newer version

//alert("Hello");// This syntax is only valid and can be executed on console not on nodejs

//Increasinf readability bu using ; and using different lines for variables
console.log(3+3);
console.log("Arnab Jana");

// Data Types::

let name = "Arnab Jana"; // String
let age = 21; // Number
let isAdult = true; //boolean

/*Types::
==> Primitive Data Types::
    ====================
    1) Numbers ==> Maximum range = 2 ^ 53
    2) bigint ==> Used for larger integer or number values, generally for e.g. : Trading, Stock-Market 
    3) String ==> 'Single Quote' ; "Double Quotes"
    4) Boolean ==> True/False
    5) null ==> Standalone Value / Empty Value
    6) undefined ==> Variable is decalered but value not given
    7) Symbol ==> Generally, used for unique-ness, in React JS, and so on

==> Non-Primitive Data Types::
    1) Object
*/

// typeof is used to determine the Data Type of any variable
console.log(typeof "Arnab Jana"); 
console.log(typeof age);
console.log(typeof null);  //Ouptut : Data Type of NULL is = Object (V.V.Important)
console.log(typeof undefined); //Output : Data Type = undefined
