//Using Array Only
/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.stack = [];
  this.index = -1;
  this.max = -1;
  this.visit(homepage);
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.index++;
  this.stack[this.index] = url;
  this.max = this.index;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  for (let i = 0; i < steps; i++) {
    if (this.index > 0) {
      this.index--;
    }
  }

  return this.stack[this.index];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  for (let i = 0; i < steps; i++) {
    if (this.index + 1 > this.max) {
      break;
    }
    this.index++;
  }

  return this.stack[this.index];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
