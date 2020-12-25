const assert = require("assert");
const resolve = require("./task5.js");

assert.deepStrictEqual(resolve([1,3,5,6], 5), 2);
assert.deepStrictEqual(resolve([1,3,5,6], 2), 1);
assert.deepStrictEqual(resolve([1,3,5,6], 7), 4);
assert.deepStrictEqual(resolve([1,3,5,6], 0), 0);
assert.deepStrictEqual(resolve([1], 0), 0);