const findFirstDuplicate = array => {
  // Loop through all items, Push each item into set
  // The first duplicate we encounter should be duplicate
  // with the lowest index

  const set = new Set();
  for (let item of array) {
    if (!set.has(item)) set.add(item);
    else return i;
  }

  return -1;
};

const testArray = [2, 1, 3, 5, 3, 2];
console.log(findFirstDuplicate(testArray));
