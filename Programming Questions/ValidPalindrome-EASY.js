// Given a string, determine if it is a palindrome, considering only
// alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as
// valid palindrome.

// Example 1:
// Input: "A man, a plan, a canal: Panama"
// Output: true

// Example 2:
// Input: "race a car"
// Output: false

// We first convert the string to lower case and turn it into an array via
// the spread operator. We then loop through and filter out non-alphanumeric
// values by using the char codes within the ranges of 0 - 9 (char codes 48 - 57)
// and a - z (char codes 97 to 122). We can then either do a reverse and join to compare
// or use a double pointer for loop and compare indexes at each end collapsing inward.

const validPalindrome = string => {
  let array = [...string.toLowerCase()].filter(c => {
    let code = c.charCodeAt();
    return code >= 48 && code <= 57 || code >= 97 && code <= 122
  });
  // return array.join('') === array.reverse().join('');

  // Could also do a two pointer for loop and compare indexes
  for (let i = 0, j = array.length - 1; i <= j; i++, j--) {
    if (array[i] !== array[j]) return false;
  }

  return true;
}

console.log(validPalindrome('A man019z:!'));
console.log(validPalindrome('A man, a plan, a canal: Panama'));
console.log(validPalindrome('Race a CaR'));
console.log(validPalindrome('Race a eCaR.!:<>'));