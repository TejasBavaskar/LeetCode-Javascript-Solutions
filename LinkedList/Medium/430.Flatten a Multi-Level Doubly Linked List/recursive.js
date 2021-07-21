//O(n)
var flatten = function (head) {
  if (!head) {
    return head;
  }

  let newHead = null;

  var buildList = function (node, prevNode) {
    if (!node) {
      return;
    }

    let newNode = new Node(node.val);
    let temp = newNode;

    if (node.child) {
      newNode.next = buildList(node.child, newNode);

      while (temp.next) {
        temp = temp.next;
      }
    }

    if (node.next) {
      temp.next = buildList(node.next, temp);
    }

    newNode.prev = prevNode;
    return newNode;
  };

  newHead = buildList(head, null);
  return newHead;
};
