import exchange from './helpers';

const selectionSort = (arr) => {

    if (!arr || arr.length === 0) {
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        let minsofar = arr[i];

        for (let j = i; j < arr.length - 1; j++) {
            if (arr[j + 1] < arr[minIndex]) {
                minIndex = j + 1;
            }
        }
        exchange(arr, i, minIndex);

    }

    return arr;
}



export default selectionSort;