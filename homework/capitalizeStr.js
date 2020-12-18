
// create a funciton that if its short word then it capitalizes it , but if its a long word then it does every word
// create a arrow function call make it big 
const makeItBig = (str) => {
    const words = str.split('')
    let arr = []
    words.map(word => {
        
        let rest = word.slice(1)
        arr.push(word[0].toUpperCase() + word.slice(1).toLowerCase())
    })
    return arr.join('')
}

const shortStr = "hi there"
const longStr = "the quick brown fox jumped over the man in the middle tonight"

console.log(makeItBig(shortStr))
console.log(makeItBig(longStr))