//O(1) => Using HashMap and Doubly Linked List
//Space Complexity => O(capacity) => HashMap and Doubly Linked List both will take space = (capacity + 1)
var DLinkedNode = function (key, value, prev, next) {
  this.key = key === undefined ? 0 : key;
  this.value = value === undefined ? 0 : value;
  this.prev = prev === undefined ? null : prev;
  this.next = next === undefined ? null : next;
};

var LRUCache = function (capacity) {
  this.size = 0;
  this.capacity = capacity;
  this.head = new DLinkedNode();
  this.tail = new DLinkedNode();

  this.head.next = this.tail;
  this.tail.prev = this.head;

  this.map = new Map();
};

LRUCache.prototype.addNode = function (node) {
  node.prev = this.head;
  node.next = this.head.next;
  this.head.next.prev = node;
  this.head.next = node;
};

LRUCache.prototype.removeNode = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};

LRUCache.prototype.moveToHead = function (node) {
  this.removeNode(node);
  this.addNode(node);
};
/**
 * @param {number} capacity
 */

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    let tempNode = this.map.get(key);
    this.moveToHead(tempNode);
    return tempNode.value;
  }

  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    let temp = this.map.get(key);
    temp.value = value;
    this.moveToHead(temp);
  } else {
    let newNode = new DLinkedNode(key, value);
    this.map.set(key, newNode);

    this.addNode(newNode);
    this.size++;
    if (this.size > this.capacity) {
      let tempKey = this.tail.prev.key;
      this.removeNode(this.tail.prev);
      this.map.delete(tempKey);
      this.size--;
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
