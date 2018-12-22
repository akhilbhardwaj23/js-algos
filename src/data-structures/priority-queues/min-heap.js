class MinHeap {

    constructor(){
        this.data = [];
    }

    getParentIndex = (idx) =>{
        return Math.ceil(idx/2) - 1;
    }

    isEmpty =() => {
        return this.data.lenght === 0;
    }

    insert = (key) => {
        this.data.push(key);
        this.swim(this.data.length-1);
    }

    extractMin = () =>{
        if(this.data.length === 0) return undefined;

        const min = this.data[0];

        const last = this.data.pop();

        if(this.data.length > 0){
            this.data[0] = last;
            this.sink(0);
        }

        return min;
    }

    swim = (idx) => {
        while(idx > 0){
            let parent = this.getParentIndex(idx);
            if(this.data[idx] < this.data[parent])
            {
                this.swap(parent, idx);                
                idx = parent;
            }
            else {
                return
            }
        }
    }

    sink = (idx) => {
        /**
         * Sink starts from the root, keep moving the node till length of the array
         * or untill it finds it's correct place
         */
        
        while(idx*2 < this.data.length)
        {
            let child1 = idx*2 + 1;
            let child2 = child1 === this.data.length ? -1 : child1 + 1;

            if(this.data[child1] < this.data[idx]){
                if(child2 > -1 && this.data[child2] < this.data[child1]){
                    this.swap(child2, idx);
                    idx = child2;
                }
                else {
                    this.swap(child1, idx);
                    idx = child1;
                }
            }
            else if(child2 > -1 && this.data[child2] < this.data[idx]){
                this.swap(child2, idx);
                idx = child2;
            }
            else return;
        }
    }

    swap = (i1, i2) =>{
        let temp = this.data[i1];
        this.data[i1] = this.data[i2];
        this.data[i2] = temp;
    }
}

export {
    MinHeap
}