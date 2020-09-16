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

const assertArraysEqual = function (left, right) {
  if (eqArrays(left, right)) { //if the function eqArrays return true, print out as "Assertion Passed" otherwise it will show "Assertion failed"
    console.log(`${String.fromCodePoint(0x1F60C)}` + "Assertion Passed: " + `${left}` + " === " + `${right}`);
  }
  else {
    console.log(`${String.fromCharCode(0x26D4)}` + "Assertion failed: " + `${left}` + " !== " + `${right}`);
  }
}
const middle = function(array) {
  let list = [];
  const minIndex = array.length/2 - 1;
  const maxIndex = array.length/2;
  if (array.length < 3) {
    return list;
  } else if (array.length %2 !== 0){
      let index = Math.floor(array.length/2);
      list.push(array[index]);
  } else {
      list.push(array[minIndex],array[maxIndex]);
  }
  return list;
}
assertArraysEqual(middle([1,2]),[])
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1, 2, 3, 4]),[2,3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]) // => [3, 4]
