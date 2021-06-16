//O(n*h) => for each node it wil check in array of size = h (height) till that level
var goodNodes = function(root) {
  let count = 0;
  
  var largeNumpPresent = function(arr, val) {
      return arr.some(item => {
          return item > val;
      })
  }
  
  var findNodes = function(root, arr) { //n
      if(!root) {
          return;
      }
      
      if(!largeNumpPresent(arr, root.val)) {    //h
          count++;
      }
      
      arr.push(root.val);
      let left = findNodes(root.left, [...arr]);
      let right = findNodes(root.right, [...arr]);
  }
  
  findNodes(root, []);
  
  return count;
};