//O(n)
var deleteNode = function (node) {
  while (node) {
    node.val = node.next.val;
    if (!node.next.next) {
      node.next = null;
      return;
    }
    node = node.next;
  }
};
