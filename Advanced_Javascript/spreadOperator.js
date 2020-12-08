// Combining Arrays
let shoppingCart = [345, 375, 765, 123];
let newItems = [98, 123];

shoppingCart.push(...newItems);
console.log(shoppingCart); // [345, 375, 765, 123, 98, 123]

// Copying Arrays
const shoppingCart = [345, 375, 765, 123];
const updatedCart = [...shoppingCart];
updatedCart.push(5);
console.log(updatedCart);
console.log(shoppingCart);

const orderTotals = [1, 5, 1, 10, 2, 3];
console.log(Math.max(...orderTotals));

// [1, 5, 1, 10, 2, 3]
// ...[1, 5, 1, 10, 2, 3]
// 1, 5, 1, 10, 2, 3
// how to work with object deconstruction and spread operator 
const { starter, closer, ...relievers } = { // spread operator is ... and spreads it out into their own variables, or rest of it 
  starter: 'Verlander',
  closer: 'Giles',
  relief_1: 'Morton',
  relief_2: 'Gregerson'
}

console.log(starter); // will return Verlander 
console.log(closer); // will return closer giles
console.log(relievers); // will return the rest of them 

const someArray = ['A','B','C', 'D']

const someArrayCopy = [...someArray]

someArrayCopy.push('added this one')

console.log(someArrayCopy)
console.log(someArray)

//bind function in javacript
consturctor() {

}
const userOne = {
    firstName: "Kristine",
    lastName: "Hudgens"
  };
  
  const userTwo = {
    firstName: "Tiffany",
    lastName: "Hudgens"
  };
  
  // Function expression , and its an anyonmus function thats stored in a value of fullname
  // i want to be able to bind the function and object together
  const fullName = function() {
    return `${this.lastName}, ${this.firstName}`;
  };
  
  // Nope! bind allows you to do this instead of using this , and when you use an arrow function you will get a undefined, instead of binding
  // the object with bind, and the arrow function will make the scope off and bind it to the parent or wherever it lives ie window 
  // const fullName = () => {
  //   return `${this.lastName}, ${this.firstName}`;
  // };
  // we bind them together with the bind keyword, and it binds this function with kristine and same thing as tiffany 
  const kristine = fullName.bind(userOne); // wont use it much but in react
  const tiffany = fullName.bind(userTwo);
  
  kristine();
  tiffany();