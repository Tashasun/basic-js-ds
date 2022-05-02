const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.r = null;
  }

  root() {
    return this.r;
  }

  add(data) {
    if(typeof(data)!=='number') return null;
    let node = new Node(data);
    if (this.r == null) {
      this.r = node;
    } else {
      this.addNode(this.r, node);
    }
  }
  addNode(root, node) {
    if (root.value > node.value) {
      if (root.left == null) {
        root.left = node;
      } else {
        this.addNode(root.left, node);
      }
    } else {
      if (root.right == null) {
        root.right = node;
      } else {
        this.addNode(root.right, node);
      }
    }
  }
  has(data ) {
    return this.find(data)!==null;
  }

  find(data) {

    if(typeof(data)!=='number') return null;
    let nd = new Node(data);
    const findFn = function(root, node){
      if (!root) {
        return null;
      } else if (root.value == node.value) {
        return node;
      } else if (root.value > node.value) {
        return findFn(root.left, node);
      } else {
        return findFn(root.right, node);
      }
    };
    return findFn(this.r, nd);

  }

  remove(data) {
    this.r = this.removeNode(data, this.r);
  }

  removeNode(data, nodeForRemoving) {
    
    if (nodeForRemoving == null) {
      return null;
    } else if (nodeForRemoving.value > data) {
      nodeForRemoving.left = this.removeNode(data, nodeForRemoving.left);
      return nodeForRemoving;
    } else if (nodeForRemoving.value < data) {
      nodeForRemoving.right = this.removeNode(data, nodeForRemoving.right);
      return nodeForRemoving;
    } else {
      if ((nodeForRemoving.left == null) & (nodeForRemoving.right == null)) {
        return null;
      }
      if ((nodeForRemoving.left == null) & (nodeForRemoving.right !== null)) {
        return nodeForRemoving.right;
      }
      if ((nodeForRemoving.left !== null) & (nodeForRemoving.right == null)) {
        return nodeForRemoving.left;
      }
      let minNode = this.minNode(nodeForRemoving.right);
      nodeForRemoving.value = minNode.value;
      this.removeNode(nodeForRemoving.value,nodeForRemoving.right);
      return nodeForRemoving;
    }
  }

  min() {
    if (this.r == null) return null;
    return this.minNode(this.r).value;
  }
  minNode(node) {
    if (node.left == null) {
      return node;
    } else {
      return this.minNode(node.left);
    }
  }

  max() {
    if (this.r == null) return null;
    return this.maxNode(this.r).value;
  }
  maxNode(node) {
    if (node.right == null) {
      return node;
    } else {
      return this.maxNode(node.right);
    }
  }
  print(node = this.r) {
    if (!node) return;
    // console.log( node.value,"<<");
    this.print(node.left);
    console.log("*****", node.value);
    // console.log(node.value,">>", );
    this.print(node.right);
  }

}
  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
    get data(){ return this.value; };
  }

  let bst = new BinarySearchTree()
  // console.log(bst)
  // bst.add(3)
  // bst.add(5)
  // bst.add(1)
  // bst.add(9)
  // bst.print()
  // console.log(bst.has(5))
  // console.log(bst.remove(5))
  // console.log(bst.has(5))

  // console.log(bst.has(0))
  // console.log(bst.remove(0))
  // console.log(bst.has(0))
  // bst.print()

  
  // const values = Array(20).fill(1).map(x=>Math.floor(Math.random()*100));
  // const tree = new BinarySearchTree();
  // values.forEach(value => tree.add(value));
  // values.sort((a, b) => a % 2 - b % 2 || a - b);
  // const valuesToRemove = values.splice(0, 10);
  
  // console.log(values);
  // console.log(valuesToRemove);
  // valuesToRemove.forEach(value => tree.remove(value));
  // tree.print();
  // assert.strictEqual(valuesToRemove.every(value => tree.has(value) === false), true);
  // assert.strictEqual(values.every(value => tree.has(value) === true), true);

module.exports = {
  BinarySearchTree
};