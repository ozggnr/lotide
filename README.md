
tide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ozggnr/lotide`

**Require it:**

`const _ = require('@ozggnr/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*  `head(...)`: finds the head of an array
*  `tail(...)`: finds the tail of an array
*  `middle(...)`: finds the middle item(s) of an array
*  `assertEqual(...)` : test
*  `eqArrays(...)` : find the given arrays are equal or not
*  `flatten(...)`: flatten the nested arrays
*  `countOnly(...)`: count the strings found in the input array, if it exist
*  `eqObjects(...)`: find the given objects are equal or not
*  `assertArraysEqual(...)`: test arrays
*  `without(...)`: return a subset of a given array,                  removing unwanted elements
*  `map(...)`: mapping
*  `letterPositions(...)`: find the letter positions
*  `takeUntil(...)`: slice of the array with elements taken from the beginning
*  `assertObjectsEqual(...)`: test objects
*  `countLetters(...)`: count letters
*  `findKey(...)`: find the key of the object with given callback function
*  `findKeyByValue(...)`: find the key of the object with given value
