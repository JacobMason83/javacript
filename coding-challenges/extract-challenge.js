const removeByIndex(arr1, arr2) => {
    let newArray = []
    for ( idx in arr2) {
        for (i in arr1){
            newArray.push(arr1[idx])
        }
    }
    return newArray.join(',')
}
let arr1 = [1,2,3,4,5,6]
let arr2 = [1,5]
console.log(removeByIndex(arr1, arr2))

// Write a program to extract out the values at specified indeces from an array.
// removeByIndex(['a','b','c','d','f','f','e','f'], [1, 5]) => ['b', 'f']
function removeByIndex(arr, specifiedIndex){
    // const removed = []
    // specifiedIndex.forEach(idx => {
    //   removed.push(arr[idx])
    // })
    // return removed
    return specifiedIndex.map(idx => arr[idx])
  }
  console.log(removeByIndex(['a','b','c','d','f','f','e','f'], [1, 5]))