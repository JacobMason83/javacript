// // 
// // How does the this keyword work with arrow functions it allows the return value to be from this function, it if i remember correctly sets it to the 
// // function itself, not the window function
// // How do you pass a JavaScript object as function arguments by leveraging deconstruction? you pass it in as a object so example
// const money = ({ hours, ratePerHour }) => {
//     return `You worked ${Obj.hours} and you were paid ${obj.ratePerHour} per hour`
// }
// // What is a JavaScript Promise? it is basically saying that when you send a fetch call youll get it resolved or an error back, and promising to atleast
// // send that back 
// // What is a JavaScript fetch Promise and how might you use it? a javascript fetch promise is promise that youll recieve something back from the server
// // either an error or data
//  fetch("https://www.swapi.tech")
//  .then(res => res.json())
//  .then(data => console.log(data))
//  .catch(e => {
//      console.error(e)
//  })
// // What is async and await in JavaScript and what purpose does it serve in JavaScript? an async and await function is taking in the function and tellling it 
// // that it has to await for another function to resolve first before it will run, it basically stops callback hell as they say 

// // What is error handling in a JavaScript async/await function, and how might you use it? so error handling in an await async function, would be where 
// // you have a login function, and a update login function you would use it to await so you have the login function fetch promise set up then you would 
// async function myLogin(login(), error) {
//     try{
//     const myLogin = await login()
//     console.log(myLogin)
//     }catch {
//         console.log(error)
//     }}
// myLogin() // it basically runs when someone logins, and it will try and await until the login until happens if it doesnt it will error 
// What is lodash? loadash is a library with usefeful classes, methods to make things easier in javascript, now tho javascript has caught upt 
// wit alot of  them like reduce , but still has its use cases today 
// What is the JavaScript Debugger? its where you but debug in your code somewhere to make sure that its working properly, and it will literally stop your code at 
// that moment



// Solve These -

// // 1. Write a function that generates a random hex. color code in JS
    // create a arrow function that will be named random hex number
const randomHexGenerator = () => {
    // make a list of a -f, 10
    let num = '0123456789'
    let letters = 'ABCDEF'
    //combined the arrays into one to be looped    
    let pickArray = ((num + ','+  letters).replace(',', ''))
    console.log(pickArray)    
    let choiceArray = [] // created an array to push the hexvalues into
    //looped the pickarray and if i is less than or equal to 6 then itll push into the choice array the
    // pick array at the random number to make the hex number 
    for(var i=0; i < pickArray.length ; i++) {
        if ( i <= 6 ){
            choiceArray.push(pickArray[Math.floor(Math.random()* pickArray.length)]) 
        } else {
            break
        }
    }
    return '#' + choiceArray.join('')
    
}
console.log(randomHexGenerator())
console.log(randomHexGenerator())
console.log(randomHexGenerator())
console.log(randomHexGenerator())
console.log(randomHexGenerator())

    
   
// // 2. Write a function that takes a string and returns the letters in alpha. order
// // IE. "Hi there" = "eehirt"
function sortAlphabet(str) {

    return [...str].sort((a, b) => a.localeCompare(b)).join(""); // local compare, compares the string peice by piece, and returns a 
    // string that is alphabetized
  }
    

console.log(sortAlphabet('Hi There'))

// // 3. Write a function that takes in an object and prints all of the values inside of the given object
const objPrinter = (obj) => { // takes in a obj and prints the name, email and password
    const name = obj.name
    const email = obj.email
    const password = obj.password
    return `The users name is ${name}, email is ${email}, and password is ${password}`
}

const user = {
    name: 'Jacob',
    email: 'jacob@games.com',
    password: 'password'
}

console.log(objPrinter(user))


// // 4. Write a class called Student that accepts a name, email, and favorite programming language. Your class needs at least 2 instance methods and one static method.
class Student {
    constructor({ name, email, favLanguage }) { // constructs the class 
        this.name = name
        this.email = email
        this.favLanguage = favLanguage        
        
    }

    renderDetails() { // renders the details of the class 
        return `${this.name} your email is ${this.email}, and your favorite programming language is ${this.favLanguage}`
    }

    addHomework(homeworkAssignment) { // adds an homework assignment to the student 
        this.homeworkAssignment = homeworkAssignment
        return ` Hello ${this.name} your homework for today is ${this.homeworkAssignment}`
    }

    static nameFormatter(str) {
        this.str = str        
        let slice = this.str.slice(1)
        return  `${this.str[0].toUpperCase()}${slice}`
    }
}

const jacob = new Student({ name: 'jacob', email: 'jk@kkkc.com', favLanguage: 'Javascript' })
let homework = 'code these 6 challenges '
console.log(jacob.addHomework(homework))
console.log(jacob.renderDetails())
console.log(Student.nameFormatter('jacob'))

