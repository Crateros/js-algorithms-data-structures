// Given a string, return true if it contains no duplicated characters.
// "abcde" should return true, "abcda" should return false.

const containsDupes = string => {
  return [...string].length === new Set(string).size;
};

const containsDupesFast = string => {
  const set = new Set();
  const chars = [...string];
  const length = chars.length;

  for (let i = 0; i < length; i++) {
    if (!set.has(chars[i])) set.add(chars[i]);
    else return true;
  }

  return false;
};

console.log(containsDupes('abcde'));
console.log(containsDupes('abcda'));
console.log(containsDupesFast('abcde'));
console.log(containsDupesFast('abcda'));
