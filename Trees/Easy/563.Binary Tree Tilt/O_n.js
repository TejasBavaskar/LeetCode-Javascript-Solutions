//O(n) => Bottom up approach => first calling the function then performing operation
var findTilt = function(root) {
  let result = [];
  
  var tiltUtil = function(root) {
      if(!root) {
          return 0;
      }
      
      let leftVal = tiltUtil(root.left);
      let rightVal = tiltUtil(root.right);
      result.push(Math.abs(leftVal - rightVal));
      
      return root.val + leftVal + rightVal;
  }
  
  tiltUtil(root);
  
  let ans = result.reduce((sum, item) => {
      return sum += item;
  }, 0);

  return ans;
};