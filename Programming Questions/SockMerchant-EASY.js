// John works at a clothing store. He has a large pile of socks that he must pair by color for sale.
// Given an array of integers representing the color of each sock,
// determine how many pairs of socks with matching colors there are.

// For example, there are n = 7 socks with colors ar=[1, 2, 1, 2, 1, 3, 2].
// There is one pair of color 1 and one of color 2.
// There are three odd socks left, one of each color. The number of pairs is 2.

const sockMerchant = socks => {
  const set = new Set();
  let pairs = 0;

  for (let i = 0; i < socks.length; i++) {
    if (set.has(socks[i])) {
      pairs++;
      set.delete(socks[i]);
    } else set.add(socks[i]);
  }

  return { pairs, oddSocks: set };
};

const testOne = [1, 2, 1, 2, 1, 3, 2];
const testTwo = [1, 2, 1, 1, 4, 1, 1, 3, 2, 5, 2, 3, 3, 5];
console.log(sockMerchant(testOne));
console.log(sockMerchant(testTwo));
