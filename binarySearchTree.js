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

  remove(value) {
    return this._removeRec(this.root, value);
  }

  _removeRec(root, value) {
    if (root === null) return root;

    if (value > root.data) {
      root.right = this._removeRec(root.right, value);
    } else if (value < root.data) {
      root.left = this._removeRec(root.left, value);
    } else {
      if (root.left === null) {
        return root.right;
      }
      if (root.right === null) {
        return root.left;
      } else {
        let curr = root.right;

        while (curr.left !== null) {
          curr = curr.left;
        }

        root.data = curr.data;
        root.right = this._removeRec(root.right, root.data);
      }
    }

    return root;
  }

  find(value) {
    return this._findRec(this.root, value);
  }

  _findRec(node, value) {
    if (node === null) return null;

    if (value > node.data) {
      node = this._findRec(node.right, value);
      return node;
    }

    if (value < node.data) {
      node = this._findRec(node.left, value);
      return node;
    }

    return node;
  }

  levelOrderForEach(callback) {
    if (typeof callback !== "function") {
      throw new Error("A callback function must be provided");
    }

    if (!this.root) return;

    const res = [];

    this._levelOrderForEachRecur(this.root, 0, res);

    for (const level of res) {
      for (const node of level) {
        callback(node);
      }
    }
  }

  _levelOrderForEachRecur(root, level, res) {
    if (root === null) return;

    if (res.length <= level) res.push([]);

    res[level].push(root);

    this._levelOrderForEachRecur(root.left, level + 1, res);
    this._levelOrderForEachRecur(root.right, level + 1, res);
  }

  preOrderForEach(callback) {
    if (typeof callback !== "function") {
      throw new TypeError("preorderForEach requires a callback function");
    }

    const preOrder = (node) => {
      if (!node) return;

      callback(node);
      preOrder(node.left);
      preOrder(node.right);
    };

    preOrder(this.root);
  }

  inOrderForEach(callback) {
    if (typeof callback !== "function") {
      throw new TypeError("preorderForEach requires a callback function");
    }

    const inOrder = (node) => {
      if (!node) return;

      inOrder(node.left);
      callback(node);
      inOrder(node.right);
    };

    inOrder(this.root);
  }

  postOrderForEach(callback) {
    if (typeof callback !== "function") {
      throw new TypeError("preorderForEach requires a callback function");
    }

    const postOrder = (node) => {
      if (!node) return;

      postOrder(node.left);
      postOrder(node.right);
      callback(node);
    };

    postOrder(this.root);
  }

  height(value) {
    const findNode = (node, value) => {
      if (!node) return null;

      if (value > node.data) return findNode(node.right, value);
      if (value < node.data) return findNode(node.left, value);

      return node;
    };

    const findHeight = (node) => {
      if (node === null) return -1;

      return Math.max(findHeight(node.left), findHeight(node.right)) + 1;
    };

    const startNode = findNode(this.root, value);

    if (!startNode) return null;

    return findHeight(startNode);
  }
}
