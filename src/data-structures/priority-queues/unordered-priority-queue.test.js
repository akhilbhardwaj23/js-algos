import {UnorderedPQ} from './unordered-priority-queue';


describe("Unordered priority queue", () =>{
    it('did insert items to the queue', () =>{
        let pq = new UnorderedPQ();
        pq.insert(1);
        pq.insert(10);
        pq.insert(5);
        pq.insert(9);
        expect(pq.size()).toEqual(4);
    })

    it('can delete max item from the queue', () =>{
        let pq = new UnorderedPQ();

        pq.insert(1);
        pq.insert(10);
        pq.insert(5);
        pq.insert(9);
        let max = pq.delMax();
        expect(max).toEqual(10);
        max = pq.delMax();
        expect(max).toEqual(9);
        max = pq.delMax();
        expect(max).toEqual(5);
        max = pq.delMax();
        expect(max).toEqual(1);
    })
})