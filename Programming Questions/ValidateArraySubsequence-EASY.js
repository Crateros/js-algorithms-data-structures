// Given two non-empty arrays of integers, write a function that determines
// whether the second array is a subsequence of the first one.

// A subsequence of an array is a set of numbers that aren't necessarily adjacent
// in the array but are in the same order as they appear in the original array.

// Example:
// Input = [5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]
// Output = True

const isSubsequence = (arr, seq) => {
  let seqIdx = 0;
  const arrLength = arr.length;
  const seqLength = seq.length;

  for (let i = 0; i < arrLength; i++) {
    if (arr[i] === seq[seqIdx]) seqIdx++;
    if (seqIdx === seqLength) return true;
  }

  return false;
};

console.log(isSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
console.log(isSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 8]));
console.log(isSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [22, 25, 6]));
console.log(isSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 10, 8]));
console.log(isSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [0]));
console.log(isSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10]));
console.log(isSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [99]));
