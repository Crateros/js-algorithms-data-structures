//      8
//    /   \
//   3     10
//  / \     \
// 1   6    14
//    / \   /
//   4  7  13

class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}

class BST {
  constructor(data) {
    this.root = new Node(data);
  }

  addNode(data, node) {
    if (!node) node = this.root;

    if (data < node.data) {
      if (!node.left) node.left = new Node(data);
      else this.addNode(data, node.left);
    }

    if (data > node.data) {
      if (!node.right) node.right = new Node(data);
      else this.addNode(data, node.right);
    }
  }

  remove(target) {
    // 3 cases to consider:
    // 1. Leaf node removal.
    // 2. Node with only 1 child removal.
    // 3. Node with 2 children removal.

    const removeNode = (data, node) => {
      // No node exists, return null.
      if (!node) return null;

      // Node data and target match, determine what to delete / rearrange.
      if (node.data === data) {
        // A leaf node can simply be removed from the tree without consequence.
        if (!node.left && !node.right) return null;

        // If target node only has right child make right child the successor.
        if (!node.left) return node.right;

        // If target node only has a left child make that left child the successor.
        if (!node.right) return node.left;

        // if (!node.left || !node.right) return node.left ? node.left : node.right;

        // Node has two children, we need to find the nearest value to make a substitution.
        // Traverse the left most half of the right subtree to fund the lowest value that is just
        // above the target to maintain BST rules.
        if (node.left && node.right) {
          let temp = node.right;

          while (temp.left) {
            temp = temp.left;
          }

          // Overwrite node value with left most node of right subtree
          node.data = temp.data;
          // Now we can treat left most node of right subtree as a leaf and do simple removal
          node.right = removeNode(node.right, temp.data);
        }
      } else if (target < node.data) {
        // Target value is less than current node value, go left for smaller values.
        // Remove target in left subtree.
        node.left = removeNode(target, node.left);
        // Return node after left subtree removal.
        return node;
      } else if (target > node.data) {
        // Target value is greateer than current node value, go right for larger values.
        // Remove target value from right subtree.
        node.right = removeNode(target, node.right);
        // Return node after right subtree removal.
        return node;
      }
    };

    this.root = removeNode(target, this.root);
  }

  findMin(node) {
    if (node.left) return this.findMin(node.left);
    return node.data;

    // Iterative Approach
    // let current = this.root;
    // while(current.left) {
    //   current = current.left;
    // }
    // return current;
  }

  findMax(node) {
    if (node.right) return this.findMax(node.right);
    return node.data;

    // Iterative Approach
    // let current = this.root;
    // while (current.right) {
    //   current = current.right
    // }
    // return current;
  }

  findData(target, node) {
    if (!node) return false;
    if (node.data === target) return node;
    if (node.data > target) return this.findData(target, node.left);
    else if (node.data < target) return this.findData(target, node.right);
  }

  breadthFirstSearch() {
    const queue = this.root ? [this.root] : [];
    const levelOrderTraversal = [];

    while (queue.length) {
      let current = queue.shift();

      levelOrderTraversal.push(current.data);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return levelOrderTraversal;
  }

  depthFirstSearch() {
    // const stack = this.root ? [this.root] : [];

    const preOrderTraversal = (traversal = [], node = this.root) => {
      // PreOrder: Data --> Left --> Right

      if (node) {
        traversal.push(node.data);

        preOrderTraversal(traversal, node.left);
        preOrderTraversal(traversal, node.right);
      }

      // while (stack.length) {
      //   let current = stack.pop();
      //   preOrder.push(current.data);
      //   if (current.right) stack.push(current.right);
      //   if (current.left) stack.push(current.left);
      // }

      return traversal;
    };

    const inOrderTraversal = (traversal = [], node = this.root) => {
      // InOrder: Left --> Data --> Right
      if (node) {
        inOrderTraversal(traversal, node.left);
        traversal.push(node.data);
        inOrderTraversal(traversal, node.right);
      }

      return traversal;
    };

    const postOrderTraversal = (traversal = [], node = this.root) => {
      // PostOrder: Left --> Right --> Data
      if (node) {
        postOrderTraversal(traversal, node.left);
        postOrderTraversal(traversal, node.right);
        traversal.push(node.data);
      }

      return traversal;
    };

    const traversals = {
      preOrder: preOrderTraversal(),
      inOrder: inOrderTraversal(),
      postOrder: postOrderTraversal(),
    };

    return traversals;
  }
}

const bst = new BST(8);
bst.addNode(3);
bst.addNode(10);
bst.addNode(1);
bst.addNode(6);
bst.addNode(14);
bst.addNode(4);
bst.addNode(7);
bst.addNode(13);

console.log(bst.root.right.right.left);
console.log(bst.findMin(bst.root));
console.log(bst.findMax(bst.root));
console.log(bst.findData(7, bst.root));
console.log(bst.findData(99, bst.root));
console.log(bst.findData(6, bst.root));
console.log(bst.breadthFirstSearch());
console.log(bst.depthFirstSearch());
bst.remove(13);
console.log('13 should be gone: ', bst.root.right.right.left);
