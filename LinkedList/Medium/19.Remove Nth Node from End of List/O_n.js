//O(n)
var removeNthFromEnd = function (head, n) {
  let count = 0;
  let temp = head;

  while (temp) {
    count++;
    temp = temp.next;
  }

  let diff = count - n;
  let dummy = new ListNode();
  dummy.next = head;
  temp = dummy;

  while (diff > 0) {
    diff--;
    temp = temp.next;
  }

  temp.next = temp.next.next;
  return dummy.next;
};
