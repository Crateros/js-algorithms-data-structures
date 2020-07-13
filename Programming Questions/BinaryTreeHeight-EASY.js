// Write an algorithm to compute the height of a binary tree. The height or maximum depth
// of a tree is the number of edges or nodes on longest path from root node to leaf node.

// The following tree would return a height of 3
//        1
//       / \
//      2   2
//     / \
//    3   3
//   / \
//  4   4

// Tree height is calculated by taking the maximum of the left and right subtree and adding 1 (for the current node).
// H(t) = max(left.subtree, right.subtree) + 1
// A leaf node has a height of 0, therefore a null node has a height of -1.

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

  findTreeHeight = subTree => {
    // Base case (leaf node). If we are considering the number of edges when calculating the tree height than a leaf node
    // would have a height of 0 and a null node would have a height of -1
    // If we are considering the number of nodes when calculating the height than a leaf node would have a height of 1 and
    // a null node would have a height of 0
    if (!subTree) return -1;

    // Recurse down the tree, then perform height calculations from the bottom up
    return Math.max(this.findTreeHeight(subTree.left), this.findTreeHeight(subTree.right)) + 1;
  };
}

const bst = new BinaryTree();
bst.root = new Node(1);
bst.root.left = new Node(2);
bst.root.right = new Node(2);
bst.root.left.left = new Node(3);
bst.root.left.right = new Node(3);
bst.root.left.left.left = new Node(4);
bst.root.left.left.right = new Node(4);

console.log(bst.findTreeHeight(bst.root));
