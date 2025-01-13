class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) & 1:
            return False

        stack = []

        for char in s:
            if char == "(":
                stack.append(")")
            elif char == "{":
                stack.append("}")
            elif char == "[":
                stack.append("]")

            elif not stack or stack.pop() != char:
                return False

        return not stack
