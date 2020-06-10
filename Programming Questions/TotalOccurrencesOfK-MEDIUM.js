// Given a sorted array of n elements, possibly with duplicates, find the
// number of occurrences of the target element. Do this in O(LogN) time.

// Input: (arr = [4, 4, 8, 8, 8, 15, 16, 23, 23, 42]), (target = 8);
// Output: 3;

// Input: (arr = [3, 5, 5, 5, 5, 7, 8, 8]), (target = 6);
// Output: 0;

// Input: (arr = [3, 5, 5, 5, 5, 7, 8, 8]), (target = 5);
// Output: 4;

// Since we are operating on a sorted list (binary search)
// and we are going for O(LogN) time (binary search)
// we should use a modified form of binary search to find the
// first and last occurences of K. This establishes the range
// we are interested in within the input array. Then we do
// range.max - range.min + 1 to get our total occurences of k.

const totalK = (array, k) => {
  const minBound = binarySearchMinBound(array, k);
  const maxBound = binarySearchMaxBound(array, k);
  return maxBound - minBound + 1;
};

// Binary search that continues search until it finds the
// leftmost occurrence of k
const binarySearchMinBound = (array, k) => {
  let index = -1;
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] >= k) end = mid - 1;
    else start = mid + 1;

    if (array[mid] === k) index = mid;
  }

  return index;
};

// Binary search that continues search until it finds the
// rightmost occurrenc of k
const binarySearchMaxBound = (array, k) => {
  let index = -1;
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] <= k) start = mid + 1;
    else end = mid - 1;

    if (array[mid] === k) index = mid;
  }

  return index;
};

// console.log('Should be 3: ', totalK([4, 4, 8, 8, 8, 15, 16, 23, 23, 42], 8));
// console.log('Should be 0: ', totalK([3, 5, 5, 5, 5, 7, 8, 8], 6));
// console.log('Should be 4: ', totalK([3, 5, 5, 5, 5, 7, 8, 8], 5));

const totalKAgain = (a, k) => {
  const leftBound = binarySearchLeft(a, k);
  const rightBound = binarySearchRight(a, k);

  // If only one occurence exists both leftBound and rightBound
  // will have the same index value
  return leftBound && rightBound ? rightBound - leftBound + 1 : 0;
};

const binarySearchLeft = (a, k) => {
  index = 0;
  start = 0;
  end = a.length - 1;

  while (start <= end) {
    // For languages with overflow we would use:
    // mid = start + ((end - start) / 2)
    // https://ai.googleblog.com/2006/06/extra-extra-read-all-about-it-nearly.html
    // However, Javascript will automatically produce decimals
    let mid = Math.floor((start + end) / 2);

    if (a[mid] >= k) end = mid - 1;
    else start = mid + 1;

    if (a[mid] === k) index = mid;
  }

  return index;
};

const binarySearchRight = (a, k) => {
  index = 0;
  start = 0;
  end = a.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (a[mid] <= k) start = mid + 1;
    else end = mid - 1;

    if (a[mid] === k) index = mid;
  }

  return index;
};

console.log('Should be 3: ', totalKAgain([4, 4, 8, 8, 8, 15, 16, 23, 23, 42], 8));
console.log('Should be 0: ', totalKAgain([3, 5, 5, 5, 5, 7, 8, 8], 6));
console.log('Should be 4: ', totalKAgain([3, 5, 5, 5, 5, 7, 8, 8], 5));
