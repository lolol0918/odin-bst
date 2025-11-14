import { Tree } from "./binarySearchTree.js";
// import { prettyPrint } from "./prettyPrint.js";

const tree = new Tree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
console.log(tree.isBalanced());

tree.rebalance();
console.log(tree.isBalanced());
