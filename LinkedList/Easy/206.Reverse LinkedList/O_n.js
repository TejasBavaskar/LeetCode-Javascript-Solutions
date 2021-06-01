//O(n) => Iterative
var reverseList = function(head) {
  if(!head) {
      return null;
  }
  
  let current = head;
  let temp = null;
  let prev = null;
  
  while(current) {
      temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
  }
  
  head = prev;
  
  return head;
};

//O(n) => Recursive
var reverseList = function(head) {
  if(!head || !head.next) {
      return head;
  }
  
  let newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};