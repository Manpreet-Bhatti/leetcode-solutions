class Solution:
    def getLucky(self, s: str, k: int) -> int:
        result = "".join(str(ord(c) - 96) for c in s)

        for _ in range(k):
            result = str(sum(int(digit) for digit in result))

        return int(result)
