// Given a binary tree, check whether it is a mirror of itself.
// A binary tree is symmetric if it’s left and right subtrees are
// identical-mirror images of each other.

// For example, this binary tree is symmetric:
//      1
//    /   \
//   2     2
//  / \   / \
// 3   4 4   3

// But the following is not:
//     1
//    / \
//   2   2
//    \   \
//    3    3

// The idea is to recurse through the tree and see if two things are true through "pair comparisons":
// 1. leftSubTree.left === rightSubTree.right
// 2. leftSubTree.right === rightSubTree.left
// The root node is always symetrical

class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  addNode = data => new Node(data);
}

const isSymmetrical = node => {
  compareValues = (leftSubTree, rightSubTree) => {
    // Left and right subtrees are null, values match
    if (!leftSubTree && !rightSubTree) return true;
    else if (leftSubTree && rightSubTree) {
      // If both trees are populated we compare the data and return that result
      // and the result of the following recursive traversals to make the comparisons:
      // 1. leftSubTree.left === rightSubTree.right
      // 2. leftSubTree.right === rightSubTree.left
      return (
        leftSubTree.data === rightSubTree.data &&
        compareValues(leftSubTree.left, rightSubTree.right) &&
        compareValues(leftSubTree.right, rightSubTree.left)
      );
    } else
      // One node is populated and the other is not, inferring
      // an unsymmetrical tree
      return false;
  };

  // If root is null we have a symmetric tree, otherwise recurse
  return !node ? true : compareValues(node.left, node.right);
};

const symmetrical = new BinaryTree();
symmetrical.root = symmetrical.addNode(1);
symmetrical.root.left = symmetrical.addNode(2);
symmetrical.root.right = symmetrical.addNode(2);
symmetrical.root.left.left = symmetrical.addNode(3);
symmetrical.root.left.right = symmetrical.addNode(4);
symmetrical.root.right.left = symmetrical.addNode(4);
symmetrical.root.right.right = symmetrical.addNode(3);
console.log('This tree should be symmetrical? ', isSymmetrical(symmetrical.root));

const unsymmetrical = new BinaryTree();
unsymmetrical.root = unsymmetrical.addNode(1);
unsymmetrical.root.left = unsymmetrical.addNode(2);
unsymmetrical.root.right = unsymmetrical.addNode(2);
unsymmetrical.root.left.right = unsymmetrical.addNode(3);
unsymmetrical.root.right.right = unsymmetrical.addNode(3);
console.log('This tree should be unsymmetrical? ', isSymmetrical(unsymmetrical.root));
