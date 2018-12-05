import {Graph} from './graph';
let g;

describe("Graph" , () =>{
    g = new Graph(10);
    it("can add edges to Graphs", () =>{
        expect(g.vertices()).toEqual(10);
        expect(g.edges().length).toEqual(0);
        g.addEdge(0,1)
        expect(g.edges().length).toEqual(2);
        g.addEdge(1,2);
        expect(g.edges().length).toEqual(4);
    })
})