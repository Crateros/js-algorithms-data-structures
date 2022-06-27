// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

const containsDuplicate = array => {
  const set = new Set(array);
  if (set.size !== array.length) return true;
  return false;
};

const containsDuplicateAgain = array => {
  return array.length !== new Set(array).size;
}

const containsDupeMap = array => {
  const map = new Map;
  for (let i = 0; i < array.length; i++) {
    if (map.has(array[i])) return true;
    else map.set(array[i], true);
  }
  return false;
}

const arr1 = [1, 2, 3, 1];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 1, 1, 3, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(arr1));
console.log(containsDuplicate(arr2));
console.log(containsDuplicate(arr3));

console.log(containsDuplicateAgain(arr1));
console.log(containsDuplicateAgain(arr2));
console.log(containsDuplicateAgain(arr3));

console.log(containsDupeMap(arr1));
console.log(containsDupeMap(arr2));
console.log(containsDupeMap(arr3));


// Python
// class Solution:
//     def containsDuplicate(self, nums: List[int]) -> bool:
//         return len(set(nums)) != len(nums)
//         dict = {}

//          for num in nums:
//              if num in dict:
//                  return True
//              else:
//                  dict[num] = 1
//          return False

// Golang
// func containsDuplicate(nums []int) bool {
//     frequency := make(map[int]bool)

//     for _, num := range nums {
//         if (frequency[num] == true) {
//             return true
//         } else {
//          frequency[num] = true
//         }
//     }
//     return false
// }