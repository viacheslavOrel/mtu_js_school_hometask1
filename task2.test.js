const assert = require("assert");
const resolve = require("./task2.js");

assert.strictEqual(resolve(121), true);
assert.strictEqual(resolve(-121), false);
assert.strictEqual(resolve(10), false);
assert.strictEqual(resolve(-101), false);
assert.strictEqual(resolve(1984), false);
assert.strictEqual(resolve(2002), true);
