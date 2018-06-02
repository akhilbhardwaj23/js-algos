class QuickUnion {

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

        this.store[j] = this.store[i];
    }
}

export default QuickUnion;