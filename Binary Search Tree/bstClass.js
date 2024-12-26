class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.node = null;
  }

  isEmpty() {
    return this.node === null;
  }
}

let bst = new BinarySearchTree();
console.log(bst.isEmpty());
