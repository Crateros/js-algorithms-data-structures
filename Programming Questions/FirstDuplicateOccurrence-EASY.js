// Given an array of n elements which contains elements from 1 to n (array.length),
// with any of these numbers appearing any number of times.
// Find the duplicate value with the lowest index.
// If no duplicate values exist return -1.
// Bonus: Do this in O(N) time and constant space

const findFirstDuplicate = array => {
  // Loop through all items, Push each item into set
  // The first duplicate we encounter in the set should be duplicate
  // with the lowest index. O(N) time and O(K) space

  const set = new Set();
  for (let item of array) {
    if (!set.has(item)) set.add(item);
    else return item;
  }

  return -1;
};

const slickSolution = array => {
  // We can loop through the input array once since
  // all of the values are positive and within the index of the array
  // we can use the values themselves as lookups.

  // We can assess the absolute value of the array[value - 1] (for 0 index)
  // and determine if we have seen that value before by flipping it to
  // it's negative counterpart. The first time we encounter a value that is
  // already negative we have reached our first duplicate.

  for (let item of array) {
    if (array[item - 1] < 0) {
      return Math.abs(array[item]);
    } else if (Math.abs(array[item - 1]) > 0) array[item - 1] *= -1;
  }

  return -1;
};

// This does not work if the first duplicate with the lowest index has more than 2 entries
slickSolutionTwo = array => {
  let lowestDuplicate = array.length + 1;

  array.forEach(item => {
    let first = array.indexOf(item);
    let last = array.lastIndexOf(item);

    if (first !== last && last < lowestDuplicate) {
      console.log(item);
      console.log(last);
      lowestDuplicate = last;
      console.log(lowestDuplicate);
    }
  });

  return array[lowestDuplicate] || -1;
};

var findDuplicate = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    let currentIndex = Math.abs(nums[i]) - 1;
    if (nums[currentIndex] < 0) return Math.abs(nums[i]);
    else nums[currentIndex] *= -1;
  }
};


const testArray = [2, 1, 3, 5, 3, 2, 4];
const testArrayTwo = [2, 2, 1, 1, 3, 5, 3];
const testArrayThree = [1, 2, 3, 4, 5, 6, 7, 8];
const testArrayFour = [1, 2, 2, 1, 2, 4, 4];
console.log(findFirstDuplicate(testArray));
console.log(findFirstDuplicate(testArrayTwo));
console.log(findFirstDuplicate(testArrayThree));
console.log(findFirstDuplicate(testArrayFour));
console.log(slickSolutionTwo(testArray));
console.log(slickSolutionTwo(testArrayTwo));
console.log(slickSolutionTwo(testArrayThree));
console.log(slickSolutionTwo(testArrayFour));
console.log(slickSolution(testArray));
console.log(slickSolution(testArrayTwo));
console.log(slickSolution(testArrayThree));
console.log(slickSolution(testArrayFour));
