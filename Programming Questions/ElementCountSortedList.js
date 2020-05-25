//Given sorted array and target, determine how many times target occurs in array, this is linear search, can be optomized
// for instance, you could stop counting (iterating) when array[i] > target given the fact
//that the array is sorted (precondition). The speed is O(n).
function findCount(array, target) {
  var count = 0;
  for (var i=0; i < array.length; i++) {
    if array[i] === target;
    count ++;
  }
  console.log("The number appears " + count + " times.");
}
findCount([1,2,3,4,4,4,4,5,], 4);

//Make is better / faster with binary search! O(Logn) or worse case O(n):
//O(Logn) + O(n) => O(n) so this is OK but can be better.

//---------------------------------------------------------------------------

//Use binary search to find first and last occurence of target, then extrapolate
//number of occurences using index[i+n] - index[i].

// function binaryFindCount(array, target) {
//   first = findFirst(array, target); ---> O(Logn)
//   last = findLast(array, target); ---> O(Logn)
//   return last-first+1 //inclusive
// }

//binary search, use bool flag to determine if search should go left(lower) or right(higher) indices to find the range
//of occurences for target
function binarySearch(array, target, searchFlag) {
  var low = 0;
  var high = array.length-1;
  var result = -1;

  if(high < 1){
    console.log("Empty array")
    return -1
  }
  while(low <= high) {
    //update mid on each iteration using new low or high parameters
    var mid = Math.floor((low+high)/2);
    console.log(mid);
    if(array[mid] === target) {
      result = mid;
      //Get first index (with flag)
      if(searchFlag === true) {
        //Keep searching lower indices (left)
        high = mid-1;
      }
      //Get last index (with flag)
      else if(searchFlag === false) {
        //Keep searching higher indices (right)
        low = mid+1;
      }
    }

    else if(array[mid] < target) {
      low = mid+1;
    }

    else {
      high = mid-1;
    }
  }
  //Did not find the number in array of length n
  console.log("Can't find it");
  return result;
}

function binaryFindCount(array, target) {
  var firstIndex = binarySearch(array, target, true);
  if(firstIndex === -1) {
    console.log ("It doesn't show up.");
  }
  else {
    var lastIndex = binarySearch(array, target, false);
    var count = lastIndex - firstIndex + 1;
    console.log(target + " occured " + count + " times.");
    return count;
  }
}

binaryFindCount([1,1,1,2,3,4,4,4,5,5,5,5,5], 6)
