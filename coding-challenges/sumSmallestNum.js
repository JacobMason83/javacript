// Write a function that takes in an array of integers and sums the 2 smallest numbers

const sumTwoSmallest = arr => {
    let sortedArray = arr.sort((a,b) => a-b).slice(0,2)
    console.log(sortedArray)
    return sortedArray[0] + sortedArray[1]
}

console.log(sumTwoSmallest([10,6,3,4,2,7,1])) // =>3

function sumSmallest(arr) {
    let lowest = arr[0]
    let second = 0
    arr.forEach(element => {
        if(element < lowest) {
            second = lowest
            lowest = element
        }
    })
    return lowest + second 
}

console.log(sumSmallest([10,6,3,4,2,7,1])) // =>3