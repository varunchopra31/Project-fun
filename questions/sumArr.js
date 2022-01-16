/**
 * Given an array [“123f”, “1dsa12”, “1212ds”, “65fd”, “sadfa”, “asdasd”]
 * Each item can contain 0-9, a-z, A-Z where a-z, A-Z characters are unwanted
 * Sum of all the numbers after removing all the unwanted characters 123+112+1212+65
**/

const sumArr = (arr) => {
    let result = 0

    arr.forEach(number => {
        result = result + parseInt(formNumber(number))
    })
    return result
};

formNumber = num => {
    if (/\d/.test(num)) {
        return num.split('').filter(element => {
            return !isNaN(element)
        }).join('')
    }
    return 0
}

console.log(sumArr(["123f", "1dsa12", "1212ds", "65fd", "sadfa", "asdasd"])); // 1512
console.log(sumArr(["asdasd"])); // 0
console.log(sumArr(["asdasd12"])); // 12
console.log(sumArr(["12"])); // 12
