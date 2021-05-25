//O(n)
var sumOfLeftLeaves = function(root) {
  let sum = 0;
  var findSum = function(root, dir) {
      if(!root.left && !root.right && dir === 'left') {
          sum += root.val;
          return;
      }
      
      if(root.left) {
          findSum(root.left, 'left');
      }
      
      if(root.right) {
          findSum(root.right, 'right');
      }
      
  }
  
  findSum(root, null);
  return sum;
};