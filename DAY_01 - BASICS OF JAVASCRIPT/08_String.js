const Name = "Arnab Jana";
const repo_count = 40;

//Concatenation
console.log(Name + " " + repo_count + " Values");

//Using back ticks `` ==> For String Inter-polation
console.log(`Hello, there my name is ${Name} and Repo Count is ${repo_count}`);

const gameName = new String('arnab_abc');
//Output::
/*String {'arnab_abc'}
0:"a"
1:"r"
2:"n"
3:"a"
4:"b"
5:"_"
6:"a"
7:"b"
8:"c"
length:9
[[Prototype]]:String
[[PrimitiveValue]]:"arnab_abc"
*/
console.log(gameName);//Output: [String: 'arnab_abc']
console.log(gameName.__proto__);//Output: {} ==> It means Object
console.log(gameName.length);// Output: 9
console.log(gameName.toUpperCase());//Output: ARNAB_ABC ==> All converted to Capital Letters
console.log(gameName.charAt('a'));//Output: a
console.log(gameName.charAt(2));//Output: n
console.log(gameName.indexOf('b'));//Output: 4 ==> It shows only the first appearance 

//Using Substring:
const newString = gameName.substring(0,5);
console.log(newString);//arnab

//Using Slice ==> Here, negative values can also be used
const anotherString = gameName.slice(0,5);
console.log(anotherString);//arnab

const anotherString_1 = gameName.slice(-8,4);
console.log(anotherString_1);//rna

//Using trim():
const newStringOne = " Arnab ";
console.log(newStringOne);
console.log(newStringOne.trim());//Removing extra spaces from a String

//Using replace():
const url = "https://arnab.com/arnab%20jana"

console.log(url.replace('%20','-'));//Output(replaced): https://arnab.com/arnab-jana

//Asking questions about the variable
console.log(url.includes('sundar'));//false

//Doing split() of Strings using specific seperator:
const a = "Hello_This_Is_A_Practice_File_Of_JS";
console.log(a.split('_'));//Output: [ 'Hello', 'This', 'Is', 'A', 'Practice', 'File', 'Of', 'JS' ]
/*
0:"Hello"
1:"This"
2:"Is"
3:"A"
4:"Practice"
5:"File"
6:"Of"
7:"JS"
length:8
[[Prototype]]:Array(0)
*/