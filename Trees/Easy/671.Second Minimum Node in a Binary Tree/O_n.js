//O(n) => in worst case all the nodes of tree will be same except the last right leaf node
var findSecondMinimumValue = function(root) {
  let result = {};
  
  var findMin = function(root) {
      result[root.val] = 1;

      if(root.left) {
          findMin(root.left);
      }
      
      if(root.right) {
          findMin(root.right);
      }
  }
  
  findMin(root);

  return Object.keys(result)[1] ? Object.keys(result)[1] : -1;
};