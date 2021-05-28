//O(n) => using BFS
var averageOfLevels = function(root) {
  let queue = [];
  queue.push([root, 0]);
  let lastLevel = 0;
  let avgArr = [];
  let sum = 0;
  let count = 0;
  
  while(queue.length) {
      let temp = queue.shift();
      let currentNode = temp[0];
      let currentLevel = temp[1];
      
      if(lastLevel === currentLevel) {
          sum += currentNode.val;
          count++;
      } else {
          lastLevel++;
          avgArr.push(sum/count);
          sum = currentNode.val;
          count = 1;
      }
      
      currentNode.left && queue.push([currentNode.left, currentLevel+1]);
      currentNode.right && queue.push([currentNode.right, currentLevel+1]);
  }
  
  avgArr.push(sum/count);
  return avgArr;
};

//---------------- OR ---------------
//Simple approach with BFS
var averageOfLevels = function(root) {
  let queue = [];
  queue.push(root);
  let avgArr = [];
  
  while(queue.length) {
      let size = queue.length;
      let sum = 0;
      
      for(let i=0; i<size; i++) {
          let current = queue.shift();
          sum += current.val;
          
          current.left && queue.push(current.left);
          current.right && queue.push(current.right);
      }
      
      avgArr.push(sum/size);
  }
  
  return avgArr;
};