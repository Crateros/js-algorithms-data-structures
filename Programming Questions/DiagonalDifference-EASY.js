// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// For example, the square matrix  is shown below:
// 1 2 3
// 4 5 6
// 9 8 9

// Constraints
// Output Format
// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.
// Sample Input
// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output
// 15
// Explanation
// The primary diagonal is:
// 11
//    5
//      -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4
// The secondary diagonal is:
//      4
//    5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15

const diagonalDifference = matrix => {
  let a = 0, b = 0;
  const length = matrix.length;

  for (let i = 0, j = 0, k = length - 1; i < length; i++, j++, k--) {
    a += matrix[i][j];
    b += matrix[i][k];
  }

  return Math.abs(a - b);
};

const test = [[1, 2, 3], [4, 5, 6], [9, 8, 9]];

console.log(diagonalDifference(test));
