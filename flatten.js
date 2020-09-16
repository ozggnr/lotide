const eqArrays = function(arr1, arr2) {
  //first and foremost the length of the arrays should be equal
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      // compare each element one to one if they have the same value and same type or not
      if (arr1[i] !== arr2[i]) {
        return false;
      } 
    }
    return true;
    //if the length of the arrays are not equal, this means arrays are different
  } else {
      return false;
  }
}
const flatten = function(nestedArray) {
  //create empty array to push each element in the nested array
  let list = []; 
  for (let i = 0; i < nestedArray.length; i++) {
    //if there is an array inside the outer array,then push these items also to the list 
    if (Array.isArray(nestedArray[i])) {
      for (let j = 0 ; j < nestedArray[i].length; j++){
        list.push(nestedArray[i][j]);
      }
    } else {
    list.push(nestedArray[i]);
    }
  }
  return list;
}
console.log(flatten([1, 2, [3, 4], 5, [6]]))
const assertArraysEqual = function (left, right) {
  if (eqArrays(left, right)) { //if the function eqArrays return true, print out as "Assertion Passed" otherwise it will show "Assertion failed"
    console.log(`${String.fromCodePoint(0x1F60C)}` + "Assertion Passed: " + `${left}` + " === " + `${right}`);
  }
  else {
    console.log(`${String.fromCharCode(0x26D4)}` + "Assertion failed: " + `${left}` + " !== " + `${right}`);
  }
}
// assertArraysEqual([1, 2, 3], [1, 2, 3])
// assertArraysEqual([1, 2, 3], [1, 2, "3"])