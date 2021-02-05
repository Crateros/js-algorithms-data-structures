// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number,
// also in sorted non-decreasing order.

// Example 1:
// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

// Example 2:
// Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

const squareSorted = array => {
  const result = new Array(array.length);
  let i = 0;
  let j = array.length - 1;
  let k = array.length - 1;

  while (i <= j) {
    if (Math.abs(array[i]) > Math.abs(array[j])) {
      result[k] = Math.pow(array[i], 2);
      i++;
    } else {
      result[k] = Math.pow(array[j], 2);
      j--;
    }
    k--;
  }

  return result;
};

const squareSortedAgain = array => {
  const result = new Array(array.length);
  let i = 0;
  let j = array.length - 1;
  let k = array.length - 1;

  while (i <= j) {
    Math.abs(array[i]) < Math.abs(array[j])
      ? result[k--] = Math.pow(array[j--], 2)
      : result[k--] = Math.pow(array[i++], 2);
  }

  return result;
}

const testOne = [-4, -1, 0, 3, 10];
const testTwo = [-7, -3, 2, 3, 11];

console.log(squareSorted(testOne));
console.log(squareSorted(testTwo));

console.log(squareSortedAgain(testOne));
console.log(squareSortedAgain(testTwo));