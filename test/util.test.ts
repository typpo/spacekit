import * as Util from '../src/util';

describe('Binary Search', () => {
  test('Get exact middlish value', () => {
    const data = [1, 3, 5, 6, 7, 8, 9];
    const value = 5;
    const expectedIndex = 2;
    const actualIndex = Util.binarySearch(data, value);
    expect(actualIndex).toBe(expectedIndex);
  });

  test('Get first value', () => {
    const data = [1, 3, 5, 6, 7, 8, 9];
    const value = 1;
    const expectedIndex = 0;
    const actualIndex = Util.binarySearch(data, value, (a, b) => {
      return a - b;
    });
    expect(actualIndex).toBe(expectedIndex);
  });

  test('Get last value', () => {
    const data = [1, 3, 5, 6, 7, 8, 9];
    const value = 9;
    const expectedIndex = data.length - 1;
    const actualIndex = Util.binarySearch(data, value, (a, b) => {
      return a - b;
    });
    expect(actualIndex).toBe(expectedIndex);
  });

  test('Get insert point before middle value', () => {
    const data = [1, 3, 5, 6, 7, 8, 9];
    const value = 4.5;
    const expectedInsertIndex = 2;
    const actualIndex = Util.binarySearch(data, value, (a, b) => {
      return a - b;
    });
    const actualInsertIndex = ~actualIndex;
    expect(actualInsertIndex).toBe(expectedInsertIndex);
  });

  test('Get insert point before for low out of range value', () => {
    const data = [1, 3, 5, 6, 7, 8, 9];
    const value = -3;
    const expectedInsertIndex = 0;
    const actualIndex = Util.binarySearch(data, value, (a, b) => {
      return a - b;
    });
    const actualInsertIndex = ~actualIndex;
    expect(actualInsertIndex).toBe(expectedInsertIndex);
  });

  test('Get insert point before for high out of range value', () => {
    const data = [1, 3, 5, 6, 7, 8, 9, 10];
    const value = 20;
    const expectedInsertIndex = data.length;
    const actualIndex = Util.binarySearch(data, value, (a, b) => {
      return a - b;
    });
    expect(actualIndex).toBe(expectedInsertIndex);
  });

  test('Test find string with alternative comparer', () => {
    const data = ['a', 'b', 'f', 'm'];
    const value = 'b';
    const expectedIndex = 1;
    const comparer = (a, b) => {
      return a.localeCompare(b);
    };
    const actualIndex = Util.binarySearch(data, value, comparer);
    expect(actualIndex).toBe(expectedIndex);
  });

  test('Test find close string with alternative comparer', () => {
    const data = ['a', 'b', 'f', 'm'];
    const value = 'c';
    const expectedInsertIndex = 2;
    const comparer = (a, b) => {
      return a.localeCompare(b);
    };
    const actualIndex = Util.binarySearch(data, value, comparer);
    const actualInsertionIndex = ~actualIndex;
    expect(actualInsertionIndex).toBe(expectedInsertIndex);
  });

  test('Test exact custom comparison for composite data', () => {
    const data = [
      { x: 1, y: 'a' },
      { x: 2, y: 'b' },
      { x: 3, y: 'c' },
      { x: 4, y: 'd' },
    ];
    const value = 2;
    const expectedIndex = 1;
    const comparer = (a, b) => {
      return a.x - b;
    };
    const actualIndex = Util.binarySearch(data, value, comparer);
    expect(actualIndex).toBe(expectedIndex);
  });

  test('Test close custom comparison for composite data', () => {
    const data = [
      { x: 1, y: 'a' },
      { x: 2, y: 'b' },
      { x: 3, y: 'c' },
      { x: 4, y: 'd' },
    ];
    const value = 3.5;
    const expectedInsertIndex = 3;
    const comparer = (a, b) => {
      return a.x - b;
    };
    const actualIndex = Util.binarySearch(data, value, comparer);
    const actualInsertionIndex = ~actualIndex;
    expect(actualInsertionIndex).toBe(expectedInsertIndex);
  });

  test('Test off negative bounds custom', () => {
    const data = [
      { x: 1, y: 'a' },
      { x: 2, y: 'b' },
      { x: 3, y: 'c' },
      { x: 4, y: 'd' },
    ];
    const value = -1;
    const expectedInsertIndex = 0;
    const comparer = (a, b) => {
      return a.x - b;
    };
    const actualIndex = Util.binarySearch(data, value, comparer);
    const actualInsertionIndex = ~actualIndex;
    expect(actualInsertionIndex).toBe(expectedInsertIndex);
  });

  test('Test off positive bounds custom', () => {
    const data = [
      { x: 1, y: 'a' },
      { x: 2, y: 'b' },
      { x: 3, y: 'c' },
      { x: 4, y: 'd' },
    ];
    const value = 5;
    const expectedIndex = data.length;
    const comparer = (a, b) => {
      return a.x - b;
    };
    const actualIndex = Util.binarySearch(data, value, comparer);
    expect(actualIndex).toBe(expectedIndex);
  });
});
