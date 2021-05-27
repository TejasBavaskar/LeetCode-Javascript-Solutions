//O(n)
var findMode = function(root) {
  let dict = {};
  let max = 1;
  
  var preOrder = function(root) {
      if(!root) {
        return;
      }

      if(root.val in dict) {
          dict[root.val]++;
          max = Math.max(max, dict[root.val]);
      } else {
          dict[root.val] = 1;
      }
      
      preOrder(root.left);
      preOrder(root.right);
  }
  
  preOrder(root);
  
  let result = [];
  for(const [key, value] of Object.entries(dict)) {
      if(value === max) {
          result.push(key);
      }
  }
  
  return result;
};