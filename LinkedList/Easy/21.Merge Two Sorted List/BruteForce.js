//O(m+n) => m= length of first list and n = length of second list
//Iterative
var mergeTwoLists = function(l1, l2) {
  let head = null;
  let node1 = l1;
  let node2 = l2;
  
  var addNode = function(node) {
      if(!head) {
          head = new ListNode(node.val, null);
          temp = head;
          return;
      }
      
      temp.next = new ListNode(node.val, null);
      temp = temp.next;
  }
  
  while(node1 || node2) {
      if(!node1 && node2) {
          addNode(node2);
          node2 = node2.next;
      } else if(node1 && !node2) {
          addNode(node1);
          node1 = node1.next;
      } else {
          if(node1.val <= node2.val) {
              addNode(node1);
              node1 = node1.next;
          } else if(node2.val <= node1.val) {
              addNode(node2);
              node2 = node2.next;
          }
      }
  }
  
  return head;
};

//------------- OR -------------
//O(m+n) => Recursive
var mergeTwoLists = function(l1, l2) {
  var mergeUtil = function(node1, node2) {
      if(!node1) {
          return node2;
      }
      
      if(!node2) {
          return node1;
      }
      
      if(node1.val <= node2.val) {
          node1.next = mergeUtil(node1.next, node2);
          return node1;
      } else {
          node2.next = mergeUtil(node1, node2.next);
          return node2;
      }
      
  }
  
 return mergeUtil(l1, l2);
};