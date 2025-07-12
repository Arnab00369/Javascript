console.log(2 > 1);//true
console.log(2 < 1);//false
console.log(2 >= 1);//true
console.log(2 <= 1);//false
console.log(2 == 1);//false
console.log(2 != 1);//true


/*
==> Comparing Different or Heterogenous Data Types::
    ==============================================
*/

console.log("2" > 1); // true
console.log("02" > 1); // true

/* NULL COMPARISON::
   ===============
Here, null is converted to '0' and then compared */
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null <= 0); // true


/* UNDEFINED COMPARISON::
   ===============
Here, undefined is always undefined means it do not have any value */
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false

/* Triple Equals - Strict Equality Operator (===) : 
   ==============================================
   It compares both Data Types and Values of variables in between two
   (Returns true only if boht Data Types and Values are exactly same)
*/
console.log("2" === 2);//false
console.log(2 === 2);//true
console.log(2 === "0");//false
console.log(2 === 0);//false