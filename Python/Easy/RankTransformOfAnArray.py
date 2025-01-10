from typing import List


class Solution:
    def arrayRankTransform(self, arr: List[int]) -> List[int]:
        sorted_unique = sorted(set(arr))
        rank_map = {num: i + 1 for i, num in enumerate(sorted_unique)}
        return [rank_map[num] for num in arr]
