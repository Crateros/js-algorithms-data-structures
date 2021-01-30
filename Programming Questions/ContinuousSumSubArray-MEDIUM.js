// Given a list of non-negative numbers and a target integer k,
// write a function to check if the array has a continuous subarray
// of size at least 2 that sums up to a multiple of k, that is, sums
// up to n*k where n is also an integer.

// Example 1:
// Input: [23, 2, 4, 6, 7],  k=6
// Output: True
// Explanation: Because [2, 4] is a continuous subarray of size 2 and sums up to 6.

// Example 2:
// Input: [23, 2, 6, 4, 7],  k=6
// Output: True
// Explanation: Because [23, 2, 6, 4, 7] is an continuous subarray of size 5 and sums up to 42.

// Constraints:
// The length of the array won't exceed 10,000.
// You may assume the sum of all the numbers is in the range of a signed 32-bit integer.

const continuousSum = (array, k) => {
  let left = 0;
  let right = 1;
  let currentSum = array[left];

  while (left < array.length - 1) {
    while (right < array.length) {
      currentSum += array[right++];
      // Handle special [0,0] case
      if (currentSum === 0 && k === 0) return true;
      if (currentSum % k === 0) return true;
      // right++;
    }
    // Cannot increment left inside of currentSum assignment
    left++;
    right = left + 1;
    currentSum = array[left];
  }
  return false;
}

const continuousSumMap = (array, k) => {
  let currentSum = 0;
  // We need to consider that having no items in the array
  // (index of -1) results in a sum of 0
  let map = new Map([[0, -1]]);

  for (let i = 0; i < array.length; i++) {
    currentSum += array[i];
    // If k = 0 we need to avoid currentSum % 0 since
    // it results in NaN, so we just return the remainder
    // as currentSum (unmodified)
    let remainder = k ? currentSum % k : currentSum;

    // If we encounter a remainder that already exists it means
    // that the distance between those two points would produce a range
    // with a sum % k that = 0. If the distance between the current index
    // and the reoccurring index is > 1 then we have found a range with
    // length >= 2 that sums to a multiple of k (sum % k === 0)
    if (map.has(remainder)) {
      if (i - map.get(remainder) > 1) return true;
    // The else prevents us from adding a duplicate remainder, if we
    // do encounter a duplicate remainder we should just skip adding it
    // and continue moving along the array
    } else {
      map.set(remainder, i);
    }
  }

  return false;
}

console.log(continuousSum([23, 2, 4, 6, 7], 6));
console.log(continuousSum([23, 2, 6, 4, 7], 6));
console.log(continuousSum([12], 6));
console.log(continuousSum([0,0], 0));
console.log(continuousSum([0, 0, 0, 0], 0));
console.log(continuousSum([0, 1, 0], 0));

console.log(continuousSumMap([23, 2, 4, 6, 7], 6));
console.log(continuousSumMap([23, 2, 6, 4, 7], 6));
console.log(continuousSumMap([12], 6));
console.log(continuousSumMap([0, 0], 0));
console.log(continuousSum([0, 0, 0], 0));
console.log(continuousSumMap([0, 1, 0], 0));
console.log(continuousSumMap([1, 0, 0], 0));


