var flatten = function (head) {
  if (!head) {
    return head;
  }

  let temp = head;

  while (temp) {
    if (temp.child) {
      let childNode = temp.child;
      while (childNode.next) {
        childNode = childNode.next;
      }

      childNode.next = temp.next;
      if (childNode.next) {
        childNode.next.prev = childNode;
      }

      temp.next = temp.child;
      temp.next.prev = temp;
      temp.child = null;
    }
    temp = temp.next;
  }

  return head;
};
