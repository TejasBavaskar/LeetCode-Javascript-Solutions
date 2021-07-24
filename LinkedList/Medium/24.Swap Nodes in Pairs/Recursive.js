//O(n)
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }

  var traverse = function (node1, node2) {
    if (!node1 || !node2) {
      return node1;
    }

    let n1 = node2.next;
    let n2 = n1 ? n1.next : null;
    node1.next = traverse(n1, n2);
    node2.next = node1;

    return node2;
  };

  return traverse(head, head.next);
};
