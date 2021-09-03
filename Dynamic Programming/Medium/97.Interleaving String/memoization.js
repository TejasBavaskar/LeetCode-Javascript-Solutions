//O(m*n)
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) {    // if(m+n !== k) return false;
    return false;
  }

  let map = new Map();

  var solve = function (i, j, k) {
    let key = i + " " + j + " " + k;
    if (k === s1.length + s2.length) {
      map.set(key, true);
      return true;
    }

    if (map.has(key)) {
      return map.get(key);
    }

    let ans = false;
    if (i < s1.length && s1[i] === s3[k]) {
      ans = ans || solve(i + 1, j, k + 1);
    }

    if (j < s2.length && s2[j] === s3[k]) {
      ans = ans || solve(i, j + 1, k + 1);
    }

    map.set(key, ans);
    return ans;
  };

  return solve(0, 0, 0);
};
