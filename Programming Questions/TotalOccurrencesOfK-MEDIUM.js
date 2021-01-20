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
// first and last occurrences of K. This establishes the range
// we are interested in within the input array. Then we do
// range.max - range.min + 1 to get our total occurrences of k.

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

const totalOccurrencesOnceMore = (array, k) => {
  const findLeftBound = () => {
    let left = 0;
    let right = array.length - 1;

    // For left bound when we encounter value >= k we need to decrement
    // the right point 1 behind the current mid to traverse towards the left
    // boundary of the set of k values. If current mid value is less than k
    // we increment left pointer 1 ahead of current mid. Once the left and right pointers
    // overlap we have found our first occurrence of k.
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (array[mid] >= k) right = mid - 1;
      else left = mid + 1;
    }
    console.log(left, right)
    return left;
  }

  // Finding right most occurrence of k (last occurrence) is just flipped logic versus left
  // most occurrence. When we encounter mid value <= k we advance left pointer 1 ahead of
  // current mid, otherwise we decrement right pointer by 1 from current mid.
  const findRightBound = () => {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (array[mid] <= k) left = mid + 1;
      else right = mid - 1;
    }
    console.log(left, right)
    return right;
  }

  const leftBound = findLeftBound();
  const rightBound = findRightBound();
  console.log(leftBound, rightBound);
  return rightBound - leftBound + 1;
}

console.log('Should be 3: ', totalKAgain([4, 4, 8, 8, 8, 15, 16, 23, 23, 42], 8));
console.log('Should be 0: ', totalKAgain([3, 5, 5, 5, 5, 7, 8, 8], 6));
console.log('Should be 4: ', totalKAgain([3, 5, 5, 5, 5, 7, 8, 8], 5));

console.log('Should be 4: ', totalOccurrencesOnceMore([3, 5, 5, 5, 5, 7, 8, 8], 5));
console.log('Should be 1: ', totalOccurrencesOnceMore([5, 7, 7, 7, 7, 7, 8, 8], 5));


