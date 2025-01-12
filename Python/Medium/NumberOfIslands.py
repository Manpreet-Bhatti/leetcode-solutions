from typing import List


class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        if not grid or not grid[0]:
            return 0

        rows, cols = len(grid), len(grid[0])
        islands = 0
        directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]

        def dfs(x: int, y: int) -> None:
            if not (0 <= x < rows and 0 <= y < cols) or grid[x][y] != "1":
                return

            grid[x][y] = "#"

            for dx, dy in directions:
                dfs(x + dx, y + dy)

        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == "1":
                    dfs(i, j)
                    islands += 1

        return islands
