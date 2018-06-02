class QuickFind {

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

    connected = (i, j) => {
        return this.store[i] === this.store[j];
    }

    union = (i, j) => {

        const iPtr = this.store[i];
        const jPtr = this.store[j];

        //find all iPtr references and update them to jPtr

        for(let x = 0; x < this.store.length; x++)
        {
            if(this.store[x] === iPtr)
            {
                this.store[x] = jPtr;
            }
        }
    }
}

export default QuickFind;