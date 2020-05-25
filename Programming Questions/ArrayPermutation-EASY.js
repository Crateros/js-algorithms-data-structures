// A permutation can be specified by an array P, where P[i] represents the location
// of the element at i in the permutation. For example, [2, 1, 0] represents the
// permutation where elements at the index 0 and 2 are swapped.

// Given an array and a permutation, apply the permutation to the array.
// For example, given the array ["a", "b", "c"] and the permutation [2, 1, 0],
// return ["c", "b", "a"].

// This is index swapping. Easiest (most performant while being easy to comprehend?) approach
// would be to access item at index in permutation and copy to new array (O(n)).
// New array will contain all original items in mutated order.

const performPermuation = (array, permutation) => {
  const mutatedArray = [];

  for (let i = 0; i < permutation.length; i++) {
    mutatedArray.push(array[permutation[i]]);
  }

  return mutatedArray;
};

console.log(performPermuation(['a', 'b', 'c', 'd', 'e'], [2, 0, 4, 1, 3]));

const oneLiner = (array, permutation) => permutation.map(item => array[item]);
console.log(oneLiner(['a', 'b', 'c'], [1, 0, 2]));

// What if the permutation possibily contains less than the number of items in the array?

const performPartialPermutation = (array, permutation) => {
  const remainingArray = [];

  // Reorder items to match permutation as before
  const mutatedArray = permutation.map(item => array[item]);

  // Handle remaining values to prevent duplicates
  for (let i = 0; i < array.length; i++) {
    if (!permutation.includes(i)) {
      remainingArray.push(array[i]);
    }
  }

  // Append any remaining items from original array that were not mutated and flatten
  if (remainingArray.length) {
    mutatedArray.push(...remainingArray);
  }

  return mutatedArray;
};

console.log(performPartialPermutation(['a', 'b', 'c', 'd', 'e'], [1, 4]));
