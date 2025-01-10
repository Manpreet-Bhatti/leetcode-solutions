from typing import List
from collections import deque


class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        result = []
        dq = deque()

        for i in range(k):

            while dq and nums[dq[-1]] < nums[i]:
                dq.pop()
            dq.append(i)

        result.append(nums[dq[0]])

        for i in range(k, len(nums)):

            while dq and dq[0] <= i - k:
                dq.popleft()

            while dq and nums[dq[-1]] < nums[i]:
                dq.pop()

            dq.append(i)
            result.append(nums[dq[0]])

        return result
