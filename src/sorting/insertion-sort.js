import exchange from './helpers';

const insertionSort = (arr) => {
    if (!arr || arr.length === 0) {
        return;
    }

    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                exchange(arr, j, j - 1);
            }
        }

    }

    return arr;
}