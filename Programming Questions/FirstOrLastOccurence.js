// Can use binary search to find first or last occurence of element in sorted array
// containing duplicates

// if you do need to sort array ascending
//
// array.sort(function(a, b) {
//   return a-b;
// });
//
// or desceding use b-a

function firstOrLast(array, target) {
  var low = 0;
  var high = array.length - 1;
  //If we dont find target we return -1
  var result = -1;
  //Empty array
  if (high < 1) {
    console.log("Empty array");
    return -1;
  }
  while (low <= high) {
    var mid = Math.floor((low + high) / 2);
    if(array[mid] === target) {
      //Keps track of current position of target
      result = mid;
      //Shifts to the left, look for earlier occurence of target
      high = mid - 1;
      //Shifts to the right, look for later occurence of target
      // low = mid + 1
    }
    else if (array[mid] < target) {
      low = mid + 1;
    }
    else if (array[mid] > target) {
      high = mid - 1;
    }
  }
  return result;
}
