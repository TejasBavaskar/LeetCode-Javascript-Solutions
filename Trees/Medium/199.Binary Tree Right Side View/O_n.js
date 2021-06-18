//O(n) => Using BFS
var rightSideView = function(root) {
  if(!root) {
      return [];
  }
  
  let queue = [];
  queue.push(root);
  
  let result = [];
  
  while(queue.length) {
      let currentLevelSize = queue.length;
      
      for(let i=0; i<currentLevelSize; i++) {
          let temp = queue.shift();
          if(i === currentLevelSize-1) {
              result.push(temp.val);
          }
          
          temp.left && queue.push(temp.left);
          temp.right && queue.push(temp.right);
      }
  }
  
  return result;
};