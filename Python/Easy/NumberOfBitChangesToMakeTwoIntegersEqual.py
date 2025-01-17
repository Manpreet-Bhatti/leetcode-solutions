class Solution:
    def minChanges(self, n: int, k: int) -> int:
        if n < k:
            return -1

        diff = n ^ k

        if (k & ~n) != 0:
            return -1

        changes = 0
        while diff > 0:
            changes += diff & 1
            diff >>= 1

        return changes
