const head = require("../head.js");
const assertEqual = require("../assertEqual.js")

console.log(assertEqual(head([]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));