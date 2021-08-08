var minMeetingRooms = function (intervals) {
  let queue = [];

  //sort by start time
  intervals.sort((a, b) => a[0] - b[0]);
  //push first meeting end time
  queue.push(intervals[0][1]);

  for (let i = 1; i < intervals.length; i++) {
    //checking if next meeting start time >= already allocated room end time
    if (intervals[i][0] >= queue[0]) {
      queue.shift();
    }

    queue.push(intervals[i][1]);
    queue.sort((a, b) => a - b); //sorting after each push to maintain Priority Queue behavior
  }

  return queue.length;
};
