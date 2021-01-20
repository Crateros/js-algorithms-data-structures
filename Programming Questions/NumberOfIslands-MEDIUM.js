// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands
// horizontally or vertically. You may assume all four edges of the grid are all
// surrounded by water.

// Example 1:
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Example 2:
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

const findIslands = matrix => {
  // We can loop through the matrix until we find a 1,
  // we increment the island count +1 and then
  // we use DFS to find the Island structure, each
  // time a 1 is encountered we transform it into a 0
  // until that entire island has been removed. If we
  // encounter a pre-existing 0 during DFS we assume we are
  // at the edge of the island and escape out of the recursive stack

  let islandCount = 0;

  const findStructure = (matrix, i, j) => {
    // End recursion if any of these conditionals are met

    // Exceeded i boundaries
    if (i < 0 || i > matrix.length - 1) return;

    // Exceeded j boundaries
    if (j < 0 || j > matrix[i].length - 1) return;

    // Found the edge of that portion of the island
    if (matrix[i][j] === 0) return;

    matrix[i][j] = 0;
    // Go up
    findStructure(matrix, i - 1, j);
    // Go down
    findStructure(matrix, i + 1, j);
    // Go left
    findStructure(matrix, i, j - 1);
    // Go Right
    findStructure(matrix, i, j + 1);
  };

  // Loop through matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // A 1 is found, use DFS to search for island structure
      if (matrix[i][j] === 1) {
        islandCount++;
        findStructure(matrix, i, j);
      }
    }
  }

  return islandCount;
};

const findIslandsAgain = matrix => {
  let islandCount = 0;

  findStructure = (matrix, i, j) => {
    // Exceeded width in either direction
    if (i < 0 || i > matrix.length - 1) return;
    // Exceeded height in either direction
    if (j < 0 || j > matrix[i].length - 1) return;
    // Encountered edge of island
    if (matrix[i][j] === 0) return;

    // Encountered more island, convert to 0
    matrix[i][j] = 0;

    // Go left
    findStructure(matrix, i, j - 1);
    // Go right
    findStructure(matrix, i, j + 1);
    // Go down
    findStructure(matrix, i + 1, j);
    // Go up
    findStructure(matrix, i - 1, j);
  };

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        islandCount++;
        findStructure(matrix, i, j);
      }
    }
  }

  return islandCount;
};

const findIslandsOnceMore = function(matrix) {
  let islandCount = 0;

  const findIslandStructure = function(i,j) {
    // Respect top boundary
    if (i < 0) return false;

    // Respect bottom boundary
    if (i > matrix.length - 1) return false;

    // Respect left boundary
    if (j < 0) return false;

    // Respect right boundary
    if (j > matrix[i].length - 1) return false;

    // Respect edge of current island
    if (matrix[i][j] === 0) return false;

    // If boundaries are respected and we did not encounter
    // a 0 then we have more island to explore, lets flip our
    // current value to 0 to mark that we have been here
    matrix[i][j] = 0;

    // Go up
    findIslandStructure(i - 1, j);
    // Go down
    findIslandStructure(i + 1, j)
    // Go left
    findIslandStructure(i, j - 1);
    // Go right
    findIslandStructure(i, j + 1);
  }


  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        islandCount++;
        findIslandStructure(i,j);
      }
    }
  }

  return islandCount;
}

const testMatrix = [[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 1]];
const testMatrixTwo = [[1, 1, 1, 1, 0], [1, 1, 0, 1, 0], [1, 1, 0, 0, 0], [0, 0, 0, 0, 0]];
const testMatrixThree = [[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 1]];
const testMatrixFour = [[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 1]];

console.log(findIslands(testMatrix));
console.log(findIslands(testMatrixTwo));

console.log(findIslandsAgain(testMatrixThree));

console.log(findIslandsOnceMore(testMatrixFour));
