const reverseString = (s, k) => {
  let performFlip = true;
  let i = 0;
  let j = k;
  let result = [];
  while (j < s.length + k) {
    if (performFlip) result.push(...[...s.substring(i, j)].reverse());
    else result.push(...s.substring(i, j));
    i += k;
    j += k;
    performFlip = !performFlip;
  }
  return result.join('');
};

console.log(reverseString('abcdefgh', 4));