//O(n)
var sumRootToLeaf = function(root) {
  let sum = 0;

  var findSum = function(root, binary) {
      if(!root) {
          return;
      }
      
      binary.push(root.val);
      
      if(!root.left && !root.right) {
          let x = parseInt(binary.join(''), 2);
          sum += x;
      } else {
          findSum(root.left, Array.from(binary));
          findSum(root.right, Array.from(binary));

      }
  }
  
  findSum(root, []);
  return sum;
};