import { threeSum } from './three-sum';

describe("Three Sum", () => {
    it("can find three elements which add up to the given sum", () => {
        let arr = [-1, 0, 1, 2, -1, -4];

        //[-6, -4, -1, 2,3,4, 6,8, 9, 12, 22]

        let answer = threeSum(arr, 0);

        expect(answer).toEqual( [[-1, -1, 2], [-1, 0, 1]]);
    })
})