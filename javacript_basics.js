// javascript basics 
// 1. js is one of the oop languages that the browser understands
//2. great for mobile applications  using other frameworks that use js 
//3. js will let you automate your day to day workflow 
//4 very good at keeping up with the trends, and very versitle 
//5 some of the worlds most powerful apps are buit in javascript 

// various versions of javascript 
// some basics 
var hello_world = "Hi there"; // first print statement 

console.log(hello_world);
// var name = "Jacob";
let name = "Jacob";
var age = 37;
console.log(name);
// alert(name);
// by doing this you can set them ahead of time if you know 
// and then use them later on in the program as you see fit 
// they way we put all the variables in the same line is called hoisting, and  the question is what is the point of it
// but setting them in one line is very good , but declaring them later doesnt make sense
var name, city, age;
// setting up the three variables you just declared
name = 'Jacob';
city = "Fort Wayne";
age = 37;

console.log(name);
consol.log(city);
console.log(age);
// const is the best practice now adays instead of var and let , so work from const then let  then var 
// var age = 12; // var just creates a global scope  variable  
// console.log(age);
// if you change var to let and use it it wont let you overrided it by accident which is much better 
// but you can  do age = 15
let age = 12;
age = 37
console.log(age);
// changed from var to let 
// let age = 15;
console.log(age);
// you cant reassign a let varname, but you can with var age , because var is more
//flexiable than let, but let helps you keep from overriding the variable you set in the 
//beginning

