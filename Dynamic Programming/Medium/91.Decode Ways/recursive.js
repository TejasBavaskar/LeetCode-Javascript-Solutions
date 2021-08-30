//O(2^n)    => Time Limit Exceed
//https://www.youtube.com/watch?v=o1i7JYWbwOE
var numDecodings = function (s) {
  let count = 0;

  var solve = function (i, str) {
    if (i >= s.length) {
      count++;
      return;
    }

    let num = parseInt(str);
    if (num >= 1 && num <= 26) {
      solve(i + 1, s[i + 1]);
      if (num !== 0 && s[i + 1]) {
        solve(i + 1, num + s[i + 1]);
      }
    }
  };

  solve(0, s[0]);
  return count;
};
