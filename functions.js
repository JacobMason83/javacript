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
