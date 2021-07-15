//O(max(n,m))
var addTwoNumbers = function (l1, l2) {
  let p1 = l1; //n
  let p2 = l2; //m
  let carry = 0;
  let head = null;

  var addNode = function (data) {
    let newNode = new ListNode(data);
    if (head === null) {
      head = newNode;
      return;
    }

    let temp = head;
    while (temp.next) {
      temp = temp.next;
    }

    temp.next = newNode;
  };

  while (p1 || p2) {
    let num1 = p1 ? p1.val : 0;
    let num2 = p2 ? p2.val : 0;
    let sum = num1 + num2 + carry;

    carry = 0;
    if (sum >= 10) {
      carry = Math.floor(sum / 10);
      sum = sum % 10;
    }

    addNode(sum);

    if (p1) {
      p1 = p1.next ? p1.next : null;
    }
    if (p2) {
      p2 = p2.next ? p2.next : null;
    }
  }

  if (carry) {
    addNode(carry);
  }

  return head;
};
