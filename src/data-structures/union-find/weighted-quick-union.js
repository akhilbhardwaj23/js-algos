class WeightedQuickUnion {

    //create a size N array and initialize it with self
    //assuming the numbers starts from 0;

    constructor(n)
    {
        this.store = [];
        for(let i=0; i< n ; i++)
        {
            this.store[i] = i;
        }
    }

    root = (i) => {
        if(this.store[i] === i)
        return i;

        return this.root(this.store[i]);
    }
    
    connected = (i, j) => {
        return this.root(i) === this.root(j);
    }

    union = (i, j) => {
        //set the parent of j to i.
        //set the root of i to root of j
        const rootI = this.root(i);
        const rootJ = this.root(j);

        this.store[i] = rootJ;
    }
}

export default WeightedQuickUnion;