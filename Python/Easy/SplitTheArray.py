from typing import List


class Solution:
    def isPossibleToSplit(self, nums: List[int]) -> bool:
        freq = {}
        for num in nums:
            freq[num] = freq.get(num, 0) + 1
            if freq[num] > 2:
                return False
        return True
