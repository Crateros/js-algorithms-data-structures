// Given a binary tree and an integer k, return whether there exists a root-to-leaf path that sums up to k.

// For example, given k = 18 and the following binary tree:

//     8
//    / \
//   4   13
//  / \   \
// 2   6   19

// Return True since the path 8 -> 4 -> 6 sums to 18.

// 8 --> N,L --> 4 N,L --> 2 N,L,R --> 4 R --> 6 N
// 18-8=10 --> 10-4=6 --> 6-2==4(fail) --> 10-4=6 --> 6-6=0(true)

// We can solve this with recursion by splitting the full route into sub-routes
// that will yield a portion of the target sum

const findTreeSumInitial = (node, sum) => {
  // Find a path from root to leaf that will yield the provided sum
  // We can use pre-order traversal (Node --> Left -> Right) to attempt
  // to find a path to the sum
  if (node) {
    const delta = sum - node.data;

    if (!node.left & !node.right) {
      if (delta === 0) {
        console.log('Found sum at leaf: ', node);
        return true;
      }
      return false;
    }

    findTreeSum(node.left, delta);
    findTreeSum(node.right, delta);
  }
};

const findTreeSum = (node, sum) => {
  // Find a path from root to leaf that will yield the provided sum
  // We can use Preorder traversal (Node --> Left -> Right) to attempt
  // to find a path to the sum

  // We have moved beyond the tree bounds, send false up the stack
  if (!node) return false;

  // We have encountered a leaf with the sum we are looking for, send true up the stack
  if (!node.left & !node.right && sum === node.data) return true;

  // Recurse through the tree, subtracting the current nodes value from the shrinking sum
  return findTreeSum(node.left, sum - node.data) || findTreeSum(node.right, sum - node.data);
};

const findTreeSumWithPath = (node, sum, path = []) => {
  if (!node) return false;

  if (!node.left & !node.right) {
    if (node.data === sum) {
      path.unshift(node.data);
      return path;
    } else return false;
  }

  if (findTreeSumWithPath(node.left, sum - node.data, path)) {
    path.unshift(node.data);
    return path;
  }

  if (findTreeSumWithPath(node.right, sum - node.data, path)) {
    path.unshift(node.data);
    return path;
  }

  return false;
};

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  addNode(data) {
    // Take the data and make a node
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      // Utilize insertNode() to find correct node position
      this.insertNode(this.root, newNode);
    }
  }

  // Traverse binary tree to find correct node position
  // and perform insertion
  insertNode(node, newNode) {
    // Handle case where value is less than parent, GO LEFT
    if (newNode.data < node.data) {
      // Check if we can place node
      if (node.left === null) {
        // Place node
        node.left = newNode;
        // Otherwise use recursion to do the same process over again
        // until we find a null position to put the node
      } else this.insertNode(node.left, newNode);
    } else {
      // Handle case where value is grater than parent, GO RIGHT
      if (node.right === null) {
        node.right = newNode;
      } else this.insertNode(node.right, newNode);
    }
  }
}

const findTreeSumAgain = (node, sum) => {
  if (!node) return false;
  if (!node.left && !node.right && sum === node.data) return true;
  return findTreeSumAgain(node.left, sum - node.data) || findTreeSumAgain(node.right, sum - node.data);
};

let treeOne = new BinarySearchTree();
treeOne.addNode(8);
treeOne.addNode(4);
treeOne.addNode(13);
treeOne.addNode(2);
treeOne.addNode(6);
treeOne.addNode(19);

console.log(findTreeSum(treeOne.root, 14));
console.log(findTreeSum(treeOne.root, 18));
console.log(findTreeSum(treeOne.root, 40));
console.log(findTreeSum(treeOne.root, 41));

console.log(findTreeSumWithPath(treeOne.root, 14));
console.log(findTreeSumWithPath(treeOne.root, 18));
console.log(findTreeSumWithPath(treeOne.root, 40));
console.log(findTreeSumWithPath(treeOne.root, 41));

console.log(findTreeSumAgain(treeOne.root, 14));
console.log(findTreeSumAgain(treeOne.root, 40));
console.log(findTreeSumAgain(treeOne.root, 41));
console.log(findTreeSumAgain(treeOne.root, 18));
