import { Tree } from "./binarySearchTree.js";
// import { prettyPrint } from "./prettyPrint.js";

const tree = new Tree();
tree.insert(20);
tree.insert(10);
tree.insert(30);
tree.insert(5);
tree.insert(15);
tree.insert(25);
tree.insert(35);

console.log(tree.isBalanced()); // should print true
