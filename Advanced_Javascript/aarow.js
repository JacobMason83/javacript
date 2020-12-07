// aarow functions 
// Same function written as function declaration
function fullName (fName, lName) { 
    console.log(`${lName}, ${fName}`);
  }
  fullName('Tiffany', 'Hudgens');
  
  // Same function written as function expression
  fullName = (fName, lName) => { 
    console.log(`${lName}, ${fName}`);
  }
  fullName('Kristine', 'Hudgens');
  
  // Basic arrow function
  helloWorld = () => { console.log("Hi there"); } // basically means helloworld is the function , no parameters , and arrow funciton then console.log it 
  helloWorld(); // needs to be stored in a variable or ran immediatly 
  // syntax is function var name = (parameters) => arrow to the function then what { and what it does }
  
  // Arrow function with shorthand function argument for single arguments
  firstName = fname => { console.log(fname.toUpperCase()); } // if you have a single argument a shorcut is to not have parens, but you can if you want to 
  firstName('Jordan');
  
  // Arrow function with multiple arguments
  fullName = (fName, lName) => { console.log(`${lName}, ${fName}`); } // aarow functions are a more clean way to do it 
  fullName('Kristine', 'Hudgens');

//   my own example 
const hello = name => {console.log(`Hey there ${name}, damn you look georgeous today!!`);}

hello('babygirl');
// aarow functions elvates the scope of the function 