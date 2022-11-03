/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let stack = [];
  let temp = head;
  while (temp) {
    stack.push(temp.val);
    temp = temp.next;
  }
  while (head) {
    if (head.val !== stack.pop()) {
      return false;
    }
    head = head.next;
  }
  return true;
};
