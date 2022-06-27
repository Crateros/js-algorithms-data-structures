var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  sChars = s.split("").sort();
  tChars = t.split("").sort();
  for (let i = 0; i < s.length; i++) {
    if (sChars[i] !== tChars[i]) return false;
  }
  return true;
};

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  function tally(chars) {
    const freq = new Map();
    for (char of [...chars]) {
      freq.has(char) ? freq.set(char, freq.get(char) + 1) : freq.set(char, 1);
    }
    return freq;
  }

  const sFreq = tally(s);
  const tFreq = tally(t);

  for ([key, freq] of sFreq) {
    if (sFreq.get(key) !== tFreq.get(key)) return false;
  }

  return true;
};

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  const freqArr = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    freqArr[s.charCodeAt(i) - 97] += 1;
    freqArr[t.charCodeAt(i) - 97] -= 1;
  }
  return freqArr.every((val) => val === 0);
};
