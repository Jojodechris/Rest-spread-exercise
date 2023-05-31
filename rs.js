
//Refactor
function filterOutOdds(...nums) {
    return nums.filter(num => num % 2 === 0);
  }


//FindMin
// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
// Make sure to do this using the rest and spread operator.

function findMin (...num) {
    return Math.min (...num);
}

// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

function mergeObjects ({...object1},{...object2}) {
    const merge = {object1,...object2}
    return Object.assign({},object1,object2);
}

// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

function doubleAndReturnArgs(array, ...number) {
    const doubleNumber = number.map(num => num * 2);
   return [...array,...doubleNumber];
}

// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!
// Make sure that you are always returning a new array or object and not modifying the existing inputs.

function removeRandomItem(...items) {
    // Get a random index between 0 and the length of the array.
    const randomIndex = Math.floor(Math.random() * items.length);
  
    // Remove the item at the random index from the array.
    return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
  }
  
  /** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  }


  /** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
  
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}

  