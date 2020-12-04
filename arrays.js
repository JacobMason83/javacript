// two main ways to create arrarys 
// this is a way to generate your array if you know how many items but not sure what they are yet 
var generatedArray = new Array(3)
var arr = new Array('Jacob', 'Rachel', 'Cerbi', 'Tyr')
// the way of making it from scratch 
var literalArray = ['Jacob', 'Rachel', 'Cerbi', 'Tyr']
// arrays in js is very flexible, you can put strings, nums, nested arrays, objects, even functions
var mixedArray = ['Jacob', 1, [1,2,3], {name: 'Rachel'}, function greeting() {console.log('Hey there');}]
// working with arrays is just like lists in python , you use bracket notation 
mixedArray[4]() // will call the function because of the parens , and objects with methods as well 
mixedArray[2][1] // will return 2 in the nested array , because you took the 2nd index or 3rd item the nested array
// arrays collect everything, its a just a way of storing multiple different types of data , and can query it easily 
// how to add, remove, pop etc to an array 
var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

arr.pop(); // "Springer"

arr; // ['Altuve', 'Bregman', 'Correa']

arr.push('Bagwell'); // 4

arr; // ['Altuve', 'Bregman', 'Correa', 'Bagwell']

arr.shift(); // ['Bregman', 'Correa', 'Bagwell']

arr.unshift('Kyle'); // 4

arr; // ['Kyle', 'Bregman', 'Correa', 'Bagwell']

// loops in javascript 
var players = [ // create the array of strings

    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
  ];
  // for player in players , is the more modern way
  for (player in players) { // player doesnt represent the value , it represents the value 
    console.log(players[player]); // very simalar to the traditional for loop, your only gonna 
    // loop over the players list , and dont have to be as strict , and you can know itll only iterate over what you tell it to .
  }
  // traditional for loops loop a certain number of times and its less modern way
  for (var i = 0; i < players.length; i++) { // one of the few cases that the semi colon matters in mondern times
    //(variable setting the initializer; how long you want loop until players.length would be better to do i < players.length
    // then increment i with i++) and then console.log(players[i]) everytime you loop 
    console.log(players[i]); // log the players at the index of i, because were incrementing i everytime so it would be index 0,1,2 etc until the loop ends
  }
  // for each loop
  players.forEach(function(element) { // youll be entering in a element into the function, the element will be the index
    console.log(element); // much more functional, cause you calling a function on it 
  });
  for (player of students){ // for of loops will skip over the and just grab the value of students and print it this is better for grabbing indexs and printing
      console.log(student)
  }