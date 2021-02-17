// A string is a valid parentheses string (denoted VPS) if it meets one of the following:
// For example, "", "()()", and "()(()())" are VPS's
// (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.
// Given a VPS represented as string s, return the nesting depth of s.

// Example 1:
// Input: s = "(1+(2*3)+((8)/4))+1"
// Output: 3
// Explanation: Digit 8 is inside of 3 nested parentheses in the string.

// Example 2:
// Input: s = "(1)+((2))+(((3)))"
// Output: 3

// Example 3:
// Input: s = "1+(2*3)/(2-1)"
// Output: 1

// Example 4:
// Input: s = "1"
// Output: 0

const maxDepth = s => {
  let max = 0;
  let current = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') current++;
    else if (s[i] === ')') current--;
    max = Math.max(max, current);
  }
  return max;
};

console.log(maxDepth("(1+(2*3)+((8)/4))+1"));
console.log(maxDepth("(1)+((2))+(((3)))"));
console.log(maxDepth("1+(2*3)/(2-1)"));
console.log(maxDepth("1"));