/*07_Heap_and_Stack_Memory.js

NOTE::
====
1) Stack Memory ==> Stores: Primitve Data Types
   ***Keynote: Stack Memory gives a copy of the referenced variable,
     so changes made are not permanent or do not reflect in the original variable 

2) Heap Memory ==> Stores: Non-Primitive or Reference Data Types
   ***Keynote: It do not give copy of reference instead it gives direct reference of the original variable
*/

//Stack Memory Implementation::
let myName = "Arnab Jana";
let anotherName = myName;
anotherName = "ChaiAurCode";

console.log(myName);//Ouptut: Arnab Jana
console.log(anotherName);//Output: ChaiAurCode


//Heap Memory Implementation::
let userOne = {
    Name: "Arnab Jana",
    Age: 21
}

let userTwo = userOne;
userTwo.Name = "Yes, it's changed";

//Both values changed as original variable value is updated
console.log(userOne.Name);//Output: Yes, it's changed
console.log(userOne.Name);//Output: Yes, it's changed