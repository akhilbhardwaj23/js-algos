import { Merge, MergeSort } from './merge-sort';

describe("Merge Sort", () => {
    it("can sort an array", () => {
        const arr = [10, 20, 1, 6, 19, 23, 11, 16, 18, 100, 5, 33]
        expect(MergeSort(arr)).toEqual([1,5,6,10,11,16,18,19,20,23,33,100]);
    })

    it("can merge two sorted arrays", () => {
        const arr1 = [1,3,5,7];
        const arr2 = [2,4,6]

        expect(Merge(arr1, arr2)).toEqual([1,2,3,4,5,6,7]);
    })
})