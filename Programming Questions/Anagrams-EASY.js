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
      console.log(index, item);
      if (bMap.get(index) !== item) isAnagram = false;
    });
  }

  return isAnagram;
};

const isAnagramConcise = (a, b) => {
  return a.split('').sort().join() === b.split('').sort().join();
}

const isAnagramMap = (a, b) => {
  let isAnagram = true;

  const generateCharMap = (string) => {
    const map = new Map;
    for (char of string) {
      map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
    }
    return map;
  }

  const charMapA = generateCharMap(a);
  const charMapB = generateCharMap(b);

  if (charMapA.size !== charMapB.size) isAnagram = false;

  else {
    charMapA.forEach((item, index) => {
      if (charMapB.get(index) !== item) isAnagram = false;
    });
  }

  return isAnagram;
}

console.log(isAnagram('aabbccdd', 'abcdabcd'));
// console.log(isAnagram('aabbccdd', 'abcdabcdd'));
// console.log(isAnagram('aaaa', 'bbbb'));
// console.log(isAnagram('aaaa', 'aaaa'));
// console.log(isAnagram('aaaa', 'aaaab'));

console.log(isAnagramConcise('aabbccdd', 'abcdabcd'));
console.log(isAnagramConcise('aabbccdd', 'abcdabcdd'));
console.log(isAnagramConcise('aaaa', 'bbbb'));
console.log(isAnagramConcise('aaaa', 'aaaa'));
console.log(isAnagramConcise('aaaa', 'aaaab'));

console.log(isAnagramMap('aabbccdd', 'abcdabcd'));
