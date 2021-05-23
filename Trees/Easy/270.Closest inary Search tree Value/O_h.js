//O(h) => height of tree
var closestValue = function(root, target) {
  let min = Number.POSITIVE_INFINITY;
  let answer = -1;
  let count  = 0;
  var binarySearch = function(root) {
      if(!root) {
          return;
      }
      count++;
      
      if(Math.abs(root.val - target) < min) {
          min = Math.abs(root.val - target);
          answer = root.val;
      }
      
      if(target < root.val) {
          binarySearch(root.left);
      } else {
          binarySearch(root.right);
      }
      return;
  }
  
  binarySearch(root);
  console.log(count)
  return answer;
};