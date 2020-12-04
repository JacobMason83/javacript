// closures in javascript, will take in everything we have talked about before
// setters and getter functions kind of like it because it is getting the hits/bats, but getter and setter functions get raw data 
function battingAverage () {
    var hits = 100
    var atBats = 300 // normally we will return a value but now 
    // we are gonna use closures so we can use it everywhere, were gonnna make one to update the value 
    // the other one will be able to do something whenever you have functions within a object its considered a method 
    return {
     getCurrentAverage : function () {
         return (hits/atBats)
     },
     updateHitsAndAtBats: function (hit, atBat) {
         hits += hit
         atBats += atBat
     }
    }
}

var altuve = battingAverage()
console.log(altuve.getCurrentAverage())
altuve.updateHitsAndAtBats(0, 20) // this function is dynamic because you can update it within dot notation
// and incremented the hits and bats and updates altuves at bats and hits
// you could do this making a ecommerce site, and could add to a cart and update it this way and your returning 
// an object and makes this more real world apps