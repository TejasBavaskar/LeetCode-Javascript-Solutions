//O(n)
var partition = function (head, x) {
  if (!head || !head.next) {
    return head;
  }

  let temp1 = null;
  let temp2 = null;
  let current = head;
  let h1 = null;
  let h2 = null;

  while (current) {
    if (current.val < x) {
      if (temp1) temp1.next = current;
      temp1 = current;
      current = current.next;
      temp1.next = null;
    } else {
      if (temp2) temp2.next = current;
      temp2 = current;
      current = current.next;
      temp2.next = null;
    }

    if (!h1) {
      h1 = temp1;
    }
    if (!h2) {
      h2 = temp2;
    }
  }

  if (!temp1) {
    return h2;
  }

  temp1.next = h2;
  return h1;
};
