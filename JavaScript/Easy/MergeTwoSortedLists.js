/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {
  // If both linked lists are null, return null
  if (!list1 && !list2) return null;
  // Create linked list for merged list
  var merged = new ListNode(0);
  // Setup pointers for traversal
  var head = merged;
  // Create function to traverse linked list
  var traverse = (l1, l2) => {
    // Check if reached end of linked list. If found, stop recursion and complete traversal
    if (l1 && !l2) {
      head.next = l1;
      return;
    }
    if (!l1 && l2) {
      head.next = l2;
      return;
    }
    // If both linked lists are not null and value of l1 is less than l2,
    if (l1.val < l2.val) {
      // Add l1 to merged linked list
      head.next = l1;
      // Go to next node in l1
      l1 = l1.next;
    } else {
      // Add l2 to merged linked list
      head.next = l2;
      // Go to next node in l2
      l2 = l2.next;
    }
    // Go to next node in merged linked list
    head = head.next;
    // Recursively call function to traverse linked list
    return traverse(l1, l2);
  };
  traverse(list1, list2);
  // Return head of merged linked list
  return merged.next;
};
