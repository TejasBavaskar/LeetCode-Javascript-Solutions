//O(n)
var oddEvenList = function (head) {
  if (!head) {
    return head;
  }

  let temp1 = head;
  let newHead = null;
  let temp2 = newHead;
  while (temp1) {     //O(n/2)
    let node = new ListNode(temp1.val);
    if (!newHead) {
      newHead = node;
      temp2 = newHead;
    } else {
      temp2.next = node;
      temp2 = temp2.next;
    }

    temp1 = temp1.next ? temp1.next.next : null;
  }

  temp1 = head.next ? head.next : null;
  while (temp1) {     //O(n/2)
    let node = new ListNode(temp1.val);
    temp2.next = node;
    temp2 = temp2.next;

    temp1 = temp1.next ? temp1.next.next : null;
  }

  return newHead;
};
