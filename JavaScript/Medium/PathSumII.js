/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  if (!root) return [];
  if (!root.left && !root.right && root.val === targetSum) return [[root.val]];
  const left = pathSum(root.left, targetSum - root.val);
  const right = pathSum(root.right, targetSum - root.val);
  return left.concat(right).map((path) => [root.val].concat(path));
};
