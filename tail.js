const assertEqual = require('./assertEqual')

const tail = function(arr) {
  // console.log(arr.slice(1));
  return arr.slice(1);
};

// tail([1,2,3,4,5]))
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
// console.log(tail(words))


module.exports = tail; //only get the function