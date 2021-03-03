// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:
// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6

// Example 2:
// Input: lists = []
// Output: []

// Example 3:
// Input: lists = [[]]
// Output: []




var mergeKLists = function(lists) {
  const result = [];

  // Iterate through linked lists
  for (list of lists) {
    // Add each value of linked list to result array
    while (list) {
      result.push(list.val);
      list = list.next;
    }
  }

  // Sort result in descending order
  result.sort((a, b) => b - a);

  // Build new linked list from result, starting with the largest element
  // and working backwards so that the first element is the smallest
  return result.reduce((acc, item) => acc = new ListNode(item, acc), null);
};
