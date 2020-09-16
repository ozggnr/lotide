// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`${String.fromCodePoint(0x1F60C)}` + "Assertion Passed: " + `${actual}` + " === " + `${expected}`);
//   } else {
//     console.log(`${String.fromCharCode(0x26D4)}` + "Assertion failed: " + `${actual} `+ " !== " + `${expected}`);
//   }
// };
const countLetters = function(letter) {
  let result = {};
  for (obj of letter) { //take each letter from given string
    if (obj !== " ") {//skip the spaces
      if (result[obj]){ //if obj key is already in the result object, then increase by 1.
        result[obj] += 1;
      } else {// if there is not an obj in the result object then assign value 1 for this obj key.
        result[obj] = 1
      }
    }
  }
  return result;
}

<<<<<<< HEAD
console.log(countLetters("lighthouse in the house"))
// const resultFinal = countLetters("lighthouse in the house")
=======

>>>>>>> c75616e0b71ca1bb92a29c12413b10920dd2fe2c
