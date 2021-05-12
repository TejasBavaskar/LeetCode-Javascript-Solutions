//O(n)
var tree2str = function(root) {
  if(root === null) {
      return '';
  }
  
  let currentData = root.val;
  let leftData = tree2str(root.left);
  let rightData = tree2str(root.right);
  
  let returnStr = `${currentData}`;
  
  if(leftData !== '' || rightData) {
      returnStr += `(${leftData})`;
  }
  
  if(rightData !== '') {
      returnStr += `(${rightData})` 
  }
  
  return returnStr;
};