//O(n)
//space complexity = O(n)
var copyRandomList = function (head) {
  if (!head) {
    return head;
  }

  let newHead = null;
  let map1 = new Map();
  let map2 = new Map();
  let count1 = 0;
  let count2 = 0;
  let newListPointer = null;

  var addNode = function (node) {
    let newNode = new Node(node.val, null, null);
    if (!newHead) {
      newHead = newNode;
      newListPointer = newHead;
      map2.set(count2, newHead);
      count2++;
      return;
    }

    newListPointer.next = newNode;
    newListPointer = newListPointer.next;

    map2.set(count2, newListPointer);
    count2++;
  };

  let temp = head;
  while (temp) {  //n
    addNode(temp);
    map1.set(temp, count1);
    temp = temp.next;
    count1++;
  }

  let temp1 = head;
  let temp2 = newHead;
  while (temp1 && temp2) {  //n
    if (!temp1.random) {
      temp2.random = null;
    } else {
      let index = map1.get(temp1.random);
      temp2.random = map2.get(index);
    }

    temp1 = temp1.next;
    temp2 = temp2.next;
  }

  return newHead;
};
