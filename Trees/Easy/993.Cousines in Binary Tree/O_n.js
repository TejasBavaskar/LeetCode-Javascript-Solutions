//O(n)
var isCousins = function(root, x, y) {
  let queue = [];
  queue.push([root, [null, 0]]);
  
  let xParent = null;
  let xLevel = 0;
  
  let yParent = null;
  let yLevel = 0;
  
  while(queue.length) {
      let item = queue.shift();
      
      let tempNode = item[0];
      let parent = item[1][0];
      let level = item[1][1];
      
      if(tempNode.val === x) {
          xParent = parent;
          xLevel = level;
      } else if(tempNode.val === y) {
          yParent = parent;
          yLevel = level;
      }
      
      if(tempNode.left) {
          queue.push([tempNode.left, [tempNode, level+1]]);
      }
      
      if(tempNode.right) {
          queue.push([tempNode.right, [tempNode, level+1]]);
      }
  }
  
  if(xParent !== yParent && xLevel === yLevel) {
      return true;
  }
  
  return false;
};

//------------------- OR ------------------
var isCousins = function(root, x, y) {
  if(root.val === x || root.val === y) {
      return false;
  }

  let queue = [];
  queue.push(root);

  while(queue.length) {
      let foundX = false;
      let foundY = false;
      let size = queue.length;
      
      for(let i=0; i<size; i++) {
          let temp = queue.shift();
          if(temp.left && temp.right) {
              if((temp.left.val === x && temp.right.val === y) || (temp.left.val === y && temp.right.val === x))                 {
                  return false;
              } 
          }
          
          if(temp.val === x) {
              foundX = true;
          } else if(temp.val === y) {
              foundY = true;
          }
          
          if(temp.left) {
              queue.push(temp.left);
          }
          if(temp.right) {
              queue.push(temp.right);
          }
          
      }
      
      if(foundX && foundY) {
          return true;
      }
  }
  return false;
};