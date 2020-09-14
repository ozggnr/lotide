const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F60C)}` + "Assertion Passed: " + `${actual}` + " === " + `${expected}`);
  } else {
    console.log(`${String.fromCharCode(0x26D4)}` + "Assertion failed: " + `${actual}` + " !== " + `${expected}`);
  }
};

const tail = function(arr) {
  // console.log(arr.slice(1));
  return arr.slice(1);
};

// tail([1,2,3,4,5]))
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

assertEqual(tail(words).length,2);
// console.log(tail(["Hello", "Lighthouse", "Labs"]))