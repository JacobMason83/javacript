// promises in javascript 

//  how promises work at a high level, use it when working with outside apis like Twitter > posts
// if twitter was down, then user would see ....buffering 
// you would rather show page 
// show posts when they arrive
// js is asyncronus and you can have it run other processes and as its waiting for other things to load 
// so you can pick and choose what run first  you could fetch posts, run page setup then posts when it gets there 
// asyncronus - Definition of asynchronous 1 : not simultaneous or concurrent in time : not synchronous asynchronous sound 2 : 
//of, used in, or being digital (see digital sense 4) communication (as between computers) in which there is no timing
// requirement for transmission and in which the start of each character is individually signaled by the transmitting device

// promises helps with as your fetching the data, the rest of the page is loading then the last thing would be the posts 
// they are very complex so here is a basic one 

// takes two args resolve and reject is the most common uses now adays
let sleepyGreeting = new Promise((resolve, reject) => {
  // you need to set a timeout so that it doesnt and mimic calling a api ,and just this paticular case 
  setTimeout(() => {
    resolve('Hello....') // this is where it would resolve the fetch call and return hello 
  }, 2000);
  
  setTimeout(() => {
    reject(Error('Too Sleepy')) // this is where the api would reject the fetch call and would return an error 
  }, 2000);
});

sleepyGreeting // when you call sleeping greeting and get the promise returned and then return the data and print it to the console 
// we need to then put a catch into this to catch the error   
.then(data => {
    console.log(data)
  })
.catch(err => {
    console.error(err) // you can do . then all day, but you have to have a .catch to catch the error 
  })

  // you can use a loop to await a result and you can use a promise 

  const students = [
    'hadi',
    'jacob',
    'genisis',
    'matt',
    'cian',
    'braden',
    'mike'
  ]

  const sleep = ms => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms)

    })
  }

  students.forEach(async i => {
    await sleep(1000).then(
      console.log(i)
    )
  })

  // most likely call the fetch library 
fetch("https://www.swapi.tech/api/people/1")
.then(res => res.json()) // returning the promise data from the fetch request 
.then(data => console.log(data))
.catch(err => console.error(err))

// then you can chain .thens to stucture, and map your data 

// fetch promises 

// the order of process for the fetch calls 
console.log('Starting fetch call');
const postsPromise = fetch('https://api.dailysmarty.com/posts') // if you bring in a http fetch call, it will error, because of sercurity, 
// so that your not bringing in malicious data 
console.log('After fetch call');
console.log(postsPromise);
console.log('After program has run');
// if you run this you wont see the data that it brought back , its just the promise object,and you will do something with it 
postsPromise
  .then(data => console.log(data)); // if you run this you will get http status code 200 and thats good 

  postPromise
  .then(data => data.json()) // converting it to json 
  .then(data => { // this is console.logging the data 
    console.log(data);
  })
  // returning data from a api is a process of steps to get it how you want it 


  postsPromise
  .then(data => data.json())
  .then(data => {
    data.posts.forEach((item) => { // data.posts , is the data and posts is what api returned in json, so 
      // if it was called guides, i would use data.guides, just depends 
      console.log(item.title); // in just a few lines of code , you communicated with a server and you have the titles 
    });
  })
  .catch((err) => {
        console.log(err);
      });
// promises all 
const greeting = new Promise((resolve, reject) =>{
  resolve('Hi there');
  reject('Oops, bad greeting');
});

const updateAccount = new Promise((resolve, reject) => {
  resolve('Updating last login...');
  reject('Error updating account with login.');
});

const loginActivities = Promise.all([greeting, updateAccount]);
// res is short for response 
loginActivities.then(res => { // you can call .then on it because of promise.all , and that contains more than one promise in it 
  res.forEach(activity => {
    console.log(activity);
  })
})

// asyncronus behavior, and callback hell is where you had to write a function and that checked to see if it resolved layer by layer

const login = () => { // login process for the user 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('User logged in...');
    }, 2000);
  });
}

const updateAccount = () => { // updates the account and updates the users account with their login 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Updating last login...');
    }, 2000);// the 2000 is in milliseconds which is 2 seconds 
  });
} // what would happen if the users account was updated before the login, so this could be problematic 

// this is where async function helps 
async function loginActivities() {
  const returnedLogin = await login(); // it works with the promise, and will await until the login process is completed then update account would go 
  console.log(returnedLogin);

  const returnedUpdateAccount = await updateAccount();// will wait until the update account is resolved 
  console.log(returnedUpdateAccount);
}

loginActivities();