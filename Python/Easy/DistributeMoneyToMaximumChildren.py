class Solution:
    def distMoney(self, money: int, children: int) -> int:
        if money < children:
            return -1
        if money == children:
            return 0

        count = min((money - children) // 7, children)
        remaining = money - children - count * 7

        if count == children and remaining:
            return children - 1
        if count == children - 1 and remaining:
            return children - 2 if remaining == 3 else children - 1

        return count
