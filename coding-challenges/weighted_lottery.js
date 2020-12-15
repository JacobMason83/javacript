
// //obj.keys , bitwise operators 
const weightedLottery = (weights) => {
    // create a push array for the values 
    let lotteryWeights =[]
    
    // loop over the object and grab keys and push it as many times as its value 
    
    Object.keys(weights).forEach(key =>{
        for(var j =0; j < weights[key]; j++) {
            lotteryWeights.push(key)
            
        }
        return  lotteryWeights[Math.floor(Math.random()* weights.length)]
        
    }
    
    
    const weights = {
        winning: 1,
        losing: 1000
    }
   
 








 console.log(weightedLottery(weights))

// const weightedLottery = weights => {
//     // keep track of your  weights
//     // ['green', 'yellow', 'yellow', 'red', 'red', 'red']
//     let containerArray = [];

//     Object.keys(weights).forEach(key => {
//       for(let i = 0; i < weights[key]; i++) {
//             containerArray.push(key)
//         }
//     })

//     return containerArray[(Math.random()* containerArray.length) | 0];
// }

// const weights = {
//     winning: 1,
//     losing: 1000
// }

// console.log(weightedLottery(weights))
// console.log(weightedLottery(weights))