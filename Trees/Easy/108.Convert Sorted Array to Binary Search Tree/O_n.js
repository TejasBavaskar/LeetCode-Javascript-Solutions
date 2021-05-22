//O(n)
var sortedArrayToBST = function(nums) {
  let start = 0;
  let end = nums.length - 1;
  
  var createTree = function(start, end) {
      let middle = Math.floor((start+end) / 2);
      let root  = new TreeNode(nums[middle], null, null);
      if(start <= middle - 1) {
          root.left = createTree(start, middle - 1);
      }
      if( middle+1 <= end) {
          root.right = createTree(middle+1, end);
      }

      return root;
  }
  
  return createTree(start, end);
};