// Given a string, return the number of substrings that have only one distinct letter

const countLetters = string => {
  let total = 1;
  let currentCount = 1;
  for (let i = 1; i < string.length; i++) {
    if (string[i - 1] === string[i]) currentCount++;
    else currentCount = 1;
    total += currentCount;
  }
  return total;
};

console.log(countLetters('aaaba'));
console.log(countLetters('aaaaaaaaaa'));