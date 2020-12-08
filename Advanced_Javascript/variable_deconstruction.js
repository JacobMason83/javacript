// variable deconstruction 
// ability to swap variables 
let playerOne = 'Tiffany';
let playerTwo = 'Kristine'

let tempPlayerOne = playerOne // now the player one is assigned to temp player one
let tempPlayerTwo = playerTwo // now the player two is assinged to player two 
[playerOne, playerTwo] = [playerTwo, playerOne] // is a way of deconstructing it into the values so that it doesnt change the original value 
playerOne = playerTwo;
playerTwo = playerOne;

console.log(`
Player One: ${playerOne}
PlayerTwo ${playerTwo}
`) //  without variable deconstruction it would be hard to do 

// destructuring with arrays 

const apiList = [
    'https://api.dailysmarty.com/posts',
    'https://api.github.com/users/jordanhudgens/repos',
    'https://api.github.com/users/jordanhudgens'
  ]
  
  const [posts, repos, profile] = apiList; // destructuring allows you to do this on a single line
  // then you can list all the variables that you want to create and set it to each variable 
  // and its smart enough to know that its setting by the index value 

  const posts = apiList[0];// not very efficent, you would have to do this alot of times 
  
  console.log(posts);
  console.log(repos);
  console.log(profile);

  // using deconstruction to get thru objects 

  const user = {
    name: 'Kristine',
    email: 'kristine@devcamp.com'
  }
  
  const renderUser = ({ name, email }) => { /// the keys have to match in here, you cant put like e or n in it 
    console.log(`${name}: ${email}`); //this is allowing you to pass in the whole user object, instead of just user.name or user.email 
  }
  
  renderUser(user);
  // how to pass 