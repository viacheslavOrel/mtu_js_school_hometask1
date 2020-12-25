const assert = require("assert");
const resolve = require("./task4.js");

assert.deepEqual(resolve([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]), [2,2,2,1,4,3,3,9,6,7,19]);