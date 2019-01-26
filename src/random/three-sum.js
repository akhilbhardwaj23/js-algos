import { MergeSort } from "../sorting/merge-sort";

const threeSum = (arr1, sum) => {
  const arr = MergeSort(arr1);
  let answer = [];
  for (let i = 0; i < arr.length - 2; i++) {
    if (i == 0 || (i > 0 && arr[i] != arr[i - 1])) {
      {
        let newSum = sum - arr[i];
        let l = i + 1;
        let h = arr.length - 1;

        let prevL = undefined;
        let prevH = undefined;

        while (l < h) {
          if (arr[l] === prevL && arr[h] === prevH) {
              l++;
              h--;
              continue;
          }

          let currSum = arr[l] + arr[h];

          if (currSum === newSum) {
            answer.push([arr[i], arr[l], arr[h]]);
            prevL = arr[l];
            prevH = arr[h];
            l++;
            h--;
          } else if (currSum < newSum) {
            l++;
            while (l < h && arr[l] === arr[l + 1]) l++;
          } else {
            h--;
            while (l < h && arr[h] === arr[h - 1]) h--;
          }
        }
      }
    }
  }

  return answer;
};

export { threeSum };
