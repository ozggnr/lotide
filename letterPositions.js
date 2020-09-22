const letterPositions = function(sentence) {
  const result = {};
  let list = [];
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) { //take each letter from given string
    if (sentence[i] !== " ") {//skip the spaces
      if (result[sentence[i]]){
        result[sentence[i]].push(i);
      }
      else {
        list.push(i);
        result[sentence[i]] = list;
      }
      list = []
    }
  }
  return result;
};
// console.log(letterPositions("hello"))
module.exports = letterPositions;



