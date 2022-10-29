# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        result = ListNode(0)
        next_node = result
        temp_num = 0

        while l1 is not None or l2 is not None or temp_num > 0:
            if l1 is not None:
                temp_num += l1.val
                l1 = l1.next
            if l2 is not None:
                temp_num += l2.val
                l2 = l2.next

            next_node.next = ListNode(temp_num % 10)
            next_node = next_node.next

            temp_num = temp_num // 10

        return result.next
