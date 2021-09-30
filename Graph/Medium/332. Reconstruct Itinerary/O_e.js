//O(E)  => because we are traversing all edges only once
//Reference: https://www.youtube.com/watch?v=WYqsg5dziaQ
var findItinerary = function (tickets) {
  let map = new Map();
  for (let i = 0; i < tickets.length; i++) {
    let src = tickets[i][0];
    let dst = tickets[i][1];

    if (!map.has(src)) {
      map.set(src, []);
    }
    map.get(src).push(dst);
  }

  let ans = [];
  let stack = [];

  var dfs = function (node) {
    let list = map.get(node) || [];
    list.sort();
    for (let i = 0; i < list.length; i++) {
      if (list[i] !== 1) {
        let newNode = list[i];
        list[i] = 1;
        stack.push(newNode);
        dfs(newNode);
      }
    }
    stack.pop();
    ans.push(node);
  };

  dfs("JFK");
  return ans.reverse();
};
