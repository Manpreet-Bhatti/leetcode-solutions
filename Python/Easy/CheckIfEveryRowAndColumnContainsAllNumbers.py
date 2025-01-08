from typing import List


class Solution:
    def checkValid(self, matrix: List[List[int]]) -> bool:
        n = len(matrix)
        seen = set()

        for row in range(n):
            seen.clear()
            for col in range(n):
                num = matrix[row][col]
                if num < 1 or num > n or num in seen:
                    return False
                seen.add(num)

        for col in range(n):
            seen.clear()
            for row in range(n):
                num = matrix[row][col]
                if num < 1 or num > n or num in seen:
                    return False
                seen.add(num)

        return True
