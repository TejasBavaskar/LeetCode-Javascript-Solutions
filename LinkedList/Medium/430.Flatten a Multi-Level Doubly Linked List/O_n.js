//O(n)
var flatten = function (head) {
  let arr = [];

  var traverse = function (node) {
    if (!node) {
      return;
    }

    arr.push(node);

    if (node.child) {
      traverse(node.child);
    }

    traverse(node.next);
  };

  traverse(head);

  let newHead = arr[0];
  let index = 0;

  while (index < arr.length - 1) {
    arr[index].child = null;
    arr[index].next = arr[index + 1];
    arr[index + 1].prev = arr[index];
    index++;
  }

  if (arr[index]) {
    arr[index].next = null;
    arr[index].child = null;
  }

  return newHead;
};
