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