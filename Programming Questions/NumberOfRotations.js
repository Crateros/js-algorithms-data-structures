// Sorted array and no duplicates as precondition. Find how many
// times the array has been rotated, how many steps it would take to
// resort the array ascending.

// Start by finding index of minimum element in array
// Could use linear search (search through each element and update min as necessary),
// but binary search more elegant / faster

// Look at the pivot element, this should have larger values on the left and right
// indices because it was initially at the beginning (sorted). This is the ONLY
// element that will have such properties (pivot properties).

// case 1: array[low] <= array[high] only possible if segment is sorted!
// return low
// next = (mid+1) % n
// prev = (mid + n -1) % n dont want n becoming negative

// case 2: array[mid] <= array[next] && array[mid] <= array[prev]
// return array[mid] <--- this is pivot element

// case 3: array[mid] <= array[high], this segment must be sorted
//   we then need to set high = mid -1, go to the left
//
// case 4: array[mid] >= array[low]
//   low = mid + 1, go to the right

function findRotationCount(array) {
  var low = 0;
  var high = array.length -1;

  while (low <= high) {
    var mid = Math.floor((high - low) / 2);
    var next = (mid + 1) % array.length;
    var prev = (mid + array.length - 1) % array.length;
    //Already sorted, no rotations
    if (array[low] <= array[high]) {
      console.log("Already sorted!");
      return low;
    }
    //Found pivot element at array[mid]
    else if(array[mid] < array[next] && array[mid] << array[prev]) {
      console.log("Array has rotated");
      return mid;
    }
    //Sorted section, but pivot element not found, shift high left
    else if(array[mid] <= array[high]) {
      console.log("Sorted section, but pivot not found, shifting high behind mid to the left");
      high = mid - 1;
    }
    //Not sorted, shift low right
    else if(array[mid] >= array[low]) {
      console.log("Not sorted, shifting low past mid to the right");
      low = mid + 1;
    }
  }
  //Preconditions not met
  return -1;
}
