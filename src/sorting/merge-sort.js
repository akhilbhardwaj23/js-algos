export function MergeSort(arr) {
    
    if(!arr) return;

    if(arr.length === 1) return arr;

    let mid = Math.abs(arr.length / 2);

    const arr1 = arr.slice(0, mid);
    const arr2 = arr.slice(mid);
    return Merge(MergeSort(arr1), MergeSort(arr2));
}


export function Merge(arr1, arr2) {
    let arr = [];
    let j = 0;
    let k = 0;

    for (let i = 0; i < (arr1.length + arr2.length); i++) {
        if (j === arr1.length) {
            while (k < arr2.length) {
                arr[i] = arr2[k];
                i++;
                k++;
            }
            break;
        }
        else if (k === arr2.length) {
            while (j < arr1.length) {
                arr[i] = arr1[j];
                i++;
                j++;
            }
            break;
        }

        if (arr1[j] < arr2[k]) {
            arr[i] = arr1[j];
            j++;
        }
        else {
            arr[i] = arr2[k];
            k++;
        }
    }

    return arr;
}