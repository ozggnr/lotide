//our map function will take in an array to map and a callback function
// return a new array
const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  let output = [];
  for(let item of array) {
    output.push(callback(item));
  }
  return output;
}
const results1 = map(words, word => word[0]);
console.log(results1);

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
assertArraysEqual(map(words, word => word[0]),[ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(words, word => word[1]),[ 'r', 'o', 'o', 'a', 'o' ]);
assertArraysEqual(map(words, word => word[2]),[ 'o', 'n', undefined,'j', 'm' ]);