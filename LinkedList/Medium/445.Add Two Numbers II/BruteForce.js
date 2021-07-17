//O(m + n)
var addTwoNumbers = function (l1, l2) {
  var reverseList = function (head) {
    let prev = null;
    while (head) {
      let temp = head.next;
      head.next = prev;
      prev = head;
      head = temp;
    }
    return prev;
  };

  l1 = reverseList(l1); //m
  l2 = reverseList(l2); //n

  let newHead = null;
  let carry = 0;

  while (l1 || l2) {
    let num1 = l1 ? l1.val : 0;
    let num2 = l2 ? l2.val : 0;

    let sum = num1 + num2 + carry;
    carry = 0;
    if (sum >= 10) {
      carry = Math.floor(sum / 10);
      sum = sum % 10;
    }

    let node = new ListNode(sum);
    node.next = newHead;
    newHead = node;

    if (l1) {
      l1 = l1.next ? l1.next : null;
    }
    if (l2) {
      l2 = l2.next ? l2.next : null;
    }
  }

  if (carry) {
    let temp = new ListNode(carry);
    temp.next = newHead;
    newHead = temp;
  }

  return newHead;
};
