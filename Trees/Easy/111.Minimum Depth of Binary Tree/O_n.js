//O(n) => Using BFS
var minDepth = function(root) {
  if(!root) {
      return 0;
  }
  
  let queue = [];
  queue.push([root, 1]);
  let currentLevel = 0;
  
  while(queue.length) {
      let temp = queue.shift();
      
      let currentNode = temp[0];
      currentLevel = temp[1];

      
      if(!currentNode.left && !currentNode.right) {
          console.log(currentNode.val)
          return currentLevel;
      }
      
      currentNode.left && queue.push([currentNode.left, currentLevel+1]);
      currentNode.right && queue.push([currentNode.right, currentLevel+1]);
  }
  
  return currentLevel;
};
//--------------- OR ----------------
//O(n) => using DFS
var minDepth = function(root) {
  if(!root) {
      return 0;
  }
  
  let queue = [];
  queue.push([root, 1]);
  let currentLevel = 0;
  let minLevel = Number.MAX_VALUE;
  
  while(queue.length) {
      let temp = queue.shift();
      
      let currentNode = temp[0];
      currentLevel = temp[1];

      if(!currentNode.left && !currentNode.right) {
          minLevel = Math.min(minLevel, currentLevel);
      }
      
      currentNode.right && queue.unshift([currentNode.right, currentLevel+1]);
      currentNode.left && queue.unshift([currentNode.left, currentLevel+1]);
      
  }
  
  return minLevel;
};