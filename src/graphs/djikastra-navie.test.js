
import {EdgeWeightedDiGraph} from './edge-weighted-digraph';
import {ShortestPaths} from './djikastra-naive';

describe("Djikstra's naive implmentation", () => {
    
    it("can find minimum distances", () => {
        const g = new EdgeWeightedDiGraph(5);

        g.addEdge(0,1,1);
        g.addEdge(1,2,2);
        g.addEdge(2,3,1);
        g.addEdge(3,4,5);
        g.addEdge(1,4,1);
       

        const paths = new ShortestPaths(g, 0);
        expect(paths.getDistances()[1]).toBe(-1);
        
        paths.run();
        expect(paths.getDistances()[1]).toBe(1);
        expect(paths.getDistances()[2]).toBe(3);
        expect(paths.getDistances()[3]).toBe(4);
        expect(paths.getDistances()[4]).toBe(2);
    })
})