let arr = [1, 2, 3, [4, 5, [6, 7, [8, [9]]]]]

// ref MDN
// const flattenArray = arr => {
//     let result = []
//     let stack = [...arr]

//     while (stack.length) {
//         const next = stack.pop()
//         if (typeof next === 'object')
//             stack.push(...next)
//         else
//             result.push(next)
//     }
//     return result.reverse()
// }

// recursion
const flattenArray = arr => {
    const result = []
    arr.forEach(element => {
        if (typeof element === 'object')
            flattenArray(...element)
        else
            result.push(element)
    });
    return result
}

console.log('Answer:', flattenArray(arr))