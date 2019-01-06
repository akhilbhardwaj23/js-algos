
class DirectedEdge {
    constructor(v, w, weight){
        this.from = v;
        this.to = w;
        this.weight = weight;
    }
}

class EdgeWeightedDiGraph{

    constructor(v){
        this.v = v;
        this.adj = {};

        for(let i =0; i < v; i++){
            this.adj[i] = [];
        }
    }

    vertices = () => {
       let items = [];

       for(let i =0; i < this.v; i++){
            items.push(i);
       }

       return items;
    }

    adjacents = (i) => {
        return this.adj[i];
    }
    
    addEdge = (v, w, wt) => {
        this.adj[v].push(new DirectedEdge(v,w,wt));
    }
}

export {
    EdgeWeightedDiGraph,
    DirectedEdge
}