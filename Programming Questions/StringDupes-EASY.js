// Given a string, return true if it contains no duplicated characters.
// "abcde" should return true, "abcda" should return false.

const containsDupes = string => {
  return [...string].length === new Set(string).size;
};

// This is potentially? faster because it breaks once it finds a dupe
// instead of comparing lengths of fully analyzed char arrays and char sets
const containsDupesFast = string => {
  const set = new Set();
  const chars = [...string];
  const length = chars.length;

  for (let i = 0; i < length; i++) {
    if (!set.has(chars[i])) set.add(chars[i]);
    else return false;
  }

  return true;
};

const containsNoDupes = string => {
  return string.length === new Set(string).size;
}

const containsNoDupesFast = string => {
  const set = new Set;
  const charArray = [...string];
  const length = charArray.length;

  for (let i = 0; i < length; i++) {
    if (!set.has(charArray[i])) set.add(char);
    else return false;
  }
  return true;
}

console.log(containsDupes('abcde'));
console.log(containsDupes('abcda'));

console.log(containsDupesFast('abcde'));
console.log(containsDupesFast('abcda'));

console.log(containsNoDupes('abcde'));
console.log(containsNoDupes('abcda'));
