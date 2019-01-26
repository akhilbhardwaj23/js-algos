import { twoSum } from './two-sum';
describe("Two Sum", () => {
    it("can find two elements which satisfies the given sum", () => {
        let arr = [8, 8, 4, 4, -4,-4, -1, 3, -1, -1, -1, -6, -4, 3, 2, 9, 6, 12, 22];

        //[-6, -4, -1, 2,3,4, 6,8, 9, 12, 22]

        let answer = twoSum(arr, 2);

        expect(answer).toEqual([[-6, 8], [-4, 6], [-1, 3]]);
    })
})