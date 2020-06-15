// Sorted array is a precondition for binary search. Use start, mid, and end
// variables. Start begins at index 0, end begins at index
// array.length -1 and mid = (start + end) / 2. Consider three cases when doing binary
// search:
// 1. x === array[mid]  - You are done, nice!
// 2. x > array[mid] - start becomes mid + 1, end stays the same, update mid
// 3. x < array[mid] - start stays the same, end becomes mid - 1, update mid
//
// Best case: 1 comparison
// Worst case: K steps to reduce n to 1 (one element). n / 2^k = 1 => k = log(2)n ---> O(logn)

//Iterative approach
function binarySearch(array, target) {
  var start = 0;
  var end = array.length - 1;

  //Check for empty array
  if (array.length < 1) {
    return -1;
  }

  //Sort array if necessary
  array = array.sort(function(a, b) {
    return a - b;
  });

  //Loop through the array as long as start does not increment beyond end (exit condition)
  while (start <= end) {
    //Calculate mid point at each iteration, with HUGE arrays start + end can exceed memory
    // allocation limits, so a more robust approach is mid = start + (end - start) / 2
    // this will avoid overflow
    var mid = Math.floor((start + end) / 2);

    //Check for a match
    if (array[mid] === target) {
      console.log('I found ' + target + ' at index ' + mid + ' in array [' + array + ']');
      return mid;
    } else if (array[mid] < target) {
      //Adjust end index position if target value is smaller
      start = mid + 1;
    } else if (array[mid] > target) {
      //Adjust start index position if target value is larger
      end = mid - 1;
    }
  }
  //No match found
  return -1;
}

binarySearch([1, 2, 3, 4, 5, 6], 3);

// What if array does not come sorted? Implement ascending sort function

var array = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];

array.sort(function(a, b) {
  return a - b;
});

// ---------------------------------------------------------

// Recursive approach, O(log(n)). Iteration has advantages because it does not add function stacks to the memory

function binarySearchRecursive(array, start, end, target) {
  var mid = Math.floor(start + (end - start) / 2); //This prevents overflow instead of using start + end for HUGE array
  console.log('top of mid: ', mid);
  // //Sort array ascending if necessary
  // array = array.sort(function(a, b) {
  //   return a-b;
  // });

  //Element not found, exit recursion
  if (start > end) {
    console.log('nope');
    return -1;
  }
  if (array[mid] === target) {
    //Element found, exit recursion
    console.log('I found ' + target + ' at index ' + mid + ' in array [' + array + ']');
    return mid;
  } else if (target < array[mid]) {
    return binarySearchRecursive(array, start, mid - 1, target);
  } else if (target > array[mid]) {
    return binarySearchRecursive(array, mid + 1, end, target);
  }
}
binarySearchRecursive([1, 5, 7, 21, 55, 77, 79], 0, 7, 55);

function binarySearch(arr, x) {
  var low = 0;
  var high = arr.length - 1;

  if (high < 2) {
    return -1;
  }

  while (low <= high) {
    var mid = Math.floor((high + low) / 2);

    if (arr[mid] === x) {
      return mid;
    } else if (arr[mid] < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

function binarySearchRecursive(arr, low, high, x) {
  var mid = Math.floor((high + low) / 2);

  if (low > high) {
    return -1;
  }
  if (arr[mid] === x) {
    return mid;
  } else if (arr[mid] < x) {
    return binarySearchRecursive(arr, mid + 1, high, x);
  } else if (arr[mid] > x) {
    return binarySearchRecursive(arr, low, mid - 1, x);
  }
}
