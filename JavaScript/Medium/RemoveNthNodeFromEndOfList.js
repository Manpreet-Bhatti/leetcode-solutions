/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let present = head;
  let future = head;
  while (n > 0) {
    future = future.next;
    n--;
  }
  if (!future) {
    return head.next;
  }
  while (future.next) {
    present = present.next;
    future = future.next;
  }
  present.next = present.next.next;
  return head;
};
