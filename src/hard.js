function checkDisarium(num) {
    let numString = num.toString()

    let total = 0
    let isDisarium = false
    let temp

    for (let i = 0; i <= numString.length; i++){
        temp = numString.charAt(i)
        temp = Number(temp)
        total += Math.pow(temp, i + 1)

    }
    if (total == num){
        isDisarium = true
    }
    return isDisarium
}

console.log(checkDisarium(89))

module.exports = checkDisarium;