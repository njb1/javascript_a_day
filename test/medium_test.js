const test = require('node:test');
const {
    checkPronic,    
    replaceSmiley,
    hideCreditCard,
    maxWordsCanType
} = require('../src/medium.js');

const assert = require('assert');

test("checkPronic function", (t) => {
    assert.strictEqual(checkPronic(42), true, "Its a pronic number")
})

test('replaceSmiley function', (t) =>{
    assert.strictEqual(replaceSmiley("hello :-) world"), "hello :-( world")
})

test('hideCreditCard function', (t) => {
    assert.strictEqual(hideCreditCard("1111222233334444"), "############4444", 'the hidden cc is ############4444')
})

test("maxWorsCanType function", (t) => {
    assert.strictEqual(maxWordsCanType("hello", "xo"), false, "Cant type this")
    assert.strictEqual(maxWordsCanType("hello", "xy"), true, "Cant type this")
})