import { Tree } from "./binarySearchTree.js";
import { prettyPrint } from "./prettyPrint.js";

// STEP 1: Create tree from random numbers < 100

const tree = new Tree([
  42, 15, 89, 7, 63, 18, 27, 90, 54, 31, 73, 8, 44, 12, 66,
]);
console.log(tree.find(89));
console.log(tree.find(15));

tree.remove(90);
console.log(tree.find(90));
prettyPrint(tree.root);

// tree.levelOrderForEach((node) => {
//   console.log(node.data);
// });

tree.preOrderForEach((node) => {
  console.log(node.data);
});
// console.log(tree.levelOrderForEach());
