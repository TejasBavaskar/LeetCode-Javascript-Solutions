//O(n)
var deleteDuplicates = function (head) {
  if (!head) {
    return head;
  }

  let dummy = new ListNode();
  dummy.next = head;

  let prev = dummy;
  let current = head;
  let temp = current.next;

  while (current && temp) {
    if (current.val === temp.val) {
      while (temp && current.val === temp.val) {
        temp = temp.next;
      }
      current = temp;
      prev.next = current;
      temp = current ? current.next : null;
    } else {
      prev = current;
      current = temp;
      temp = temp.next;
    }
  }

  return dummy.next;
};
