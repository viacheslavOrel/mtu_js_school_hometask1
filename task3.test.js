const assert = require("assert");
const resolve = require("./task3.js");

assert.strictEqual(resolve('()'), true);
assert.strictEqual(resolve('()[]{}'), true);
assert.strictEqual(resolve('(]'), false);
assert.strictEqual(resolve('([)]'), false);
assert.strictEqual(resolve('{[]}'), true);
assert.strictEqual(resolve('{{}[[[())()()()'), false);