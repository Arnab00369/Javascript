//==> CASE 1: Where Variable is number but taken as String
//    ====================================================
let score = "36";

//Determining the type of 'score' variable
console.log("The type of 'score' variable is = ",typeof score);
console.log("The type of 'score' variable is = ",typeof(score));

//Converting String to Number
let valueInNumber = Number(score);
console.log("The type of 'score' variable after converting is = ",typeof valueInNumber);



//==> CASE 2: Where Variable is mixed of String + Number
//    ==================================================
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


//==> CASE 3: Where Variable is null
//    ==============================
let b = null; //Variable value is null

//Determining the type of 'b' variable
console.log("The type of 'b' variable is = ",typeof b);
console.log("The type of 'b' variable is = ",typeof(b));

//Converting String to Number
let valueInNumber_3 = Number(b);
console.log("The type of 'b' variable after converting is = ",typeof valueInNumber_3);
console.log("Value of 'b' after conversion to number is =  ",valueInNumber_3);
//NOTE:: Output ==> Value of 'b' after conversion to number is =   0


/*
NOTE(V.V.Important)::
===================
==> Results after conversion of variables (to Number)::
1) variable = number, After Conversion(to number) = number
2) variable = mixed(string+number), After Conversion(to number) = NaN
3) variable = string, After Conversion(to number) = NaN
4) variable = boolean(true/false), After Conversion(to number) = 1(for true), or 0(for false)
5) variable = null, After Conversion(to number) = 0
6) variable = undefined, After Conversion(to number) = NaN*/


/*
Conversion from Number to Boolean::
=================================
***Code Syntax:: let variable_Name = Boolean(Variable_Name_to_be_changed);

Cases(Outputs based on variables result)::
======================================= 
1) 1 = true(output), 0 = false(output)
2) "" OR (Empty String) ==> false(output)
3) "Arnab Jana" OR String Value ==> true(output)
*/



/*
Conversion from Number to String::
================================
***Code Syntax:: let variable_Name = String(Variable_Name_to_be_changed);
 
For e.g.: 
let number = 36;
let string_Number = String(number); ==> Conversion done from Number to String
console.log(string_Number); ==> Output: 36
console.log(typeof string_Number); ==> Output: string
*/