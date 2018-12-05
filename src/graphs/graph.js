
class Edge {
    constructor(v, w){
        this.v = v;
        this.w = w;
    }
}

class Graph{

    constructor(v){
        this.v = v;
        this.adj = {};

        for(let i =0; i < v; i++){
            this.adj[i] = [];
        }
    }

    addEdge = (v, w) => {
        this.adj[v].push(w);
        this.adj[w].push(v);
    }

    edges = () =>{
        let edges = [];
        Object.keys(this.adj).map((v) => {
            let items = this.adj[v];

            for(let w of items){
                edges.push(new Edge(v, w));
            }
        })
        return edges;
    }

    adj = (v) =>{
        return this.adj[v];
    }

    vertices = () => {
        return Object.keys(this.adj).length;
    }

    print = () => {
        this.edges().map(e => console.log(e.v, e.w));
    }
}

export {
    Graph,
    Edge
}