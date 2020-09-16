const eqArrays = function(arr1, arr2) {
  //first and foremost the length of the arrays should be equal
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      // compare each element one to one if they have the same value and same type
      if (arr1[i] === arr2[i]) {
        //if they equal strictly, we can continue with the next element
        continue;
      } else {
          return false;
      }
    }
    return true;
  } else {
      return false;
  }
};
//function which checks if the element of itemsToRemove is equal to the elements of source array
function check(item, eachItem) {
  for (let obj of item) {
    if (obj === eachItem) {
      return true;
    }
  }
  return false;
}

const without = function (source,itemsToRemove) {
  let list = [];
  for (let i = 0; i < itemsToRemove.length; i++) {
    //if the element of the itemsToRemove is equal to elements of source array (if check function returns true), push the source items which is not equal to the itemsToRemove to the list
    if (check(source, itemsToRemove[i])) {
      for (let j = 0; j < source.length; j++) {
        if (itemsToRemove[i] !== source[j]) {
          list.push(source[j]);
        }
      }
    }
  }
  return list;
}
const assertArraysEqual = function (left, right) {
  if (eqArrays(left, right)) { //if the function eqArrays return true, print out as "Assertion Passed" otherwise it will show "Assertion failed"
    console.log(`${String.fromCodePoint(0x1F60C)}` + "Assertion Passed: " + `${left}` + " === " + `${right}`);
  }
  else {
    console.log(`${String.fromCharCode(0x26D4)}` + "Assertion failed: " + `${left}` + " !== " + `${right}`);
  }
}
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without([1, 2, 3], [1]),[2,3])