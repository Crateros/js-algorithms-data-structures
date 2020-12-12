// Invert a binary tree.
// Example:

// Input:
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9

// Output:
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

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

  addNode(data, node = this.root) {
    if (data < node.data) {
      if (node.left) this.addNode(data, node.left);
      else node.left = new Node(data);
    } else {
      if (node.right) this.addNode(data, node.right);
      else node.right = new Node(data);
    }
  }

  invertTree(node = this.root) {
    // Recursion base case (escape)
    if (!node) return node;

    // Traverse left and right
    let left = this.invertTree(node.left);
    let right = this.invertTree(node.right);

    // Perform swap
    node.left = right;
    node.right = left;

    return node;
  }
}

const binaryTree = new BinaryTree(4);
binaryTree.addNode(2);
binaryTree.addNode(7);
binaryTree.addNode(1);
binaryTree.addNode(3);
binaryTree.addNode(6);
binaryTree.addNode(9);
console.log(binaryTree.root.right.left.data);

binaryTree.invertTree();
console.log(binaryTree.root.left.left.data);
console.log(binaryTree.root.right.right.data);
console.log(binaryTree.root.right.data);
console.log(binaryTree.root.right.left.data);
