// if else statements in js
var age = 25; // was 12 changed to 25 
var ageTwo = 15;

// if (age == ageTwo) { // this is equal to each other  js does its own type casting, and is considered a poor practice
//     console.log('They are equal');
// }
// if (age === ageTwo) { // this is strict equal it checks for equality and type
//     console.log('They are equal');
// }
// if (age !== ageTwo) {
//     console.log('Not equal'); // This means they are not equal, and they are differnt types 
// }

if (age >= 25) {
    console.log('Old Enough to rent a car')
}
if (age < 25) {
    console.log('You are not old Enough to rent a car')
}
if (age <= 10) {
    console.log('You can eat from the kid menu ')
}
// switch statements Check for Data Types
var dataPoint = {};

switch (typeof dataPoint) {
  case "string":
    console.log("It's a string");
    break;
  case "number":
    console.log("It's a number");
    break;
  case "boolean":
    console.log("It's a boolean");
    break;
  default:
    console.log('No matches');
}

const state = {
    count: 0, 
    name: ""
}

const reducer = (state, action) => {
    switch(action.perform) {
        case "setCount":
            return{...state, count: action.count}
        case "setName":
            return{...state, name: action.name}
        default:
            return state
    }
}

console.log(reducer(state, {perform: "setCount", count: 10}))
console.log(reducer(state, {perform: "setName", perform: "setName", name: prompt("Enter Your Name!!")}))

// switch statements 
function switchStatement() {
    
    var dataPoint = 4
    
    switch(typeof dataPoint) {
        case "number":
            return 'number'
            break;
        case "string":
            return "string"
            break;
        default:
            return "number"
            
    }

    // ternary operators in javascript 
    // you cant put the the if else on one line unless you 
    <div className= {hasPermission ? 'active' : 'disabled'}></div>// ways to use your ternary operator in jsx or html so it can be active or disabled 
    // with the use of javacript within html
    // real working examples
    function ageVerification(age) {
        // if (age > 25) {
        //   console.log('can rent a car');
        // } else {
        //   console.log("can't rent a car");
        // }
      
        return age > 25 ? "can rent a car" : "can't rent a car"; // gotta break them up is the conditional 
        // age > 25 is the condition that is gonna be true or false
        // then the ? means that ok the condition returns are gonna be nex 
        // so if true you can rent a car, then colon is else or false then cant rent a car then its done 
      }
      
      ageVerification(30); //? returns can rent a car 
      ageVerification(10); //?
      
      function adminControls(user) {
        // if (user) {
        //   if (user.admin) {
        //     return 'showing admin controls...';
        //   } else {
        //     return 'You need to be an admin';
        //   }
        // } else {
        //   return 'You need to be logged in';
        // }
      
        return user ? user.admin ? "showing admin controls" : "You need to be an admin" : "you need to be logged in"; // you can do it on one line or on multiple lines
        // one way or another
        return user ? user.admin ? "showing admin controls" : "You need to be an admin"  // this means that if your a  user and  is admin 
        : "you need to be logged in";
          // show admin controls if not itll say You need to be a admin
           // if the user isnt a user then itll say you need to be logged in 
      }
      
      const userOne = {
        name: "Kristine",
        admin: true
      };
      
      adminControls(userOne); //? showing admin controls
      
      const userTwo = null;
      
      adminControls(userTwo); //? you need to be loggin in returns 
      
      const userThree = {
        name: "Tiffany",
        admin: false
      };
      
      adminControls(userThree);   // you need to be an admin will come back 
      // think of ternary operators like 
      // condition1 ? condition2 ? if conditon2 is true : else condition2 or is false : else conditon1 is false then do this 
