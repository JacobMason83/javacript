// return the first and last element seperate and everything in the middle 


const firstAndLast = arr => {
    let first = arr.shift()
    let last = arr.pop()
    let everythingElse = arr
    everythingElse.slice(first, last)
    
    console.log(`This function removed: ${first}, ${last} from the array and all thats left is ${everythingElse}`)
    if((arr.length - 1) > 2) {
        return everythingElse
    }else {
        // you could also return the array to them 
        console.log("Error, Error Will Robinson your array is too short ")
    }
}

let arr =['good', 'bad', 'ugly', 'my', 'love']

console.log(firstAndLast(arr))

const removeFirstAndLast = arr => {

    if(arr.length >=3) {
        return arr.slice(1, -1)
    } else {
        throw new Error('You need to have atleast three elements in it ') //throw will actually error it 
    }
}