import { threeSum } from './three-sum';

describe("Three Sum", () => {
    it("can find three elements which add up to the given sum", () => {
        let arr = [-1, 0, 1, 2, -1, -4];

        //[-6, -4, -1, 2,3,4, 6,8, 9, 12, 22]

        let answer = threeSum(arr, 0);

        //expect(answer).toEqual( [[-1, -1, 2], [-1, 0, 1]]);

        expect(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6], 0).sort()).toEqual([[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]].sort());
    })
})