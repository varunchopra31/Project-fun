// Given an array of zeros and ones, segregate all the zeros to the left
// [1,0,0,1,1,0,1,0,1] => [0,0,0,0,1,1,1,1,1]

// --------------------bakwaas solution---------------
// const segregate = arr => {
//     let result = []
//     let oneCount = 0
//     arr.forEach(element => {
//         if (element === 0) {
//             result.push(0)
//         } else {
//             oneCount++
//         }
//     })
//     for (let i = 0; i < oneCount; i++) {
//         result.push(1)
//     }
//     return result
// }

// console.log(segregate([1,0,0,1,1,0,1,0,1]))

// -----------better------------------
const segregate = arr => {
    for (let i = 0, j = arr.length - 1; i < j;) {
        if (arr[i] !== 1) {
            i++
        }
        if (arr[j] !== 0) {
            j--
        }
        if (arr[i] === 1 && arr[j] === 0) {
            let c = arr[i]
            arr[i] = arr[j]
            arr[j] = c
        }
    }
    return arr
}
console.log(segregate([1,1,1,1,1,0,0,0,0,0,0]))
