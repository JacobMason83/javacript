// write a function to convert a givin number into a array of digits 
const numberConvertor = num => {
     
    let arr = Array(num.split(''))
    let newArr =[]
    for(let i in arr){
        newArr.push(Number(arr[i]))
    }
    return newArr.join(',')
   
  }
  
  console.log(numberConvertor('123456'))

  function numberToArray(num) {
      const strArray = num.toString().split('')
      
      const myArray = strArray.map(i => {
          Number(strArray[i])
      } )
      return myArray
  }

  console.log(numberToArray('123456'))