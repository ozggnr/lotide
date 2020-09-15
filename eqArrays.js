const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F60C)}` + "Assertion Passed: " + `${actual}` + " === " + `${expected}`);
  } else {
    console.log(`${String.fromCharCode(0x26D4)}` + "Assertion failed: " + `${actual}` + " !== " + `${expected}`);
  }
};
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
}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false) // => false