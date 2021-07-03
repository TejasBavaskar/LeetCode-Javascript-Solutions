/**
 * This is the interface for the expression tree Node.
 * You should not remove it, and you can define some classes to implement it.
 */

var Node = function () {
  if (this.constructor === Node) {
    throw new Error("Cannot instanciate abstract class");
  }
};

Node.prototype.evaluate = function () {
  throw new Error("Cannot call abstract method");
};

/**
 * This is the TreeBuilder class.
 * You can treat it as the driver code that takes the postinfix input
 * and returns the expression tree represnting it as a Node.
 */

class TreeNode extends Node {
  constructor(val, left, right) {
    super();
    this.val = val ?? null;
    this.left = left ?? null;
    this.right = right ?? null;
  }

  evaluate() {
    if (!isNaN(this.val)) return this.val;

    let left = this.left.evaluate();
    let right = this.right.evaluate();

    return eval(`${left}${this.val}${right}`);
  }
}

class TreeBuilder {
  /**
   * @param {string[]} s
   * @return {Node}
   */
  buildTree(postfix) {
    let stack = [];
    postfix.forEach((item) => {
      if (isNaN(item)) {
        let num2 = stack.pop();
        let num1 = stack.pop();
        stack.push(new TreeNode(item, num1, num2));
      } else {
        let num2 = stack.push(new TreeNode(item));
      }
    });

    let tree = stack.pop();
    return tree;
  }
}

/**
 * Your TreeBuilder object will be instantiated and called as such:
 * var obj = new TreeBuilder();
 * var expTree = obj.buildTree(postfix);
 * var ans = expTree.evaluate();
 */
