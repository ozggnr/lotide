const assertEqual = require("./assertEqual.js")
const eqArrays = function(arr1, arr2) {
  //first and foremost the length of the arrays should be equal
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      // compare each element one to one if they have the same value and same type
      if (arr1[i] !== arr2[i]) {
        //if they equal strictly, we can continue with the next element
          return false;
      }
    }
    return true;
  } else {
      return false;
  }
}
 module.exports = eqArrays;