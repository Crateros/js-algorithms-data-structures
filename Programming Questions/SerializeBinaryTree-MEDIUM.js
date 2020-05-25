// Serialize and Deserialize a Binary Tree
// Serialization is to store tree in a file so that it can be later restored. T
// he structure of tree must be maintained. Deserialization is reading the
// tree back from file. Null pointers can be represented as an 'X'

const serializeBinaryTree = (treeNode) => {
  // Handle null node
  if (!treeNode.value) return 'X,';

  // Serialize left side of tree
  let leftSerialized = serializeBinaryTree(treeNode.left);
  // Serialize right side of tree
  let rightSerialized = serializeBinaryTree(treeNode.right);

  // Handle node with value: append value to the serialization
  // of the leftSubtree + rightSubtree
  treeNode.value + ',' + leftSubtree + rightSubtree;
};

cosnt deserializeBinaryTree = (file) => {
  return;
};