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

module.exports = findKeyByValue;

