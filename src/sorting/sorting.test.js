import selectionSort from './selection-sort';

test('selection sort with distinct keys works', () => {
  const ex1 = [4,5,3,1,2,9,10,8,7,6]
     expect(selectionSort(ex1)).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });

  test('selection sort with some equal keys works', () => {
    const ex1 = [4,5,3,1,2,9,10,8,7,6,1,1]
       expect(selectionSort(ex1)).toEqual([1,1,1,2,3,4,5,6,7,8,9,10]);
    });

  