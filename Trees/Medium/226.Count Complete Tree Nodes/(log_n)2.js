//O(log^2(n))
//For each level we are doing O(log_n) times operation to find extreme left and right height
//At each level, if subtree is not perfect binary tree then we are going to left and right
//but remember that either left or right will return the subtree nodes count very soon 
//because of Complete Binary Tree Property.
//Hence, Time Complexity = O(log_n * log_n)
//Reference: https://www.youtube.com/watch?v=CvrPf1-flAA
var countNodes = function (root) {
  let count = 0;

  let lHeight = 0;
  let temp = root;
  //traverse to extreme left node
  while (temp) {  //O(log(2n+1)) not O(n) because tree is complete binary tree, skew tree not possible here
    lHeight++;
    temp = temp.left;
  }

  let rHeight = 0;
  temp = root;
  //traverse to extreme right node
  while (temp) {  //O(log(2n+1)) not O(n) because tree is complete binary tree, skew tree not possible here
    rHeight++;
    temp = temp.right;
  }

  if (lHeight === rHeight) {
    return Math.pow(2, lHeight) - 1;
  }

  return 1 + countNodes(root.left) + countNodes(root.right);
};
