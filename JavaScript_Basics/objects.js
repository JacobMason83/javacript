// how to loop over objects 
var student = {
    name: 'Kristine',
    age: 12,
    city: 'Scottsdale'
  };
  
  for (var key in student) {
    console.log(key + " => " + student[key]); // this is logging the key and the value so it would be name => 'Kristine'
  }
// how to work with objects 
  const myObj = {
    firstName: 'Jacob',
    lastName: 'Mason',
    email: 'johkdk@kdlkjf.com'
  }

  myObj.age = 37 // will add my age to the obj

  console.log(myObj.name) // equals 'Jacob
  console.log(myObj['name']) // equals 'Jacob' so its the same as the one above so we have access to both ways
  