class PathGraph{
    constructor(weights = []){
        this.g = weights;

        this.memo = [];
    }

    /**
     * Recurrence -  Max of odd positioned number sums and even positioned number sums
     * At each iteration either pick the last element or the one before that
     */
    maxWeightSubset =(arr, problemSize) =>{
        if(this.memo[problemSize]) return this.memo[problemSize];

        if(problemSize === 0){
            this.memo.push(0);
            return 0;
        }
        
        if(problemSize ===1){
            this.memo[1] = arr[0];
            return arr[0];
        }

        if(problemSize ===2){
            this.memo[2] = Math.max(arr[0], arr[1]);
            return this.memo[2];
        }
        
        let currentItemIndex = problemSize -1;

        this.memo[problemSize] = Math.max(
            (this.maxWeightSubset(arr, problemSize-2) + arr[currentItemIndex]),
            (this.maxWeightSubset(arr, problemSize-3) + arr[currentItemIndex-1]),
            this.maxWeightSubset(arr, problemSize-2),
            this.maxWeightSubset(arr, problemSize-3)
        )

        return this.memo[problemSize];
    }
}

export {
    PathGraph
}
