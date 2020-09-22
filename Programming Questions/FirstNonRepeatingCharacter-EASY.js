// Given a string, find the first non-repeating character in it.
// For example, if the input string is “GeeksforGeeks”, then the output should be ‘f’
// and if the input string is “GeeksQuiz”, then the output should be ‘G’.

const findFirstNonRepeating = string => {
  let charMap = new Map();

  for (char of string) {
    if (charMap.has(char)) charMap.set(char, charMap.get(char) + 1);
    else charMap.set(char, 1);
  }
  console.log(charMap);

  for (let [char, value] of charMap) {
    if (value === 1) {
      return char;
    }
  }

  return 'All Repeats!';
};

const slickMethod = string => {
  for (char of string) {
    if (string.indexOf(char) === string.lastIndexOf(char)) return char;
  }
  return 'All Repeats!';
};

console.log(findFirstNonRepeating('aaabcccdeeef'));
console.log(findFirstNonRepeating('abcabcabcabc'));
console.log(slickMethod('aaabcccdeeef'));
console.log(slickMethod('abcabcabcabc'));