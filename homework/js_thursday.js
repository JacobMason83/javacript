// 1. Write a function to check if some input is string, and return boolean value
function checkInput(data)  {
    var str = data;
    if (typeof str === typeof '') {  // should have done it in a ternary operator 
          return true;
    } 
    else {
      return "It aint a string bro"
    }
  }
  console.log(checkInput('String'))
  // 2. Write a function that will capitalize the first letter in a string
  function make_upper(data) {
    var string = data;
    var sliced = string.slice(1);
    var caps = string[0].toUpperCase();
    return caps + sliced
  }
  console.log(make_upper('jacob'))
  // 3. Given 2 values, return the largest number from a function. Return a message when they are two eqaul values.
  function largestNumber(num1, num2) {
    if (num1 > num2) {
      return num1
    } 
    else if (num2 > num1){
      return num2 
    } 
    else {
      return "They are equal buddy try try again "
    }
    
  }
  return num1 === num2 ? 'They are equal buddy try again' : num1 > num2 ?  num1 : num2
  console.log(largestNumber(1, 5))
  console.log(largestNumber(5, 1))
  console.log(largestNumber(1, 1))
  
  // 4. Write a function that joins two strings. Do this 3 different ways.
  function join_strings(data, dataOne){
    var string = data
    var stringOne = dataOne
    let my_string = string + stringOne  
    return my_string
  }
  let string = 'Hello '
  let string2 = "My dude"
  console.log(join_strings(string, string2))
  
  function join(data, dataOne) {
    return data.concat(dataOne)
  }
  console.log(join(string, string2))
  
  function str_interpolation(data, dataOne) {
    var string = data
    var string1 = dataOne
    return `${string} ${string1}`
  }
  console.log(str_interpolation(string, string2))

//   map method 
function titleCase(str) {
    return str.split(' ').map(word => {
        return make_upper(word)
    })
}