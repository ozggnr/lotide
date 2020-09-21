const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

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

module.exports = middle;
