//O(m*n)    => Similar to Longest Common Substring
var findLength = function (nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;

  let dp = Array(m + 1);
  for (let i = 0; i < m + 1; i++) {
    dp[i] = Array(n + 1).fill(0);
  }

  let max = 0;
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
        max = Math.max(max, dp[i][j]);
      } else {
        dp[i][j] = 0;
      }
    }
  }

  return max;
};
