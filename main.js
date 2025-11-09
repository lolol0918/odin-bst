import { Tree } from "./binarySearchTree.js";
import { prettyPrint } from "./prettyPrint.js";

// Utility: random array generator
function randomArray(size, max = 100) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * max));
}

// STEP 1: Create tree from random numbers < 100

const tree = new Tree([
  5, 81, 44, 28, 33, 11, 83, 24, 31, 19, 10, 71, 34, 19, 51,
]);
prettyPrint(tree.root);
