//O(n)
var preorder = function(root) {
  let result = [];
  
  var find = function(root) {
      if(!root) {
          return;
      }
      
      result.push(root.val);
      
      for(let i=0; i<root.children.length; i++) {
          find(root.children[i]);
      }        
  }
  find(root);

  return result;
};