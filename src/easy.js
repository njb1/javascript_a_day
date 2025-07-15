/**
 * Checks if the given marks are a passing score (>= 40) and returns "Pass" or "Fail".
 *
 * @param {number} marks - The marks to evaluate.
 * @returns {string} "Pass" if marks >= 40, otherwise "Fail".
 */
function checkPassOrFail(marks) {
    if (marks >= 40){
        //console.log("Pass");
        return "Pass";
    }
    else {
        //console.log("Fail");
        return "Fail";
    }
}


/**
 * Rounds a number to a specified number of decimal places and returns it as a string.
 *
 * @param {number} num - The number to round.
 * @param {number} ndigits - The number of decimal places to round to.
 * @returns {string} The rounded number as a string.
 */
function roundOff(num, ndigits) {
    let rounded = num.toFixed(ndigits);
    return rounded;s
}


/**
 * Converts an angle from degrees to radians.
 *
 * @param {number} degrees - The angle in degrees to convert.
 * @returns {string} The angle in radians, rounded to three decimal places as a string.
 */
function degreesToRadians(degrees) {
    pi = Math.PI;
    let radians = degrees * (pi / 180);
    return radians.toFixed(3);
}


/**
 * Converts a string to title case, capitalizing the first letter of each word.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The converted string in title case.
 */
function convertToTitleCase(str) {
    let changed_text = str.replace(/(^\w|\s\w)/g, str => str.toUpperCase());
    return changed_text;
}


/**
 * Converts a number to a string with dashes between each digit.
 *
 * @param {number} num - The number to be converted.
 * @returns {string} The string representation of the number with dashes between digits.
 */
function dashingNumbers(num) {
    let numStr = num.toString();
    let dashedStr = "";
    for (let i = 0; i < numStr.length; i++) {
        dashedStr += numStr[i];
        if (i < numStr.length - 1) {
            dashedStr += "-";
        }
    }
    return dashedStr;
}


/**
 * Calculates the sum of the first and last elements in an array.
 * 
 * @param {*} arr 
 * @returns {number}
 */
function addListEnds(arr) {
    first = arr[0];
    last = arr[arr.length - 1];
    sum_of_ends = first + last;
    return sum_of_ends;
}

/**
 * Adds all even numbers from 0 to n (inclusive).
 * 
 * @param {} n 
 * @returns 
 */
function addEvenNumbers(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(addEvenNumbers(10));

module.exports = {
    checkPassOrFail,
    roundOff,
    degreesToRadians,
    convertToTitleCase,
    dashingNumbers,
    addListEnds,
    addEvenNumbers
};