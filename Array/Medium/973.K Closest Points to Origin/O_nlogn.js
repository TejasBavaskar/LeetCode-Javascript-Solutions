//O(nlogn)
var kClosest = function (points, k) {
  let queue = [];
  for (let i = 0; i < points.length; i++) {   //n
    let x1 = points[i][0];
    let y1 = points[i][1];
    let x2 = 0;
    let y2 = 0;
    let diff = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

    queue.push([points[i], diff]);
  }

  queue.sort((a, b) => a[1] - b[1]);    //nlogn

  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(queue[i][0]);
  }

  return result;
};
