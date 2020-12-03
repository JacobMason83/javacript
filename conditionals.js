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