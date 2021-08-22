//O(n^2)
var integerBreak = function(n) {
  let dp = Array(n+1).fill(Number.MIN_SAFE_INTEGER);
  dp[0] = 1;
  dp[1] = 1;
  console.log(dp)

  for(let i=2; i<=n; i++) {     //n
      for(let k=1; k<i; k++) {    //n
          dp[i] = Math.max(dp[i], k * Math.max(dp[i-k], i-k));
      }
  }
  
  return dp[n];
};