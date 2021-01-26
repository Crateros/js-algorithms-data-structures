// Given a string and an integer k, you need to reverse the first k characters
// for every 2k characters counting from the start of the string. If there are
// less than k characters left, reverse all of them. If there are less than 2k
// but greater than or equal to k characters, then reverse the first k characters
// and left the other as original.

// Example:
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"


const reverseString = (s, k) => {
  let performFlip = true;
  let i = 0;
  let j = k;
  let result = [];
  while (j < s.length + k) {
    if (performFlip) result.push(...[...s.substring(i, j)].reverse());
    else result.push(...s.substring(i, j));
    i += k;
    j += k;
    performFlip = !performFlip;
  }
  return result.join('');
};

console.log(reverseString('abcdefgh', 4));