//Each node will send a number to its parent that how many more-coins/coin-shortage it has.
//If that number is negative => that node has shortage of coins
//if number is positive => that node has extra coins
//Reference: https://www.youtube.com/watch?v=MvLEIQv4E6s
var distributeCoins = function (root) {
  let ans = 0;

  var dfs = function (root) {
    if (!root) {
      return 0;
    }

    let left = dfs(root.left);
    let right = dfs(root.right);
    ans += Math.abs(left) + Math.abs(right);

    return left + right + root.val - 1;
  };

  dfs(root);
  return ans;
};
