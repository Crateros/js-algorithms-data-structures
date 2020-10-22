// Find the minimum number of deletions necessary between
// two strings A & B (all lowercase) to convert them into anagrams of each other.
// If a common anagram does not exist return false

const isAnagram = (a, b) => {
  let anagram = true;

  const generateCharMap = string => {
    const map = new Map();

    for (char of string) {
      if (map.has(char)) map.set(char, map.get(char) + 1);
      else map.set(char, 1);
    }

    return map;
  };

  aMap = generateCharMap(a);
  bMap = generateCharMap(b);

  if (aMap.size !== bMap.size) anagram = false;
  else {
    aMap.forEach((item, index) => {
      if (bMap.get(index) !== item) anagram = false;
    });
  }

  return anagram;
};

const makeAnagram = (a, b) => {
  let minDeletions = 0;

  generateCharFrequency = string => {
    const freqArray = new Array(26).fill(0);
    const initialCode = 'a'.charCodeAt(0);

    for (let i = 0; i < string.length; i++) {
      freqArray[string.charCodeAt(i) - initialCode]++;
    }

    return freqArray;
  };

  aFrequency = generateCharFrequency(a);
  bFrequency = generateCharFrequency(b);

  for (let i = 0; i < 26; i++) {
    minDeletions += Math.abs(aFrequency[i] - bFrequency[i]);
  }

  return minDeletions < a.length + b.length ? minDeletions : 'No anagram possible';
};

console.log(isAnagram('aabbccdd', 'abcdabcd'));
console.log(isAnagram('aabbccdd', 'abcdabcdd'));
console.log(isAnagram('aaaa', 'bbbb'));
console.log(isAnagram('aaaa', 'aaaa'));
console.log(isAnagram('aaaa', 'aaaab'));

console.log(makeAnagram('aaaa', 'bbbb'));
console.log(makeAnagram('aaaa', 'aaaaa'));
console.log(makeAnagram('bbbb', 'bcccc'));
console.log(makeAnagram('aabbccdd', 'abcdabcd'));
