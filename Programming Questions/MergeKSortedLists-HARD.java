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

class Solution {
  public ListNode mergeKLists(ListNode[] lists) {
    // Time: o(nlogk)
    // Priority queue: every time you take a node out, you put its next back in the queue
    // Priority queue by val
    PriorityQueue<ListNode> heap = new PriorityQueue<>((a, b) -> a.val - b.val);
    ListNode head = new ListNode(0);
    ListNode current = head;

    // Put all heads in queue
    for (int i = 0; i < lists.length; i++) {
      if (lists[i] != null) {
        heap.offer(lists[i]);
      }
    }

    // Take a node out of queue, link it, and add its next back in
    while (!heap.isEmpty()) {
      // Grab the top element (smallest) from the queue
      ListNode node = heap.poll();
      current.next = node;
      // Advance current
      current = current.next;
      if (node.next != null) {
        heap.offer(node.next);
      }
    }

    return head.next;
  }
}
