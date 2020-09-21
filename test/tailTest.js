const tail = require("../tail.js");
const assertEqual = require("../assertEqual.js");
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
console.log(assertEqual(words.length, 3)); // original array should still have 3 elements!

console.log(assertEqual(tail(words).length,2));
// console.log(tail(["Hello", "Lighthouse", "Labs"]))