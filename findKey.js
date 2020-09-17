//this function takes in an object and a callback
// and return the key. If the key is not found, return undefined
const findKey = (obj, callback) => {
  let bigKey = Object.values(obj)
  for (let el of bigKey) {
    if (callback(el)){
      for (let item of Object.keys(obj)) {
        if (el === obj[item]){
          return item;
        }
      }
    }
  }
  return undefined; 
}

const result = findKey({
                        "Blue Hill": { stars: 1 },
                        "Akaleri":   { stars: 3 },
                        "noma":      { stars: 2 },
                        "elBulli":   { stars: 3 },
                        "Ora":       { stars: 2 },
                        "Akelarre":  { stars: 3 }
                      }, x => x.stars === 2) // => noma

console.log(result);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `${String.fromCodePoint(0x1F60C)}` + "Assertion Passed: " + `${actual}` + " === " + `${expected}`;
  } else {
    return `${String.fromCharCode(0x26D4)}` + "Assertion failed: " + `${actual} `+ " !== " + `${expected}`;
  }
};
console.log(assertEqual(result, "noma"));
console.log(assertEqual(result, "Blue Hill"));