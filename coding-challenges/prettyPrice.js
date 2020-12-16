// make a function that takes in a value and say its 3.50 and 0.95 will return 3.95

const prettyPrice = (originalPrice, addedValue ) => {
    let firstNum = Math.floor(originalPrice)
    let secondNum = addedValue
    if (Number.isInteger(secondNum)) {
        return firstNum + (secondNum * 0.01)
    } else {
        return firstNum + secondNum
    }
  
    
}

console.log(prettyPrice(3.95, 0.95))
console.log(prettyPrice(3.23, 95))
console.log(prettyPrice(3.95, 95))
console.log(prettyPrice(3.95, 95))
console.log(prettyPrice(3.95, 95))
