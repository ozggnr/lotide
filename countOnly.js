// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let obj = {};
  count = 1; //it will count the strings found in the input array, if it exist
  for (let item in itemsToCount) {
    if (itemsToCount[item] === itemsToCount.hasOwnProperty(item)) {
      //if item is inside the allItems array, it increase the count by one;
      if (allItems.includes(item)) {
        obj[item] = count;
        count++;
      }
    }
  }
  return obj;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

module.exports = countOnly;