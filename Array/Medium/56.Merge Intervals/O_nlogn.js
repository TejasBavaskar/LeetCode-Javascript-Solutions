//O(nlogn)
var merge = function (intervals) {
  let result = [];
  intervals.sort((a, b) => a[0] - b[0]);

  let i = 0;
  while (i < intervals.length) {
    let [s1, e1] = intervals[i];
    while (intervals[i + 1] && e1 >= intervals[i + 1][0]) {
      e1 = Math.max(e1, intervals[i + 1][1]);
      i++;
    }
    result.push([s1, e1]);
    i++;
  }

  return result;
};
