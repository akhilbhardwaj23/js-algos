import {MinHeap} from './min-heap';

describe("Min Heap", () =>{
    it("returns min key", () =>{
        let heap = new MinHeap();

        heap.insert(10);
        heap.insert(11);
        heap.insert(5);
        heap.insert(6);
        heap.insert(0);
        heap.insert(12);
        heap.insert(9);
        heap.insert(18);
        heap.insert(100);
        
        expect(heap.extractMin()).toEqual(0);
        expect(heap.extractMin()).toEqual(5);
        expect(heap.extractMin()).toEqual(6);
        expect(heap.extractMin()).toEqual(9);
        expect(heap.extractMin()).toEqual(10);
        expect(heap.extractMin()).toEqual(11);
        expect(heap.extractMin()).toEqual(12);
        expect(heap.extractMin()).toEqual(18);
        expect(heap.extractMin()).toEqual(100);
        expect(heap.extractMin()).toEqual(undefined);
    })
})