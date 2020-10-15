// Determine if two strings, A and B, are anagrams of each other

const isAnagram = (a, b) => {
  let isAnagram = true;

  generateCharMap = string => {
    const map = new Map();

    for (char of string) {
      if (map.has(char)) map.set(char, map.get(char) + 1);
      else map.set(char, 1);
    }

    return map;
  };

  const aMap = generateCharMap(a);
  const bMap = generateCharMap(b);

  if (aMap.size !== bMap.size) isAnagram = false;
  else {
    aMap.forEach((item, index) => {
      if (bMap.get(index) !== item) isAnagram = false;
    });
  }

  return isAnagram;
};

const isAnagramConcise = (a, b) => {
  return a.split('').sort().join() === b.split('').sort().join();
}

console.log(isAnagram('aabbccdd', 'abcdabcd'));
console.log(isAnagram('aabbccdd', 'abcdabcdd'));
console.log(isAnagram('aaaa', 'bbbb'));
console.log(isAnagram('aaaa', 'aaaa'));
console.log(isAnagram('aaaa', 'aaaab'));

console.log(isAnagramConcise('aabbccdd', 'abcdabcd'));
console.log(isAnagramConcise('aabbccdd', 'abcdabcdd'));
console.log(isAnagramConcise('aaaa', 'bbbb'));
console.log(isAnagramConcise('aaaa', 'aaaa'));
console.log(isAnagramConcise('aaaa', 'aaaab'));

