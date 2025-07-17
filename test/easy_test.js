const test = require('node:test');
const { 
    checkPassOrFail, 
    roundOff, 
    degreesToRadians, 
    convertToTitleCase, 
    dashingNumbers,
    addListEnds,
    addEvenNumbers,

} = require('../src/easy.js');

const assert = require('assert');


test('checkPassOrFail function', (t) => {
    assert.strictEqual(checkPassOrFail(50), "Pass", 'Passed with marks 50');
    assert.strictEqual(checkPassOrFail(30), "Fail", 'Failed with marks 30');
});

test('roundOff function', (t) => {
    assert.strictEqual(roundOff(0.7788964, 2), "0.78", 'Rounded off 0.7788964 to 2 decimal places');
});

test('degreesToRadians function', (t) => {
    assert.strictEqual(degreesToRadians(90), "1.571", 'Converted 90 degrees to radians');
});

test('convertToTitleCase function', (t) => {
    assert.strictEqual(convertToTitleCase("hello world! this is a test string."), "Hello World! This Is A Test String.", 'Converted string to title case');
});

test('dashingNumbers function', (t) => {
    assert.strictEqual(dashingNumbers(1234567890), "1-2-3-4-5-6-7-8-9-0", 'Converted number to dashed string');
});

test('addListEnds function', (t) => {
    assert.strictEqual(addListEnds([10, 20, 30, 40, 50]), 60, 'Sum of first and last elements in the array');
});

test('addEvenNumbers function', (t) => {
    assert.strictEqual(addEvenNumbers(10), 30, 'Sum of even numbers from 0 to 10');
    assert.strictEqual(addEvenNumbers(5), 6, 'Sum of even numbers from 0 to 5');
});

