class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

export class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    const sortedArray = [...new Set(array)].sort((a, b) => a - b);

    console.log(sortedArray);
    return this.buildTreeRec(sortedArray, 0, sortedArray.length - 1);
  }

  buildTreeRec(arr, start, end) {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const node = new Node(arr[mid]);

    node.left = this.buildTreeRec(arr, start, mid - 1);
    node.right = this.buildTreeRec(arr, mid + 1, end);

    return node;
  }
}
