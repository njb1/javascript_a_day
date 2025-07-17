const test = require('node:test');
const checkDisarium = require('../src/hard.js');

const assert = require('assert');

test("isDisarium function", (t) =>{
    assert.strictEqual(checkDisarium(89), true, "its a disarium number")
    assert.strictEqual(checkDisarium(91), false, "its a disarium number")
})