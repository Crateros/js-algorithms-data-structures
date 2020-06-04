// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:
// a binary tree in which the left and right subtrees of every
// node differ in height by no more than 1.

// Example 1:

// Given the following tree [3,9,20,null,null,15,7]:

//     3
//    / \
//   9  20
//     /  \
//    15   7
// Return true.

// Example 2:

// Given the following tree [1,2,2,3,3,null,null,4,4]:

//        1
//       / \
//      2   2
//     / \
//    3   3
//   / \
//  4   4
// Return false.

// This problem is using Level-Order insertion to build the trees!

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  addNode(data) {
    return new Node(data);

    // this.root === null ? (this.root = newNode) : this.insertNode(this.root, newNode);
  }

  // insertNode(root, node) {
  //   if (!root.left) root.left = node;
  //   else if (!root.right) root.right = node;

  //   else {
  //     if (!root.right) root.right = node;
  //     else this.insertNode(root.right, node);
  //   }
  // }
}

BinaryTree.prototype.balancedTree = subTree => {
  // Returns true if tree is balanced
  // Calculating the height of a tree is Math.max(subTree.left, subTree.right) + 1
  // Base case for height: !subtree returns 0
  // Calculating if a tree is balanced is Math.abs(subTree.left - subTree.right) <= 1
  // Base case for balance: !subtree returns true

  subTreeHeight = subTree => {
    // Base case
    if (!subTree) return 0;
    // Recurse down the tree to determine the subTree height
    return Math.max(subTreeHeight(subTree.left), subTreeHeight(subTree.right)) + 1;
  };

  isBalanced = subTree => {
    // Base case
    if (!subTree) return true;

    // Recurse down the tree to determine the subTree balance on the left and right side (which requires the subTree height)
    return Math.abs(subTreeHeight(subTree.left), subTreeHeight(subTree.right)) <= 1;
  };

  return isBalanced(subTree);
};

const tree = new BinaryTree();
tree.root = new Node(3);
tree.root.left = new Node(9);
tree.root.right = new Node(20);
tree.root.right.left = new Node(15);
tree.root.right.right = new Node(7);
console.log('Should be true: ', tree.balancedTree(tree.root));

const treeTwo = new BinaryTree();
treeTwo.root = new Node(1);
treeTwo.root.left = new Node(2);
treeTwo.root.right = new Node(2);
treeTwo.root.left.left = new Node(3);
treeTwo.root.left.right = new Node(3);
treeTwo.root.left.left.left = new Node(3);
treeTwo.root.left.left.right = new Node(4);
console.log('Should be false: ', treeTwo.balancedTree(treeTwo.root));
