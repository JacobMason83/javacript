// Variable scope in javascript 
var userObj = {
    email: 'sample@example.com',
    fullName: 'Kristine Hudgens'
  }
  
  function dashboardGreeting() { // say hi to the user when the they log in 

    var userObj = { // this is scopred to local variable scope in functions, thats why js is flexible , but you can override the global scope 
        // by naming the variable without the var will make it to global var, which makes this variable locally scoped 
        // dont pollute the global namespace, best practice is to have not alot of global variables, one that you dont want to change 
        // to often use var or let, and so you dont use and accidently create a global variable 
      email: 'sample2@example.com',
      fullName: 'Jordan Hudgens'
    }
    console.log("Hi there, ".concat(userObj.fullName));
  }
  
  dashboardGreeting();
  console.log(userObj.fullName);

// anomymus functions
function greeting() {
    return 'Hi There';
}

var greetingTwo = function () {
    return 'Hi there again'
};

var age = 3;


if (age <= 10) {
    var buildMenu = function () { // this is like building functions on the fly, and will allow you to put it in the statement block 
        // function expressions are more flexible 
        return 'Kids menu';
    };
    function buildMenuTwo () {
        return "Another Kids Menu" // with some js compilers it wont let you use it within blocks 
    }

    console.log(buildMenu());
}
