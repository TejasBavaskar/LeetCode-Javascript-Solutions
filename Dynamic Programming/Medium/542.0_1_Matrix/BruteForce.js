//O((m*n) * (m*n)) => O((m*n)^2)
//Time Limit Exceed   => Using BFS for every cell with val=1 and so revisiting the cells
var updateMatrix = function (mat) {
  let row = mat.length;     //m
  let col = mat[0].length;  //n

  for (let i = 0; i < row; i++) {     //m
    for (let j = 0; j < col; j++) {   //n
      if (mat[i][j] === 1) {
        mat[i][j] = bfs(i, j, mat);
      }
    }
  }

  return mat;
};

var bfs = function (i, j, mat) {      //BFS takes O(m*n) => visiting all cells in worst case
  let queue = [];
  queue.push([[i, j], 0]);

  while (queue.length) {
    let [[x, y], dist] = queue.shift();
    if (x < 0 || y < 0 || x >= mat.length || y >= mat[0].length) {
      continue;
    }
    if (mat[x][y] === 0) {
      return dist;
    }

    queue.push([[x - 1, y], dist + 1]);
    queue.push([[x + 1, y], dist + 1]);
    queue.push([[x, y - 1], dist + 1]);
    queue.push([[x, y + 1], dist + 1]);
  }
};
