//O(m*n)    => Using BFS
var updateMatrix = function (mat) {
  let row = mat.length;
  let col = mat[0].length;
  let queue = [];

  let visited = Array(row);
  for (let i = 0; i < row; i++) {
    visited[i] = Array(col).fill(0);
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
        visited[i][j] = 1;
      }
    }
  }

  while (queue.length) {
    let [x, y] = queue.shift();
    let dir = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    for (const [i, j] of dir) {
      let new_x = x + i;
      let new_y = y + j;
      if (
        new_x < 0 ||
        new_x >= row ||
        new_y < 0 ||
        new_y >= col ||
        visited[new_x][new_y]
      ) {
        continue;
      }

      visited[new_x][new_y] = 1;
      mat[new_x][new_y] = mat[x][y] + 1;
      queue.push([new_x, new_y]);
    }
  }

  return mat;
};
