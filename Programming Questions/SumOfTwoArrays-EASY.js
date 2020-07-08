// Given two arrays A & B which can contain N number of elements
// positive or negative. Return true if a value from A and a value from B
// can sum to K. If no combination is possible then return -1.

const twoSum = (a, b, k) => {
  // We can create a set that consists of the compliment values
  // of a and k and then loop through b to see if b has
  // any values contained within the set.

  const set = new Set();

  for (item of a) {
    set.add(k - item);
  }

  for (item of b) {
    if (set.has(item)) return true;
  }

  return -1;
};

const arr = [0, 0, -5, 30212];
const brr = [-10, 40, -3, -9];
console.log(twoSum(arr, brr, -8));
