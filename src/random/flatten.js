
// obj = {
//     "key1": {
//         a: {
//             i: 2
//         },
//         b: 1,
//         c: {
//             j: 3,
//             k: {
//                 l: 1, m: 2
//             }
//         },
//         d: 5
//     },
//     "key2": 'test',
//     "key3": 'test1'
// }

function flatten(obj, parentKey) {

    let newObj = {};

    for (let key of Object.keys(obj)) {
        let newKey = parentKey ? parentKey + '.' + key : key;

        //case 1 keys with primitive values
        if (typeof (obj[key]) !== 'object') {
            newObj[newKey] = obj[key];
        }
        else {
            let t = flatten(obj[key], newKey);
            Object.keys(t).map(k => newObj[k] = t[k]);
        }

        //case2 keys with objects
    }

    return newObj;

}

export { flatten }

