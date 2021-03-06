import { MergeSort } from "./../sorting/merge-sort";

const twoSumSorted = (arr, sum) => {
  let answer = [];
  let l = 0;
  let h = arr1.length - 1;

  while (l < h) {
    let currSum = arr1[l] + arr1[h];

    if (currSum === sum) {
      answer.push([arr1[l], arr1[h]]);
      l++;
      h--;

      /**Jump if equal */
      while (arr1[l] === arr1[l + 1]) l++;
      while (arr1[h] === arr1[h - 1]) h--;
    } else if (currSum < sum) {
      l++;
      while (arr1[l] === arr1[l + 1]) l++;
    } else {
      h--;
      while (arr1[h] === arr1[h - 1]) h--;
    }
  }

  return answer;
};

const twoSum = (arr, sum) => {
  let arr1 = MergeSort(arr);
  return twoSumSorted(arr1, sum);
};

export { twoSum, twoSumSorted };
