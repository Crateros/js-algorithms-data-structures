// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest
// path from the root node down to the farthest leaf node.

//     3
//   /   \
//  9    20
//      /  \
//     15   7

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:
// Input: root = [1,null,2]
// Output: 2

// Example 3:
// Input: root = []
// Output: 0

// Example 4:
// Input: root = [0]
// Output: 1

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(data) {
    this.root = new Node(data);
  }
}

// This method includes the root as a depth of 1
const maximumDepthRoot = node => {
  if (!node) return 0;
  return Math.max(maximumDepthRoot(node.left), maximumDepthRoot(node.right)) + 1;
};

// This method does not include the root of the tree when considering the depth
const maximumDepthNoRoot = node => {
  if (!node) return -1;
  return Math.max(maximumDepthNoRoot(node.left), maximumDepthNoRoot(node.right)) + 1;
};

let answer = 0;
const moreDepth = (node, depth) => {
  if (!node) return null;

  // We have now hit a leaf node, determine if current depth exceeds current answer
  if (!node.left && !node.right) answer = Math.max(answer, depth);

  moreDepth(node.left, depth++);
  moreDepth(node.right, depth++);

  return answer;
};

const bottomUpDepth = node => {
  // If counting root in depth return 0
  if (!node) return -1;

  console.log(node.left);

  return Math.max(bottomUpDepth(node.left), bottomUpDepth(node.right)) + 1;
};

const binaryTree = new BinaryTree(3);
binaryTree.root.left = new Node(9);
binaryTree.root.right = new Node(20);
binaryTree.root.right.left = new Node(15);
binaryTree.root.right.right = new Node(7);
console.log(maximumDepthRoot(binaryTree.root));
console.log(maximumDepthNoRoot(binaryTree.root));
console.log(moreDepth(binaryTree.root, 0, 0));
console.log(bottomUpDepth(binaryTree.root));