//hoisting 
name = "jacob"
console.log(name)
// hoisting will hoist this up to the top of the program, but it only works with declarations not assignments 
// doest work with initialization only declaring so var name = 'jacob' and you put the console.log
// above it , it wont work but if you assingn it at the top, but declare it below itll work 
// const doesnt hoist
// hoisting doesnt work on both, only a declaration or assingment 
var name
var age = 12
function setAge(){
  age = 15
}
console.log(age)
// comments in all programming 
// make sure your updating your comments as your program develops, and every time update
// make sure your the your modules, varnames, functions , and prettymuch keep your naming conventions
// very descriptive 
/* multiline comment
in javascript 
Javascript datatypes- is how js sees that types of data
1. Boolean - only 2 outcomes True or False
*/
var truthy = true;
var nottruthy = false;
/* 2 null data type only one outcume is null 
var nully = null; returns null or absence of a value none type 
 3. Undefinied - usually used with debugging, its simply declared , but has no value 
 var notDefined; returns undefined not assigned a value to it 
 3. Number - number data types 
 var age = 12; returns 12
 3 string datatype - strings 
 var name = 'jacob' 
 var nameTwo = "Jacob" for the most part it dont matter which one you use , until formatting data later on 
 4 Symobol - simalar to strings, only can be one of them , primarly for working with objects
 var mySym = Symbol('foo) returns symbol , foo and bar and foobar is just a simple no meaning word and or a sample word has nothing special about it 
 this is the full set of data types 
*/ 
/* Object in JavaScript 
you will be using objects for everything everyday, and create a blueprint for your object, and able to query data easily 
var user = { name: 'Kristine'}
console.log(user.name) allows for dot notation and to access them by the objectName.keyvalue
syntax is objectName = { key: value, key: value, key: { key: value, key: { key:value, key: value, etc }}} obj within a obj within a obj
var user = {
  name: 'Kristine',
  age: 12,
  city: 'Scottsdale',
  grades: {
    math: 90,
    science: 80,
    languageArts: 100
  }
}
user.age = 13;
user.grades.coding = 95; by doing this it will add the key of coding into the greades obj and set it to 95
*/
/* 
quick ways to tell is a typeof each one 
ypeof 12;
// "number"

typeof 'Astros';
// "string"

typeof true;
// "boolean"

typeof { name: "Kristine" };
// "object"

var age;
// undefined

typeof age;
// "undefined"

age = null;
// null

typeof age;
// "object"
*/
/* Type Casting in Javascript
one reason is js apps are api apps , and they will send numbers as strings because of json which is wrapping it 
second reason is  you can do Number('100') + 42 = 142 , or if your not sure what type your data will be just wrap it into the 
data type you want 
"100" + 42; // "10042" because js doesnt know if were trying to append to it or a computation 
42 + "100"; // "42100" doesnt have to do with order its the string plus a number 
"100" - 42; // 58
100 + null; // 100

var ageOne = 12;
String(ageOne); // '12' string class is making it a string  
ageOne.toString(); // '12' number method to send it to a string , typically easier to use the .syntax is the goto 

var ageTwo = '33';
Number(ageTwo); // 33
parseInt(ageTwo); // 33 will return 33.5 as 33
parseFloat(ageTwo); // 33 will return for  '33.5' => 33.5 
+ ageTwo; // 33  the plus in front of the var will cast it into a int , its called the Uniary operator 
will see it like this var foo = + ageTwo;
parseInt('5555555555 is my phone number'); // 5555555555
parseInt('foo 5555555555 is my phone number'); // returns NaN  which means not a number , which means it cant be converted
Number("100") + 42; // 142

Number(true); // 1  in the low level programming universe they use binary, and 1 means yes 
Number(false); // 0 means no in binary 
*/ 
/* string functions in javascript  3 part video 
var str = "The quick brown fox jumped over the lazy dog"; 
str.length  the length of the String, and its an attribute of the string class 
str.length(); // VM2349:1 Uncaught TypeError: str.length is not a function

str.length; // 44

str.charAt(2); // "e" this is a zero based index parameter for the charAt function 

str.charAt(200); // "" this can be good , but confusing, because it means that the 200th index which means there is nothing at that index
it would be better throwing an error than returning a "" at a noexistant index in the string 

str.concat(' again and again'); // "The quick brown fox jumped over the lazy dog again and again" short for concatenate
and will add this to the string  

str; // "The quick brown fox jumped over the lazy dog"

str.includes('quick'); // true

str.endsWith('dog'); // true it doesnt check words, it checks character by character

str.startsWith('Foo'); // false because foo isnt in the starting value will be useful with webscrapers etc 
because it returns a true or false value  

str.repeat(5); // "The quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dog"
 allows you to repeat the string however many times you put in the parens it will repeat
 const string = "My life without you i would die"
 const new_string = string.repeat(5) + "/n"
str.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // null

'555-555-5555'.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // (4) ["555-555-5555", "555-", undefined, "555-", index: 0, input: "555-555-5555"]0: "555-555-5555"1: "555-"2: undefined3: "555-"index: 0input: "555-555-5555"length: 4__proto__: Array(0)

str.replace('fox', 'wolf'); // "The quick brown wolf jumped over the lazy dog" takes 2 args what your searchin for is first, and what your replacing 2nd 
would replace fox for wolf in the string , and it will only replace the first one 

'555-555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // 0 this is a regular expression, and looks very 
weird, but its a pattern matching system , but dont let it scare you , and search will return what index value it is gonna be at for where it found it at 

'Hi, 555-555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // returns 4 and that means its at index of 4 
if it returns -1 means that it didnt find it 

str.indexOf('jumped'); // 20 means that its at index 20 , its at the index of the first word it finds 
str
str.lastIndexOf('jumped'); // 20 

var str2 = str.concat('again and again');

str2.indexOf('again'); // 44 this means its the first index of the again string and its at index 44 
str2.lastIndexOf('again'); // 54 and the last index of the word again in the string, and will give you a range of where all of them are 

str.slice(4, 10); // "quick " slices from index of 4 up to 10 brings back quick with the space if you slice(4, 9) itll bring back just "quick"

str.slice(-8); // "lazy dog" will return from the end and back 8 indexs and returning from the index all the way to the right 

str.slice(10); // "brown fox jumped over the lazy dog" slice with one value will slice all the way up to it 


var messyString = '    Hi there    ';

messyString.trim(); // "Hi there" clears up the whitespace in the messy string, and will allow you to clean up user
data in the realworld 
str.slice(4, 10).trim(); dont go past 3 or four functions on it , split them up if you need to 

str.toUpperCase(); // "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG" takes all the words in the string and turn it to uppercase 

str.toLowerCase(); // "the quick brown fox jumped over the lazy dog" takes it and turns whole string into lowercase


*/