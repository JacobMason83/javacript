const json = '{"result":true, "count":42}'; // this is the syntax for parsing in js 
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true

// fetch api in javascript is a way of requesting and then the server responds 
// first level is accessed by the objects index of the first object then going thru and traversing the object 
// great way to parse data, and can be used with all languages 