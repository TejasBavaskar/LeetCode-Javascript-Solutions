//O(n)
var rotateRight = function(head, k) {
  if(!head) {
      return head;
  }
  
  let temp = head;
  let count = 1;
  
  while(temp.next) {
      count++;
      temp = temp.next;
  }
  
  k = k % count;
  if(k === 0) {
      return head;
  }
  
  let lastNode = temp;
  let prev = null;
  temp = head;
  let index = 0;
  while(index !== count-k) {
      index++;
      prev = temp;
      temp = temp.next;
  }
  
  prev.next = null;
  lastNode.next = head;
  head = temp;
  
  return head;
};

//---------------- OR ----------------
//O(n)  => Using Map
//Space Complexity: O(n)
var rotateRight = function (head, k) {
  if (!head) {
    return head;
  }

  let map = new Map();
  let temp = head;
  let prev = null;
  let index = 0;

  while (temp) {
    map.set(index, [temp, prev]);
    index++;
    prev = temp;
    temp = temp.next;
  }

  k = k % map.size;
  if (k === 0) {
    return head;
  }

  let [lastNode, lastPrev] = map.get(map.size - 1);
  lastNode.next = head;

  [lastNode, lastPrev] = map.get(map.size - k);
  lastPrev.next = null;
  head = lastNode;
  return head;
};
