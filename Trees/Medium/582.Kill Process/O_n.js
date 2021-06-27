//O(n)
var killProcess = function (pid, ppid, kill) {
  let result = [];
  let dict = {};

  for (let i = 0; i < ppid.length; i++) {
    if (!(ppid[i] in dict)) {
      dict[ppid[i]] = [];
    }
    dict[ppid[i]].push(pid[i]);
  }

  result.push(kill);
  console.log(dict);
  var removeChild = function (kill) {
    if (!dict[kill]) {
      return;
    }

    let tempChilds = dict[kill];

    for (let i = 0; i < tempChilds.length; i++) {
      result.push(tempChilds[i]);
      removeChild(tempChilds[i]);
    }
  };

  removeChild(kill);
  return result;
};
