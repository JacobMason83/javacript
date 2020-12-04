// class RemoveFrontOrBack {
//   constructor(array){
//    this.array = array;
//    this.start = true;
   
// }
//   numberPopper() {
//     this.start = !this.start;
//     return this.start ? this.array.pop() : this.array.shift();
//     }
//   }

// let arrayPopper = RemoveFrontOrBack([1,2,3,4,5]);
// console.log(arrayPopper.numberPopper());


class ArrayPopper {
    constructor(arr){
    this.arr = arr;
    this.atBeginning = true;
  }
    togglePopper() {
      this.atBeginning = !this.atBeginning; // this is saying that at the begining is not equal to the beginning so that it will switch each time 
      return this.atBeginning ? this.arr.pop() : this.arr.shift(); // and depending on condition atBeginning if its true pop if false shift
    }
  }
  
  const ap = new ArrayPopper([1,2,3,4,5]);
  console.log(ap.togglePopper());// 1
  console.log(ap.togglePopper());// 5
  console.log(ap.togglePopper());// 2
  console.log(ap.togglePopper());// 4
  console.log(ap.togglePopper()); //3

  const arr = [1,2,3,4,5];
  let flipSides = false;

  funciton ArrayPopper() {
      flipSides = !flipSides;
      return flipSides ? arr.pop() : arr.shift();
  }