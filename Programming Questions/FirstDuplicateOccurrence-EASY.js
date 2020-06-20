const findFirstDuplicate = array => {
  // Loop through all items, Push each item into set
  // The first duplicate we encounter should be duplicate
  // with the lowest index

  const set = new Set();
  for (let i = 0; i < array.length; i++) {
    if (!set.has(array[i])) set.add(array[i]);
    else return i;
  }
};

const testArray = [2, 1, 3, 5, 3, 2];
console.log(findFirstDuplicate(testArray));
