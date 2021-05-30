//O(n)
var findTarget = function(root, k) {
  let dict = {};
  
  let queue = [];
  queue.push(root);
  
  while(queue.length) {
      let size = queue.length;
      
      for(let i=0; i<size; i++) {
          let temp = queue.shift();
          if(temp.val in dict) {
              return true;
          } else {
              dict[k - temp.val] = 1;
          }
          
          temp.left && queue.push(temp.left);
          temp.right && queue.push(temp.right);
      }
  }
  
  return false;
};