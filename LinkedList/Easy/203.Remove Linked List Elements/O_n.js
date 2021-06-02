//O(n) => iterative
var removeElements = function(head, val) {
  let temp = head;
  let prev = null;   
  
  while(temp) {
      if(temp === head && head.val === val) {
          head = head.next;
          temp = head;
      } else {
          if(temp.val === val) {
              prev.next = temp.next;  
          } else {
              prev = temp;
          }
          temp = temp.next;
      }
  }
  
  return head;
};

//-------------- OR --------------
//O(n) => Recursive
var removeElements = function(head, val) {
  if(!head) {
      return head;
  }
  
  head.next = removeElements(head.next, val);
  
  return head.val === val ? head.next : head;
};