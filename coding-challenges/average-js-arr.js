// create a function to get the average num of elements in a list 
function average(array) {
    // set the accumlator value to zero 
     var total = 0
     // loop the array and add the values to the total 
     for(i in array) {      
       total += array[i]
     }
     
     return total / array.length // return the average with total / length of the array 
 }
 let arr = [1,2,3,4,5,6]
 console.log(average(arr))

 const average = (array) => { // setting the variable average to the function with the args of array 
     let total = 0 // setting the accumulator 
     for (i in array) {
         total += array[i] // looping and appending array[i] to total
     }
     return total / array.length// getting the average by taking the total divided by the length 
 }

 let arr = [1,2,3,4,5,6]
 console.log(average(arr))