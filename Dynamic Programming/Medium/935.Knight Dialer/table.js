//O(n * 10)     => n = no. of steps given     10 = keypad 10 keys
//Reference: https://www.youtube.com/watch?v=AspiZ9mUghM
var knightDialer = function (n) {
  let path = [[4,6], [6, 8], [7,9], [4,8], [0,3,9], [], [0,1,7], [2,6], [1,3], [2,4]];
  let dp = Array(n + 1);
  for (let i = 0; i < n + 1; i++) {
    dp[i] = Array(10).fill(0);
  }

  for (let i = 0; i < 10; i++) {
    dp[0][i] = 0;   // in 0 steps press key i which is always 0
  }
  for (let i = 0; i < 10; i++) {
    dp[1][i] = 1;   //in 1 step press key 1 which is always 1
  }

  for (let i = 2; i < n + 1; i++) {   //no. of steps
    for (let j = 0; j < 10; j++) {    //key number
      path[j].forEach((item) => {     // We can reach to key j from path[j] keys
        dp[i][j] = dp[i][j] + dp[i - 1][item];
      });
      dp[i][j] %= Math.pow(10, 9) + 7;
    }
  }

  //Last row of dp table indicates => No. of ways with N steps for pressing each keys.
  //So sum of last row gives the answer.
  let ans = dp[n].reduce((sum, item) => {
    return sum + item;
  }, 0);

  return ans % (Math.pow(10, 9) + 7);
};
