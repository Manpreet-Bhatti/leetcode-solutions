from typing import List


class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        maj_el = None
        count = 0

        for num in nums:
            if count == 0:
                maj_el = num
                count += 1
            elif maj_el == num:
                count += 1
            else:
                count -= 1

        return maj_el
