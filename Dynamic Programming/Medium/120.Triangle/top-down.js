//O(m*n)
var minimumTotal = function (triangle) {
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      let sum = 0;
      if (j === 0) {
        sum += triangle[i][j] + triangle[i - 1][j];
      } else if (j === triangle[i].length - 1) {
        sum += triangle[i][j] + triangle[i - 1][triangle[i - 1].length - 1];
      } else {
        sum +=
          triangle[i][j] + Math.min(triangle[i - 1][j], triangle[i - 1][j - 1]);
      }
      triangle[i][j] = sum;
    }
  }

  return Math.min(...triangle[triangle.length - 1]);
};
