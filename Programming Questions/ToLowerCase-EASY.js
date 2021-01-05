// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

// Example 1:
// Input: "Hello"
// Output: "hello"

// Example 2:
// Input: "here"
// Output: "here"

// Example 3:
// Input: "LOVELY"
// Output: "lovely"

const toLowerCase = string => {
  const arr = string.split('');
  arr.forEach((c, i) => arr[i] = lowerChar(c));

  function lowerChar(c) {
    const isUpper = c.charCodeAt() < 91 && c.charCodeAt() > 64;
    return isUpper ? String.fromCharCode(c.charCodeAt() + 32) : c;
  }

  return arr.join('');
};

console.log(toLowerCase('Hello'));
console.log(toLowerCase('Hel&lLLo.!'));
