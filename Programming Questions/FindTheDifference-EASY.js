// You are given two strings s and t. String t is generated by random
// shuffling string s and then add one more letter at a random position.
// Return the letter that was added to t.

// Example 1:
// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.

// Example 2:
// Input: s = "", t = "y"
// Output: "y"

// Example 3:
// Input: s = "a", t = "aa"
// Output: "a"

// Example 4:
// Input: s = "ae", t = "aea"
// Output: "a"

var findTheDifference = function(s, t) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.get(s[i]) + 1 || 1);
  }

  for (let i = 0; i < t.length; i++) {
    if (!map.get(t[i])) return t[i];
    else map.set(t[i], map.get(t[i]) - 1);
  }
};
