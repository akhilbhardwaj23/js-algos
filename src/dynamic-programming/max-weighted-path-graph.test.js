import {PathGraph} from './max-weighted-path-graph';

describe("Max weight subset problem", () =>{
    it("can compute the max weighted subset", () =>{
        let arr = [1,4,5,5,10,11,23,45]
        let g = new PathGraph(arr);

        expect(g.maxWeightSubset(arr, arr.length)).toBe(65);
    })

    it("can compute the max weighted subset with negative weights", () =>{
        let arr = [1,4,5,5,10,11,23,-45, -66]
        let arr1 = [1,4,5,5,10,11,23]
        let g = new PathGraph(arr);
        let g1 = new PathGraph(arr1);

        expect(g.maxWeightSubset(arr, arr.length)).toBe(g1.maxWeightSubset(arr1, arr1.length));
    })
})