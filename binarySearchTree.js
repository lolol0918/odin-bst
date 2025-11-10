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

  insert(value) {
    const node = this.root;

    if (node === null) {
      this.root = new Node(value);
      return;
    } else {
      return this._insertRec(node, value);
    }
  }

  _insertRec(node, value) {
    if (node === null) return new Node(value);

    if (value > node.data) {
      node.right = this._insertRec(node.right, value);
    }

    if (value < node.data) {
      node.left = this._insertRec(node.left, value);
    }

    return node;
  }
}
