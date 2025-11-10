import { Tree } from "./binarySearchTree.js";
import { prettyPrint } from "./prettyPrint.js";

// Utility: random array generator
function randomArray(size, max = 100) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * max));
}

// STEP 1: Create tree from random numbers < 100

const tree = new Tree([
  42, 15, 89, 7, 63, 18, 27, 90, 54, 31, 73, 8, 44, 12, 66,
]);
tree.remove(73);
tree.remove(15);
prettyPrint(tree.root);
