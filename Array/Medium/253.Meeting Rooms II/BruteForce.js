//O(nlogn)
var minMeetingRooms = function (intervals) {
  let startTime = [];
  let endTime = [];
  for (let i = 0; i < intervals.length; i++) {
    startTime.push(intervals[i][0]);
    endTime.push(intervals[i][1]);
  }

  startTime.sort((a, b) => a - b);  //O(nlogn)
  endTime.sort((a, b) => a - b);    //O(nlogn)

  let p = 1;
  let q = 0;
  let count = 1;

  while (p < startTime.length) {    //n
    if (startTime[p] < endTime[q]) {
      count++;
    } else {
      q++;
    }
    p++;
  }

  return count;
};
