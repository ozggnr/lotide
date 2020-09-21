const eqArrays = require("./eqArrays");

const assertArraysEqual = function (left, right) {
  if (eqArrays(left, right)) { //if the function eqArrays return true, print out as "Assertion Passed" otherwise it will show "Assertion failed"
    console.log(`${String.fromCodePoint(0x1F60C)}` + "Assertion Passed: " + `${left}` + " === " + `${right}`);
  }
  else {
    console.log(`${String.fromCharCode(0x26D4)}` + "Assertion failed: " + `${left}` + " !== " + `${right}`);
  }
}


module.exports = assertArraysEqual;