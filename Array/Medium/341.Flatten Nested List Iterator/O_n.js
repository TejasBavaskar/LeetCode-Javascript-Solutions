//O(n) => n =  no. of integers + no. of lists
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
  this.arr = flatten(nestedList);
};

var flatten = function (nestedList) {
  let res = [];
  while (nestedList.length) {
    let list = nestedList.shift();
    if (list.isInteger()) {
      res.push(list.getInteger());
    } else {
      res = res.concat(flatten(list.getList()));
    }
  }

  return res;
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  return this.arr.length;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
  return this.arr.shift();
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList)a = [];
 * while (i.hasNext()) a.push(i.next()); return a;
 */
