import { Tree } from "./binarySearchTree.js";
import { prettyPrint } from "./prettyPrint.js";

// Helper function to generate random numbers < 100
function randomArray(size) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}

// -------------------------
// Driver Script
// -------------------------

// 1. Create BST from random numbers
const numbers = randomArray(10);
console.log("Random numbers:", numbers);

const tree = new Tree(numbers);

// 2. Confirm the tree is balanced
console.log("\nIs the tree balanced?", tree.isBalanced());

// 3. Print all elements in different traversals
console.log("\nLevel order:");
tree.levelOrderForEach((node) => console.log(node.data));

console.log("\nPre-order:");
tree.preOrderForEach((node) => console.log(node.data));

console.log("\nPost-order:");
tree.postOrderForEach((node) => console.log(node.data));

console.log("\nIn-order:");
tree.inOrderForEach((node) => console.log(node.data));

// 4. Pretty print the tree
console.log("\nPretty print of the tree:");
prettyPrint(tree.root);

// 5. Unbalance the tree by adding numbers > 100
tree.insert(101);
tree.insert(120);
tree.insert(150);

console.log("\nAfter inserting numbers > 100:");
console.log("Is the tree balanced?", tree.isBalanced());
prettyPrint(tree.root);

// 6. Rebalance the tree
tree.rebalance();

console.log("\nAfter rebalancing:");
console.log("Is the tree balanced?", tree.isBalanced());
prettyPrint(tree.root);

// 7. Print all traversals again
console.log("\nLevel order:");
tree.levelOrderForEach((node) => console.log(node.data));

console.log("\nPre-order:");
tree.preOrderForEach((node) => console.log(node.data));

console.log("\nPost-order:");
tree.postOrderForEach((node) => console.log(node.data));

console.log("\nIn-order:");
tree.inOrderForEach((node) => console.log(node.data));
