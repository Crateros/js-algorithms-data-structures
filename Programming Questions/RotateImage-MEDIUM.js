// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// BONUS: Rotate the image in-place, which means you have to modify the input 2D matrix directly.
// DO NOT allocate another 2D matrix and do the rotation.

// Example 1:

// Given input matrix =
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]

const rotateImage = matrix => {
  // Create holding array
  const length = matrix.length;
  const rotatedArray = new Array(length);

  for (let i = 0; i < length; i++) {
    rotatedArray[i] = new Array(length).fill(0);
  }

  // Access matrix values by column
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      rotatedArray[i][j] = matrix[j][i];
    }

    rotatedArray[i].reverse();
  }

  return rotatedArray;
};

const testArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(rotateImage(testArray));

const rotateImageV2 = matrix => {
  // Create holding array
  const length = matrix.length;
  const rotatedArray = new Array(length);

  for (let i = 0; i < length; i++) {
    rotatedArray[i] = new Array(length).fill(0);
  }

  // Access matrix values by column
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      console.log(matrix[i][j]);
      console.log(matrix[j][length - 1 - i]);
      rotatedArray[j][length - 1 - i] = matrix[i][j];
    }
  }

  return rotatedArray;
};

console.log(rotateImageV2(testArray));
