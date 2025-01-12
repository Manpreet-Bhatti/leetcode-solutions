/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid?.length || !grid[0]?.length) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islands = 0;

  const dfs = (x, y) => {
    if (x < 0 || x >= rows || y < 0 || y >= cols || grid[x][y] !== "1") return;

    grid[x][y] = "0";

    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        dfs(i, j);
        islands++;
      }
    }
  }

  return islands;
};
