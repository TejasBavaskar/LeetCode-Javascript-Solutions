//O(n)
var postorder = function(root) {
  if(!root) {
      return [];
  }
  
  let result = [];
  
  var traverse = function(root) {
      if(!root) {
          return;
      }
      
      for(let i=0; i<root.children.length; i++) {
          traverse(root.children[i]);
      }
      
      result.push(root.val);
  }
  
  traverse(root);
  
  return result;
};