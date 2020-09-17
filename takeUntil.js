//our function will take two parameters array and callback function
// and  it will slice of the array with elements taken from the beginning.
const takeUntil = function(array, callback) {
  let output = [];
  for (let el of array) {
    if (!callback(el)){
      output.push(el);
    }
    else {
      break;
    }
  }
  return output;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

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

const assertArraysEqual = function (left, right) {
  if (eqArrays(left, right)) { //if the function eqArrays return true, print out as "Assertion Passed" otherwise it will show "Assertion failed"
    console.log(`${String.fromCodePoint(0x1F60C)}` + "Assertion Passed: " + `${left}` + " === " + `${right}`);
  }
  else {
    console.log(`${String.fromCharCode(0x26D4)}` + "Assertion failed: " + `${left}` + " !== " + `${right}`);
  }
}

assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ])
assertArraysEqual(results2,[ "I've", 'been', 'to', 'Hollywood' ])