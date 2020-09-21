const assert = require('chai').assert;
const tail  = require('../tail');
const words = ["Yo Yo", "Lighthouse", "Labs"];
describe("tail", () => {
  it("returns 3 for 'words.length'", () => {
    assert.deepEqual(words.length, 3);
  });
  it("returns 2 for [1,2,3]", () => {
    assert.deepEqual(tail(words).length, 2); 
  });
});
