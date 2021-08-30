//O(n)
var numDecodings = function (s) {
  let count = 0;
  let map = new Map();

  var solve = function (i, str) {     //n
    if (i >= s.length) {
      count++;
      return;
    }

    let key = i + " " + str;
    if (map.has(key)) {
      count += map.get(key);
      return;
    }

    let num = parseInt(str);
    if (num >= 1 && num <= 26) {
      solve(i + 1, s[i + 1]);
      if (num !== 0 && s[i + 1]) {
        solve(i + 1, num + s[i + 1]);
      }

      map.set(key, count);
    }
  };

  solve(0, s[0]);
  return count;
};
