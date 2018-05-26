import selectionSort from './selection-sort';

describe("Selection Sort", () => {
  it('works with distinct keys', () => {
    const ex1 = [4, 5, 3, 1, 2, 9, 10, 8, 7, 6]
    expect(selectionSort(ex1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('works with some equal keys', () => {
    const ex1 = [4, 5, 3, 1, 2, 9, 10, 8, 7, 6, 1, 1]
    expect(selectionSort(ex1)).toEqual([1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
})


describe("Insertion sort", () => {
  it("works with distinct keys", () => {
    const ex1 = [4, 5, 3, 1, 2, 9, 10, 8, 7, 6]
    expect(selectionSort(ex1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("works with some equal keys", () => {
    const ex1 = [4, 5, 3, 1, 2, 9, 10, 8, 7, 6, 1, 1]
    expect(selectionSort(ex1)).toEqual([1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


  })
})