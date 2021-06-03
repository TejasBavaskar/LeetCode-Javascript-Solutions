//O(n)
var deleteDuplicates = function(head) {
  let temp = head;
  let prev = null;
  let mySet = new Set();
  
  while(temp) {
      if(mySet.has(temp.val)) {
          prev.next = temp.next;
      } else {
          mySet.add(temp.val);
          prev = temp;
      }
      temp = temp.next;
  }
  
  return head;
};