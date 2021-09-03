//O(2^(m+n))    => Time Limit Exceed
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) {
    return false;
  }

  var solve = function (i, j, k) {
    if (k === s1.length + s2.length) {
      return true;
    }

    let ans = false;
    if (i < s1.length && s1[i] === s3[k]) {
      ans = ans || solve(i + 1, j, k + 1);
    }

    if (j < s2.length && s2[j] === s3[k]) {
      ans = ans || solve(i, j + 1, k + 1);
    }

    return ans;
  };

  return solve(0, 0, 0);
};
