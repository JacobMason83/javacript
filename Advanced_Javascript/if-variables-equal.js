const isEqual = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
  
    if (obj1Keys.length !== obj2Keys.length) { // checking to see if they have the same about of keys
      return false;
    }
  
    for (let objKey of obj1Keys) { // for all the objects in the obj1keys 
      if (obj1[objKey] !== obj2[objKey]) { // if obj1[objkye] not == to obj2[objKey] 
        return false; // return false 
      }
    }
  
    return true; // if i passes both tests then it will return true
  }; // this is works for shallow levels , but if you have other data structures this will not work 
  
  const obj1 = {
    name: "Kristine",
    age: 13,
    favorites: {
      food: "Pizza",
      vacation: "Disneyland"
    }
  };
  
  const obj2 = {
    name: "Kristine",
    age: 13,
    favorites: {
      food: "Pizza",
      vacation: "Disneyland"
    }
  };
  
  obj1 == obj2;
  isEqual(obj1, obj2); 

  // there is a .isEqual(value, other) will compare both objects deeply instead of shallow 
  // lodash library is a great way to do nested deeply objects 
  // if people are following best practices then there should only be 2 or 3 levels deep nesting of the objects 