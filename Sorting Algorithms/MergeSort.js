// Merge Sort Algorithm O(N*Log(N))

// Depth-first splitting of unsorted list into
// sub-lists until a base case of [1] or [] is found.
// Base cases then bubble back up the chain and are sorted
// at each interval until the entire original list
// is sorted. Split --> Merge --> Split --> Merge

const mergeSort = list => {
  // Check if array can be split (base case recursion exit)
  if (list.length < 2) return list;

  // Get middle index
  const mid = Math.floor(list.length / 2);

  // Split array
  const left = list.slice(0, mid);
  const right = list.slice(mid, list.length);

  console.log('Split - Left:', left, 'Right:', right);

  // Continue splitting array recursively until only base cases remain
  return mergeLists(mergeSort(left), mergeSort(right));
};

const mergeLists = (left, right) => {
  // Compare pointer values, push lower value to new array
  // Advance winning pointer

  // Create new array
  const merged = [];

  // Check if left or right is empty
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      merged.push(left.shift());
    } else merged.push(right.shift());
  }

  // Add remaining left array
  while (left.length)
    merged.push(left.shift());

  // Add remaining right array
  while (right.length)
    merged.push(right.shift());

  console.log('Merged:', merged);
  return merged;
};

// console.log(mergeLists([5, 6, 9], [1, 2, 4]));

mergeSort([5, 3, 7, 10, 4, 1, 6, 11, 99, 0, 2]);
