// Given two strings S and T, return if they are equal when both
// are typed into empty text editors.# means a backspace character.
// Note that after backspacing an empty text, the text will continue empty.

// Example 1:
// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".

// Example 2:
// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".

// Example 3:
// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".

// Example 4:
// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".

// Note:
// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S and T only contain lowercase letters and '#' characters.

// Follow up:
// Can you solve it in O(N) time and O(1) space?


// You can use the string.slice(0, -1) method to remove the last character
// from the string (does not modify original string) to construct the final
// string after backspaces have been applied. Alternatively you could transform
// the strings into char arrays and treat them like stacks, using the .pop() method
// to remove a char from the array when you encounter a '#' symbol.

const backSpaceStringCompare = (sOne, sTwo) => {
  let finalOne = '';
  let finalTwo = '';

  for (char of sOne) {
    if (char !== '#') finalOne += char;
    else finalOne = finalOne.slice(0, -1);
  }

  for (char of sTwo) {
    if (char !== '#') finalTwo += char;
    else finalTwo = finalTwo.slice(0, -1);
  }

  return finalOne === finalTwo;
}

console.log(backSpaceStringCompare('abc#de#', 'abc#de#'));
console.log(backSpaceStringCompare('ab##', 'c#d#'));
console.log(backSpaceStringCompare('a##c', '#a#c'));
console.log(backSpaceStringCompare('a#c', 'b'));