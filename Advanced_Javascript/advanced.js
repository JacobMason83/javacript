// const is constant, and you dont reassign it or anything
var city = 'Scottsdale' // alows var to be changed, reassinged
let city = 'Scottsdale' // allows for reassignment but not re declared
const city = 'Scottsdale' // always use const right away, and if its too specific then go to let but const 
// const gives us a helpful little tool , imagine your using let city = scottsdale, and you redefine it later in the program, const wont let you do that
// and it wont let you even use it if reassigned it later on 


//string interpolation 
const lyrics = 'Never gonna give you up '
console.log(`I'm ${lyrics}`) // will return Im never gonna give you up 
console.log(`I'm ${lyrics.toLowerCase() + lyrics.toLowerCase()}`) // will return Im never gonna give you up never give you up 

// conditonals with ternary operators 

const page = "Home" // if you run it now itll say master-layout if you change it about itll change it to secondary-layout
console.log(`class=${page === 'Home'} ? 'master-layout' : 'secondary-layout'`)

const whichPage = prompt("which menu?")

const content = document.getElementById("content")
const newDiv = document.createElement("div")
const createNode = document.createTextNode('Made by JS')
newDiv.appendChild(createNode)
content.appendChild(newDiv)

newDiv.classList = `${whichPage}-menu another class`
// then you would add id of content in your html where you want it at to create the new div 


