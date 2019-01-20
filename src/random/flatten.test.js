
import {flatten} from './flatten';

const obj = {
    "key1": {
        a: {
            i: 2
        },
        b: 1,
        c: {
            j: 3,
            k: {
                l: 1, m: 2
            }
        },
        d: 5
    },
    "key2": 'test',
    "key3": 'test1'
}

describe("it can flatten an object", () => {
    it("flaten function works", () => {
        let result = flatten(obj, '');

        console.log(result);
    })
})
