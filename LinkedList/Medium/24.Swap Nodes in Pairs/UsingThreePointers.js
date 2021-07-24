//O(n)
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let prev = null;
  let current = head;
  let temp = head.next;

  while (current) {
    current.next = temp ? temp.next : null;
    if (temp) {
      temp.next = current;
    }

    if (!prev) {
      head = temp;
    } else {
      prev.next = temp ? temp : current;
    }
    prev = current;
    current = current.next;
    temp = current ? current.next : null;
  }

  return head;
};
