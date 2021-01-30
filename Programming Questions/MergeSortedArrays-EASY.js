// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.

// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

// Example 2:
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]

const mergeSortedArrays = (a, b) => {
  const output = [];
  const aLength = a.length;
  const bLength = b.length;
  let aPointer = 0;
  let bPointer = 0;

  while (aPointer < aLength && bPointer < bLength) {
    if (a[aPointer] < b[bPointer]) {
      output.push(a[aPointer]);
      aPointer++;
    } else if (a[aPointer] > b[bPointer]) {
      output.push(b[bPointer]);
      bPointer++
    } else {
      output.push(a[aPointer], b[bPointer]);
      aPointer++;
      bPointer++;
    }
  }

  aPointer > bPointer ? output.push(...a.slice(aPointer, a.length)) : output.push(...b.slice(bPointer, b.length));

  return output;
}

const mergeSortedArraysInPlace = (a, b) => {
  let i = 0;
  let j = 0;

  while (j < b.length) {
    // If a[i] is less than b[j] we simply increment i to continue
    // traversing a
    if (a[i] < b[j]) i++;
    // If a[i] is greater than b[j] then we need to splice b[j]
    // at a[i] and increment j
    else if (a[i] > b[j]) {
      a.splice(i, 0, b[j]);
      j++;
    // If the values at a[i] and b[j] are equal we splice in b[j]
    // at a[i + 1] and increment i by 2 and j by 1
    } else {
      a.splice(i+1, 0, b[j]);
      i += 2;
      j++;
    }
  }

  return a;
}

const mergeWithStupidZeroPlaceHolders = (nums1, m, nums2, n) => {
  // End of nums1
  let last = m + n - 1;
  // Mid value (first non-zero value) for nums1
  m--
  // Mid value for nums2
  n--;

  while (m > -1 && n > -1) {
    // If current largest nums1 < current largest nums2
    // mutate nums1[last] to current largest nums2,
    // decrement nums2
    if (nums1[m] < nums2[n]) {
      nums1[last--] = nums2[n--];
      // n--;
    }
    // If current largest nums1 >= current largest nums2
    // mutate nums1[last] to be current largest nums1,
    // decrement nums1
    else {
      nums1[last--] = nums1[m--];
      // m--
    }
    // Always move 1 position back at each iteration
    // (filling in each 0 value)
    // last--;
  }

  // If nums2 has trailing values at the beginning we can shift
  // them onto beginning of nums1 since all nums1 values are >
  // remaining nums 2 values and both are sorted
  while (n > -1) {
    nums1[last--] = nums2[n--];
    // n--;
    // last--;
  }
  return nums1;
}




const arr1 = [1,3,5,7];
const arr2 = [0,2,4,5,6,7,8,99];
const arr3 = [1];
const arr4 = [];
const nums1 = [2,2,3,4,0,0,0];
const nums2 = [1,5,6,7];
const nums3 = [1,2,3,0,0,0];
const nums4 = [2,5,6];

// console.log(mergeSortedArrays(arr1, arr2));
// console.log(mergeSortedArrays(arr3, arr4));

// console.log(mergeSortedArrays(nums1, nums2));

// console.log(mergeSortedArraysInPlace(arr1, arr2));
// console.log(mergeSortedArraysInPlace(arr3, arr4));

// console.log(mergeSortedArraysInPlace(nums1, nums2));

console.log(mergeWithStupidZeroPlaceHolders(nums1, 4, nums2, 4));
console.log(mergeWithStupidZeroPlaceHolders(nums3, 3, nums4, 3))