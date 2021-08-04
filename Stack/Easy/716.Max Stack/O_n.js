//O(n)
/**
 * initialize your data structure here.
 */
var MaxStack = function () {
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function (x) {
  this.stack.push(x);
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function () {
  return this.stack.pop();
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function () {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < this.stack.length; i++) {
    max = Math.max(max, this.stack[i]);
  }

  return max;
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function () {
  let max = Number.MIN_SAFE_INTEGER;
  let index = -1;

  for (let i = this.stack.length - 1; i >= 0; i--) {
    if (this.stack[i] > max) {
      max = this.stack[i];
      index = i;
    }
  }

  this.stack.splice(index, 1);
  return max;
};

/**
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */
