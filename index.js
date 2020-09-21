const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertEqual   = require('./assertEqual');
const eqArrays   = require('./eqArrays');
const flatten = require('./flatten');
const countOnly = require('./countOnly');
const assertArraysEqual = require('./assertArraysEqual');
const eqObjects  = require('./eqObjects');
const without = require('./without');
const map = require('./map');
const letterPositions  = require('./letterPositions');
const takeUntil = require('./takeUntil');
const assertObjectsEqual  = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');



module.exports = {
  head , 
  tail,
  middle,
  assertEqual, 
  eqArrays ,
  flatten ,
  countOnly ,
  eqObjects ,
  assertArraysEqual ,
  without,
  map ,
  letterPositions,
  takeUntil,
  assertObjectsEqual,
  countLetters ,
  findKey ,
  findKeyByValue 
};