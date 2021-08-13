//O(nlogn + mlogm) 
var maxArea = function (h, w, horizontalCuts, verticalCuts) {
  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.sort((a, b) => a - b);

  let n = horizontalCuts.length;
  let m = verticalCuts.length;

  let maxHeight = Math.max(horizontalCuts[0], h - horizontalCuts[n - 1]);
  for (let i = 1; i < n; i++) {
    maxHeight = Math.max(maxHeight, horizontalCuts[i] - horizontalCuts[i - 1]);
  }

  console.log(maxHeight);

  let maxWidth = Math.max(verticalCuts[0], w - verticalCuts[m - 1]);
  for (let i = 1; i < m; i++) {
    maxWidth = Math.max(maxWidth, verticalCuts[i] - verticalCuts[i - 1]);
  }

  console.log(maxWidth);

  return (maxWidth * maxHeight) % 1000000007;
};
