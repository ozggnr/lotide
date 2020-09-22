const eqArrays = function(arr1, arr2) {
  //first and foremost the length of the arrays should be equal
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      // compare each element one to one if they have the same value and same type
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  } else {
      return false;
  }
}
// eqObjects function take in two objects and returns true or false, based on a perfect match.
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //key1 and key2 are arrays which include the keys of objects
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  //the same number of keys
  if (key1.length === key2.length) {
    for (let item of key1) {
      if (Array.isArray(object1[item])){
        return eqArrays(object1[item],object2[item]);
      }
      else if (object1[item] !== object2[item]){
        return false;
      }
    }
    
    return true;
    //if the length of the arrays are not equal, this means arrays are different
  } else {
      return false;
  }
};
module.exports = eqObjects;

