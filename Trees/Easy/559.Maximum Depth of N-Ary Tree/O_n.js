//O(n)
var maxDepth = function(root) {
  var findDepth = function(root) {
      if(!root) {
          return 0;
      }
      
      let temp = [];
      for(let i=0; i< root.children.length; i++) {
          temp.push(findDepth(root.children[i]));
      }

      return temp.length ? 1 + Math.max(...temp) : 1;
  }
  
  return findDepth(root);
};