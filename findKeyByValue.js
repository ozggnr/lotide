const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F60C)}` + "Assertion Passed: " + `${actual}` + " === " + `${expected}`);
  } else {
    console.log(`${String.fromCharCode(0x26D4)}` + "Assertion failed: " + `${actual} `+ " !== " + `${expected}`);
  }
};
//search for a key on an object where its value matches a given value, output shoul be genre;
//genre is an object, movie is the value of a key
const findKeyByValue = function(genres, movie) {
  for (let item in genres) {
    if (genres[item] === movie) {
      return item;
    }
  }
  return undefined;
  
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  horror: "Ring"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Ring"),"horror");