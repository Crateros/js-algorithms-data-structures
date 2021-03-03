// Given 6x6 2D array:
//
// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
//
// We define an hourglass in array to be a subset of values with indices falling
// in this pattern in array's graphical representation:
//
// a b c
//   d
// e f g
//
// There are 16 hourglasses in array, and an hourglass sum is the sum of an
// hourglass' values.
//
// Calculate the hourglass sum for every hourglass in array,
// then print the maximum hourglass sum.
//
// Sample Input
//
// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0
//
// Sample Output
//
// 19
//
// Array contains the following hourglasses:
//
// 1 1 1   1 1 0   1 0 0   0 0 0
//  1       0       0       0
// 1 1 1   1 1 0   1 0 0   0 0 0
//
// 0 1 0   1 0 0   0 0 0   0 0 0
//  1       1       0       0
// 0 0 2   0 2 4   2 4 4   4 4 0
//
// 1 1 1   1 1 0   1 0 0   0 0 0
//  0       2       4       4
// 0 0 0   0 0 2   0 2 0   2 0 0
//
// 0 0 2   0 2 4   2 4 4   4 4 0
//  0       0       2       0
// 0 0 1   0 1 2   1 2 4   2 4 0
//
// The hourglass with the maximum sum (19) is:
//
// 2 4 4
//   2
// 1 2 4

class Hourglass {
  constructor(a) {
    this.a = a;
    this.largestHourglass = null;
  }

  findLargestHourglass() {
    for (let i = 0; i < this.a.length - 2; i++) {
      for (let j = 0; j < this.a[i].length - 2; j++) {
        let top = this.a[i][j] + this.a[i][j + 1] + this.a[i][j + 2];
        let mid = this.a[i + 1][j + 1];
        let bottom = this.a[i + 2][j] + this.a[i + 2][j + 1] + this.a[i + 2][j + 2];
        let hourglass = top + mid + bottom;
        if (hourglass > this.largestHourglass) this.largestHourglass = hourglass;
      }
    }
    return this.largestHourglass;
  }
}

const findLargestHourglassAgain = matrix => {
  let maxHourGlass = 0;

  for (let i = 0; i < matrix.length - 2; i++) {
    for (let j = 0; j < matrix[i].length - 2; j++) {
      let top = matrix[i][j] + matrix[i][j + 1] + matrix[i][j + 2];
      let mid = matrix[i + 1][j + 1];
      let bottom = matrix[i + 2][j] + matrix[i + 2][j + 1] + matrix[i + 2][j + 2];
      maxHourGlass = Math.max(maxHourGlass, top + mid + bottom);
    }
  }

  return maxHourGlass;
}

const testArray = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];
const hourglass = new Hourglass(testArray);
console.log(hourglass.findLargestHourglass());
console.log(findLargestHourglassAgain(testArray));