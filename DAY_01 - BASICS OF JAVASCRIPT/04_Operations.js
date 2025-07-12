//Conversion from positive to negative::
let value = 3;
let neg_Value = -value;//Negative Value Variable
console.log("After perfoming operations we get = ",neg_Value);

//Conversion from negative to positive::
let value_2 = -8;
let pos_Value = -value_2;//Positive Value Variable
console.log("After perfoming operations we get = ",pos_Value);


//Numerical Operations::

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2/3);
console.log(3/2);
console.log(2**2);//Exponent
console.log(2%2);//Remainder
console.log(3%2);
console.log(2%3);
console.log(4%2);



//Concatenation of String::
let str1 = "Arnab"
let str2 = "Jana"

let str3 = str1 + " " + str2;//Adding and merging different strings by "+" sign
console.log(str3);//Output: Arnab Jana

//Tricky Stuffs::
console.log("1"+8);//Output(No Conversion): 18
console.log(1+"8");//Output(No Conversion): 18
console.log("1"+2+2); //Output(Still no conversion): 122

//V.V.Important::
console.log(1+2+"2");
//Output(Addition then concatenation): 32 ==> 1+2 = 3; "3" + "2" = 32

//Inconsistent codes:: Do not repeat the mistkaes for coding (Priority and preference = Readability)
console.log(3+4*5%3);//Ouptut: 5

//Increase readability by adding parentheses::
console.log((3+4) * 5 % 3);//Output: 2

console.log(true);//Ouptut: true
//Confusing code::
console.log(+true);//Ouptut(conversion from Boolean to Number): 1

//console.log(true+); ==> Error
console.log(+"");//Output: 0 due to empty parentheses

//Another example of inconsistent code:
let num1, num2, num3;
num1 = num2 = num3 = 2+2;
console.log(num1);//Output: 4

//Another interesting example::
//Method 1: Postfix
let gameCounter = 100;
gameCounter++;//Incrementing value by 1
console.log(gameCounter);//Output: 101

//Method 2: Prefix
let gameCounter_1 = 100;
++gameCounter_1;//Incrementing value by 1
console.log(gameCounter_1);//Output: 101