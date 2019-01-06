/** Naive implementation O(m*n)
 * Start with the source node, compute distances from
 * source to all other unvisited nodes, pick the node
 * which is nearest and mark it visited. In next step
 * compute the distances of unvisited nodes again by updating
 * the distances if there is a new path from just committed
 * node. repeat this for all unvisited nodes.
 */

class ShortestPaths{
    /**
     * 
     * @param {EdgeWeightedDiGraph} G 
     * @param {Start vertex} s 
     */
    constructor(G, s){
        this.s = s;
        this.G = G;

        /**
         * Distance to a vertex,
         * keeps the incident edge
         */
        this.distTo = [];
        this.final = [];
        this.init();
    }

    getDistances = () =>{
        return this.distTo;
    }

    init = () => {
        this.G.vertices().map( v =>{
            this.distTo[v] = v === this.s ? 0 : -1;
        });
    }

    run = () => {
        this.final.push(this.s);
        let current = this.s;
        while(this.final.length !== this.G.vertices().length){
            /*
              Find all the edges with tails in visited array
              and heads to unvisited nodes, pick the edge
              with lowest weight, add the head to visited
              as final.
            */ 

            this.updateDistances(this.G.adjacents(current));
            const {min, v} = this.getMin();
            this.final.push(v);
            current = v;
        }
    }

    updateDistances = (edges) => {

        for(let edge of edges){
            const {from, to, weight} = edge;

            /**Do not backtrack, once a vertex has been marked as final */
            if(this.final.indexOf(to) > -1)
                continue;

            /**This vertex was found before but
             * not final yet
             */
            const newDist = this.distTo[from] + weight;
            if(this.distTo[to] != -1){
                if(this.distTo[to] > newDist){
                    this.distTo[to] = newDist;
                }
            }
            else {
                this.distTo[to] = newDist;
            }
        }
    }

    getMin = () => {
        let min = 9999999;
        let v;
        this.distTo.map( (d,i) => {
            if(this.final.indexOf(i) < 0){
                if(this.distTo[i] > 0){
                    if(d < min){
                        min = this.distTo[i];
                        v = i;
                    }
                }
            }
        });

        return {min,v};
    }
  
}

export {
    ShortestPaths
}