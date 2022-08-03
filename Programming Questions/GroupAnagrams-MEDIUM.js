// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

const groupAnagrams = function (strs) {
  const result = new Map();

  strs.forEach((str) => {
    // Create frequency array to handle lower case alphabet chars
    const freqArr = new Array(26).fill(0);
    [...str].forEach((char) => {
      // Find char code for current char by doing current
      // char code - 'a' (since all chars are lowercase)
      freqArr[char.charCodeAt() - "a".charCodeAt()] += 1;
    });
    // Use frequency array as map key, then add words to that key with
    // matching frequency array
    const key = freqArr.join();
    if (result.has(key)) {
      const value = result.get(key);
      value.push(str);
      result.set(key, value);
    } else {
      result.set(key, [str]);
    }
  });
  return Array.from(result.values());
};
