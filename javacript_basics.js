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