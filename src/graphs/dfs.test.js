import {DepthFirstPaths} from './dfs';
import {Graph} from './graph';

describe("Depth first search" , () =>{
    let g = new Graph(20);
    g.addEdge(1,0);
    g.addEdge(2,3);
    g.addEdge(1, 19);
    g.addEdge(19, 10)
    g.addEdge(10,7)
  
    
    it("can reach a vertex", () =>{
        const dfs = new DepthFirstPaths(g, 1);
        expect(dfs.edgeTo[19]).toBe(1);
    });

    it("returns a falsy value, if destination can not be reached", () =>{
        const dfs = new DepthFirstPaths(g, 1);
        expect(dfs.edgeTo[8]).toBeFalsy();
    })
});