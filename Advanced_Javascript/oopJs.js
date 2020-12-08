// oop in javascript 
// instantiation = is basically taking the class and creating a real world object out of it 
// classes in js
class Instructor {
    // constructor is a reserved class and its a builder class for javacript / __init__ in python 
    constructor({ name }) { // { name } is bringing in a object and deconstructing/ unpacking the object into the class 
        this.name = name // name is the object you bring in, and this.name is this specific instance of the class is the name of it 
    }
}

// this is instatiation, its like building the house with the blueprint, so the class is the blueprint, and instation is building it 
const jacob = new Instructor({ name: 'Jacob Mason'}) // const jacob is the class object!!! and your creating the instance of the class Instructor 
console.log(jacob.name)

// adding instance methods to a class 

class Instructor {
    constructor({ name, role = 'assistant' }) {
      this.name = name;
      this.role = role;
    }
  
    renderDetails() {
      console.log(`${this.name}: ${this.role}`); // you use this to make sure it refrences to this instance of the class object 
    }
  }
  // YOU NEED TO FIRST INSTATIATE IT THEN YOU CAN WORK WITH IT AS A OBJECT 
  const jon = new Instructor({name: 'Jon Snow'}); // instationating the the class Instructor to jon snow with the object varName of jon 
  const brayden = new Instructor({name: 'Brayden', role: 'teacher'}); // adding a new instance of instructor name brayden and teacher
  jon.renderDetails(); // returns jon snow assistant
  brayden.renderDetails(); // returns brayden role teacher 

  // can use classes for functions with static methods as a helper class 
  class StringFomatter {
      static add(x, y){
          return x + y
      }
      static camelCase(string){
        return string
    } // examples of it 
}
  }
// class should be responsible for only one thing not multiple things 
  class Instructor { // starting the class instructor 
    constructor({ name, role = "assistant" }) {
      this.role = role; // setting the variables for the class / data for it 
      this.name = name;
    }
  
    // Instance method
    renderDetails() { // an method of the created instance that you make 
      console.log(`${this.name} - ${this.role}`);
    }
  
    // Base case static method
    static helloWorld() {
      console.log('Hi there');
    }
  
    // Static method
    static canTeach(instructor) { // this tells you that it takes the instuctor instance as argument/parameters
      return (instructor.role === 'classroom');
    }
  }
  
  let juniorInstructor = new Instructor({ 'name' : 'Brian' });
  let seniorInstructor = new Instructor({ 'name' : 'Alice', "role" : "classroom" });
  
  juniorInstructor.renderDetails(); // "Brian - assistant"
  seniorInstructor.renderDetails(); // "Alice - classroom"
  
  Instructor.helloWorld(); // "Hi there"
  
  // "Brian can teach: false"
  console.log(
    `${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}`
  );
  
  // "Alice can teach: true"
  console.log(
    `${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}`
  );