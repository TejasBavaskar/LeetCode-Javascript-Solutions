//O(n+m)  => Using BFS
//n = total amount of nodes in the binary tree
//m = total edges
var distanceK = function(root, target, k) {
  let dict = {};
  
  var createGraph = function(root, parent) {
      if(!root) {
          return;
      }
      
      dict[root.val] = [];
      
      if(root.left) {
          dict[root.val].push(root.left.val);
          createGraph(root.left, root.val);
      }
      
      if(root.right) {
          dict[root.val].push(root.right.val);
          createGraph(root.right, root.val);
      }
      
      if(parent !== null) {
          dict[root.val].push(parent);
      }
  }
  
  createGraph(root, null);
  
  let queue = [];
  queue.push([target.val, 0]);
  
  let visited = [];
  let result =[];
  
  while(queue.length) {
      let [temp, currentLevel] = queue.shift();
      
      if(visited[temp]) {
          continue;
      }
      visited[temp] = 1;
      
      if(currentLevel > k) {
          break;
      }
      
      if(currentLevel === k) {
          result.push(temp);
      }
      
      dict[temp].forEach(item => {
          queue.push([item, currentLevel+1]);
      })
  }

  return result;
};