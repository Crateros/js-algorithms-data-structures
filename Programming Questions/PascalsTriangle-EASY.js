// Given a non-negative integer numRows, generate the
// first numRows of Pascal's triangle.

// Input: 5

// Output:

//        [1]
//      [1] [1]
//    [1] [2] [1]
//   [1] [3] [3] [1]
// [1] [4] [6] [4] [1]

const pascalsTriangle = numRows => {
  const triangle = [];

  for (let i = 0; i < numRows; i++) {
    triangle.push(new Array(i + 1));
    for (let j = 0; j <= i; j++) {
      // Handle edges and out of bounds
      if (i - 1 < 0 || j - 1 < 0 || j >= i) {
        triangle[i][j] = 1;
      } else {
        // Handle middle values by adding the previous rows current value with the value to its left
        triangle[i][j] = triangle[i - 1][j] + triangle[i - 1][j - 1];
      }
    }
  }

  return triangle;
};

console.log(pascalsTriangle(15));

pascalTwo = function(numRows) {
  const result = [];

  for (let i = 0; i < numRows; i++) {
    result.push(new Array(i + 1).fill(0));
    for (let j = 0; j <= i; j++) {
      // If we are at left edge, value is 1
      if (j === 0) result[i][j] = 1;

      // If we are at right edge, value is 1
      if (j === i) result[i][j] = 1;

      // If we have gone to high, skip
      if (i - 1 < 0) continue;

      // If we are looking too far to the left (out of bounds), skip
      if (j - 1 < 0) continue;

      // If we are trying to access something to far to the right (out of bounds), skip
      if (j >= i) continue;
      else {
        // We are calculating middle values by looking up at the same index
        // and adding that value to the value on its left
        result[i][j] = result[i - 1][j] + result[i - 1][j - 1];
      }
      // Detect edges and change value to 1
    }
  }

  return result;
};

console.log(pascalTwo(15));

const pascalThree = numRows => {
  const triangle = [];
  for (let i = 0; i < numRows; i++) {
    triangle.push(new Array(i + 1).fill(1));
    for (let j = 0; j < i; j++) {
      if (i - 1 < 0 || j - 1 < 0 || j > i - 1) continue;
      triangle[i][j] = triangle[i - 1][j] + triangle[i - 1][j - 1];
    }
  }
  return triangle;
};

console.log(pascalThree(0));
console.log(pascalThree(1));
console.log(pascalThree(3));
console.log(pascalThree(4));
console.log(pascalThree(5));
console.log(pascalThree(6));
console.log(pascalThree(15));
