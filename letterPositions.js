const letterPositions = function(sentence) {
  const result = {};
  let list = [];
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) { //take each letter from given string
    // console.log(sentence[i])
    if (sentence[i] !== " ") {//skip the spaces
      // console.log(sentence[i])
      if (result[sentence[i]]){
        result[sentence[i]].push(i);
      }
      else {
        list.push(i);
        result[sentence[i]] = list;
      }
      list = []
    }
  }
  return result;
};
console.log(letterPositions("hello"))
const eqArrays = function(arr1, arr2) {
  console.log(arr1)
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

const assertArraysEqual = function (left, right) {
  if (eqArrays(left, right)) { //if the function eqArrays return true, print out as "Assertion Passed" otherwise it will show "Assertion failed"
    console.log(`${String.fromCodePoint(0x1F60C)}` + "Assertion Passed: " + `${left}` + " === " + `${right}`);
  }
  else {
    console.log(`${String.fromCharCode(0x26D4)}` + "Assertion failed: " + `${left}` + " !== " + `${right}`);
  }
}
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2,3]);
assertArraysEqual(letterPositions("hello").o, [4]);



