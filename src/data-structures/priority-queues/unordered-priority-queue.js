/**Items in the array/linked list will be unordered
 * Insertions will take O(1);
 * Deletion will take O(N), to find the max item
 */

 class UnorderedPQ{
     constructor(){
         this.N = 0; //number of items in queue
         this.items = [];
     }

     size = () => {
         return this.N;
     }

     insert = (item)=>{
         this.items.push(item);
         this.N++;
     }

     isEmpty = () =>{
         return this.N === 0;
     }

     delMax = () => {
         console.log(this.items)
        //Find the max item in the queue
        let max = 0;
        for(let i=1; i < this.N; i++){
            if(this.items[i] > this.items[max]){
                max = i;
            }
        }
        //Put the maximum item on the front
        this.exchange(max, this.N-1);
        return this.items[--this.N];
     }

     exchange = (i, j) =>{
         let temp = this.items[i];
         this.items[i] = this.items[j];
         this.items[j] = temp;
     }
 }

 export {UnorderedPQ}