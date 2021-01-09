// Search circularly sorted array using binary search O(logn) instead of
// linear search O(n) to find if an element exists in the array

// Again, find pivot point to divide and conquer given that the array is sorted,
// can discard left half or right half based on value at pivot point,
// pivot point will be < array[prev] and < array[next]

// case 1: array[mid] === target
// return mid
//
//
// case 2: array[mid] <= array[high]
// this segment is sorted, see if target is inside
//
// case 2A: target > array[mid] && target <= array[high]
// target lies somewhere in the range of array[mid] to array[high], go right
// low = mid + 1;
//
// case 2B: target > array[high]
// target lies outside the range, go left
// high = mid - 1;
//
//
// case 3: array[low] <= array[mid]
// this segment is sorted, see if target is inside
//
// case 3A: target < array[mid] && target >= array[low]
// target lies somewhere in range of array[low] to array[mid], go left
// high = mid -1;
//
// case 3B: target > array[mid]
// target lies outside of range, go right
// low = mid + 1;

function elementInCircSort(array, target) {
  var low = 0;
  var high = array.length - 1;
  if (array.length < 1) {
    console.log('Empty array');
    return -1;
  }
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    //Found target element
    if (array[mid] === target) {
      console.log('Found ' + target + ' at index:');
      return mid;
    }
    //Sorted section mid to high, search for element
    if (array[mid] <= array[high]) {
      //Shift to the right
      if (target > array[mid] && target <= array[high]) {
        low = mid + 1;
      } else {
        //Target lies outside this range, go left (lower half range)
        high = mid - 1;
      }
    } else if (array[low] <= array[mid]) {
      //Sorted section low to mid, search for element
      //shift to the left
      if (target > array[low] && target <= array[mid]) {
        high = mid - 1;
      } else {
        //Target lies outside of this range, go right (higher half range)
        low = mid + 1;
      }
    }
  }
  //Couldn't find Element
  console.log('Nope');
  return -1;
}
elementInCircSort([5, 6, 7, 1, 2, 3, 4], 5);
