//O(n)
//Space Complexity: O(n)
var deleteDuplicates = function (head) {
  if (!head) {
    return head;
  }

  let map = new Map();
  let temp = head;

  while (temp) {
    if (!map.has(temp.val)) {
      map.set(temp.val, 1);
    } else {
      map.set(temp.val, map.get(temp.val) + 1);
    }
    temp = temp.next;
  }

  let dummy = new ListNode();
  dummy.next = head;
  let current = dummy.next;
  let prev = dummy;

  while (current) {
    if (map.get(current.val) > 1) {
      prev.next = current.next;
    } else {
      prev = current;
    }
    current = current.next;
  }

  return dummy.next;
};
