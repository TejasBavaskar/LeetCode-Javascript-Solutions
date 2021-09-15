//O(3^m)    => m = word1.length
//Time Limit Exceed
var minDistance = function (word1, word2) {
  var solve = function (i, j) {
    if (i === 0) {
      return j;
    }

    if (j === 0) {
      return i;
    }

    if (word1[i - 1] === word2[j - 1]) {
      return solve(i - 1, j - 1);
    } else {
      let insertOp = 1 + solve(i, j - 1);
      let deleteOp = 1 + solve(i - 1, j);
      let replaceOp = 1 + solve(i - 1, j - 1);

      return Math.min(insertOp, deleteOp, replaceOp);
    }
  };

  return solve(word1.length, word2.length);
};
