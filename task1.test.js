const assert = require("assert");
const resolve = require("./task1.js");

assert.strictEqual(resolve("III"), 3);
assert.strictEqual(resolve("VI"), 6);
assert.strictEqual(resolve("IX"), 9);
assert.strictEqual(resolve("LVIII"), 58);
assert.strictEqual(resolve("MCMXCIV"), 1994);