/**
 * Checks if a number is pronic.
 * A pronic number is one where consecutive integers in its range can be multiplied to get it.
 * @param {*} num 
 * @returns {boolean}
 */
function checkPronic(num) {
    myNums = num.toString()
    isPronic = false

    for (let i =0; i <= num; i++){
        if (i * (i + 1) == num){
            isPronic = true
        }

    }

    return isPronic
}

/**
 * Replaces a smiley face with a frowny face
 * @param {string} str
 * @returns {string}
 */
function replaceSmiley(input) {
    let newString = "";

    for (let i=0; i<= input.length; i++){
        if (input.charAt(i) == ":" && input.charAt(i + 1) == "-" && input.charAt(i + 2) == ")"){
            newString = input.replace(":-)", ":-(")
        }
    };

    return newString
}

function hideCreditCard(cardNumber) {
    cardNumber = cardNumber.replaceAll("-", "")
    let hashed_out = '#'.repeat(cardNumber.length - 4)
    let last_four = cardNumber.slice(-4)

    return hashed_out + last_four
}


function maxWordsCanType(str, brokenLetters) {
    let blSet = new Set(brokenLetters);
    canType = false

    for (let i of str) {
        if (blSet.has(i)) {
            canType = false; // Cannot type if broken letter is found
        }
        else{
            canType = true
        }
    }
    return canType; // Can type if no broken letters are found
}

console.log(maxWordsCanType("hello", "xo"));

module.exports = {
    checkPronic,
    hideCreditCard,
    replaceSmiley,
    maxWordsCanType
};
