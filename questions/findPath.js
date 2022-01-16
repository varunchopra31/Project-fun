/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/

var obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};

let result = undefined

findPath = (objectGiven, stringProvided) => {
    let dotSeparated = stringProvided.split('.');

    for (let i = 0; i < dotSeparated.length; i++) {
        if (objectGiven.hasOwnProperty(dotSeparated[i])) {
            if (typeof objectGiven[dotSeparated[i]] === 'object') {
                let temp = [...dotSeparated]
                dotSeparated.splice(0, 1)
                findPath(objectGiven[temp[i]], dotSeparated.join('.'))
            } else {
                result = objectGiven[dotSeparated[i]]
                break
            }
        }
    }
    return result
}

// ----------------mac singh-------------------
function findPath(objectGiven, stringProvided) {
    let path = stringProvided.split('.');
    let result = objectGiven;
    for (let i = 0; i < path.length; i++) {
        // console.log('result',result)
        // console.log('path',path)
        // console.log('path[i]',path[i])
        if (!result) {
            return undefined;
        }
        result = result[path[i]];
    }
    return result;
}

// console.log(findPath(obj, 'a.b.c')); // 12
// console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
// console.log(findPath(obj, 'a.b.d')); // undefined
// console.log(findPath(obj, 'a.c')); // undefined
// console.log(findPath(obj, 'a.b.c.d')); // undefined
// console.log(findPath(obj, 'a.b.c.d.e')); // undefined
// console.log(findPath(obj, 'a.b.j')); //false
// console.log(findPath(obj, 'a.b.j.k')); //undefined
// console.log(findPath(obj, 'a.k')); //null
