// Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums.
// If target exists, then return its index, otherwise return -1.

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

function binarySearch(arr, target) {
  if (arr.length === 0) return -1;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return `Found ${target} at index ${mid}.`;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

const binarySearchAgain = (a, t) => {
  if (a.length === 0) return -1;
  let l = 0;
  let r = a.length - 1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (a[m] === t) return m;
    else if (a[m] < t) l = m + 1;
    else r = m - 1;
  }
  return -1;
};

const binarySearchOneLastTime = (a, t) => {
  let l = 0;
  let r = a.length - 1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (a[m] === t) return m;
    else if (a[m] < t) l = m + 1;
    else r = m - 1;
  }
  return -1;
};

function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;
  let mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return `Found ${target} at index ${mid}.`;
  return arr[mid] < target
    ? binarySearchRecursive(arr, target, mid + 1, right)
    : binarySearchRecursive(arr, target, left, mid - 1);
}

const binarySearchRecursiveAgain = (a, t, l = 0, r = a.length - 1) => {
  if (l > r) return -1;
  let m = Math.floor((l + r) / 2);
  if (a[m] === t) return m;
  return a[m] < t ? binarySearchRecursiveAgain(a, t, m + 1, r) : binarySearchRecursiveAgain(a, t, l, m - 1);
};

const binarySearchRecursiveFinal = (a, t, l = 0, r = a.length - 1) => {
  if (l > r) return -1;
  let m = Math.floor((l + r) / 2);
  if (a[m] === t) return m;
  return a[m] < t ? binarySearchRecursiveFinal(a, t, m + 1, r) : binarySearchRecursiveFinal(a, t, l, m - 1);
};

const arr1 = [-1, 0, 3, 5, 9, 12];
console.log(binarySearch(arr1, 9));
console.log(binarySearch(arr1, 2));
console.log(binarySearch(arr1, 12));
console.log(binarySearch(arr1, -1));

console.log(binarySearchAgain(arr1, 9));
console.log(binarySearchAgain(arr1, 2));
console.log(binarySearchAgain(arr1, 12));
console.log(binarySearchAgain(arr1, -1));

console.log(binarySearchRecursive(arr1, 9));
console.log(binarySearchRecursive(arr1, 2));
console.log(binarySearchRecursive(arr1, 12));
console.log(binarySearchRecursive(arr1, -1));

console.log(binarySearchRecursiveAgain(arr1, 9));
console.log(binarySearchRecursiveAgain(arr1, 2));
console.log(binarySearchRecursiveAgain(arr1, 12));
console.log(binarySearchRecursiveAgain(arr1, -1));
