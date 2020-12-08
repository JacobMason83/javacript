// functions in javascript 
function hiThere() { // function declaration 
    console.log('Hi there'); // stores no value just prints it to the console
}

hiThere() // calling a function or invoking it 
// very few times you would run a function and not have a return value , and those are called void functions 
// void function means it does something, and doesnt return anything 
function hiThereTwo() {
    return 'Hi there again'
}

hiThereTwo() // will print hi there again

var storedText = hiThere() // prints hi there to the console, but there is no value to stored text
var storedTextTwo = hiThereTwo() // stores the value to storedTextTwo and will print it to the screen 
// function refrence vs value
// when you pass in objects you pass in a refrence of the values location 
// when you pass in a variable you pass in a copy of that value 
var someUser = {
    name: 'Jordan'
}

function nameFormatter (user) {
    return user.name = 'Oops';
}

nameFormatter(someUser); // "Oops"

someUser; // Object {name: "Oops"}

var someName = 'Tiffany';

function someOtherNameFormatter(name) {
    return name = 'Oops';
}

someOtherNameFormatter(someName); // "Oops"

someName; // "Tiffany"

function nameFormatter (userName) {
    return userName = 'Oops';
}

someUser.name; // "Oops"

someUser.name = 'Kristine';

nameFormatter(someUser.name); // "Oops"

someUser.name; // "Kristine"
function changeUser({name}){ // this is unpacking name from the object byt {name} 
    name = 'Jacob '
}
changeUser(user) // will only manipulate the instance of this because of the way it was brought in 

function newObj (name ) {
    user = name 
    user = {
        name: "Jacob",
        userName: "jkjdaojfdo",
        email: "jkkdl@kldkfn"
    }
}
// how to pass default values a function arguments
const blog = {
    title: 'My great post',
    summary: 'Summary of my post'
  }
  
  const openGraphMetadata = ({ title, summary = 'A DailySmarty Post' }) => { // same as python in this since where you know
    //title will be there, but summary may not be so you can add the default value to it 
    // backticks with multilines will be seen in react and angular so this is how to use it 
    console.log(` 
      og-title=${title}
      og-description=${summary}
    `);
  }
  
  openGraphMetadata(blog); // it will return title and summary if its given , but if it isnt given then itll return a daily smarty post 