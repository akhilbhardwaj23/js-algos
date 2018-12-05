class DepthFirstPaths{
    /**
     * 
     * @param {Graph} G 
     * @param {Start vertex} s 
     */
    constructor(G, s){
        this.marked = [];
        this.edgeTo = [];
        this.s = s;
        this.G = G;

        this.dfs(this.G, this.s);
    }

    getEdgeTo = (v) =>{
        return this.edgeTo[v];
    }

    dfs = (g, v) => {
        this.marked[v] = true;
        for(let w of g.adjacents(v)){
            if(!this.marked[w]){
             this.dfs(g, w);
             this.edgeTo[w] = v;
            }
        }
    }
}

export {
    DepthFirstPaths
}