import QuickUnion from './quick-union';
import QuickFind from './quick-find';

describe("Quick Union", ()=>{

    //For values 0 through 100
    const store = new QuickUnion(11);

    it("works", () =>{
        store.union(0,1);
        store.union(1,2);
        store.union(9,10)


        expect(store.connected(1,2)).toBeTruthy();
        expect(store.connected(4,2)).toBeFalsy();
        expect(store.connected(10,2)).toBeFalsy();

        store.union(10,0);

        expect(store.connected(10,2)).toBeTruthy();
        expect(store.connected(10,4)).toBeFalsy();

        store.union(2,4);
        expect(store.connected(10,4)).toBeTruthy();

    })

    
})

describe("Quick Find", ()=>{

    //For values 0 through 100
    const store = new QuickFind(11);

    it("works", () =>{
        store.union(0,1);
        store.union(1,2);
        store.union(9,10)


        expect(store.connected(1,2)).toBeTruthy();
        expect(store.connected(4,2)).toBeFalsy();
        expect(store.connected(10,2)).toBeFalsy();

        store.union(10,0);

        expect(store.connected(10,2)).toBeTruthy();
        expect(store.connected(10,4)).toBeFalsy();

        store.union(2,4);
        expect(store.connected(10,4)).toBeTruthy();

    })
});