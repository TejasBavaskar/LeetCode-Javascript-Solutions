//O(n) => in case of worst case Skew Tree, need to traverse for almost n-1 nodes.
var lowestCommonAncestor = function(root, p, q) {
  if(p.val > root.val && q.val > root.val) {
      return lowestCommonAncestor(root.right, p, q);
  } else if(p.val < root.val && q.val < root.val) {
      return lowestCommonAncestor(root.left, p, q);
  } else {
      return root;
  }
};