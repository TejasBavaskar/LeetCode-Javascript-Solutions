//O(n)
var insert = function (head, insertVal) {
  if (!head) {
    head = new Node(insertVal);
    head.next = head;
    return head;
  }

  let toInsert = false;
  let prev = head;
  let current = head.next;

  do {
    if (prev.val <= insertVal && insertVal <= current.val) {
      toInsert = true;
    } else if (current.val < prev.val) {
      if (insertVal >= prev.val || insertVal <= current.val) {
        toInsert = true;
      }
    }

    if (toInsert) {
      prev.next = new Node(insertVal, current);
      return head;
    }

    prev = current;
    console.log(prev);
    current = current.next;
  } while (prev !== head);

  prev.next = new Node(insertVal, current);
  return head;
};
