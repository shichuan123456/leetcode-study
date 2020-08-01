/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 *  输出：7 -> 0 -> 8
 *  原因：342 + 465 = 807
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const head = new Node(-1);
  let cur = head, carry = 0;
  while(l1 || l2) {
    const l1Val = l1 ? l1.val : 0;
    const l2Val = l2 ? l2.val : 0;
    const sum = l1Val + l2Val + carry;
    const node = new Node(sum % 10);
    carry = parseInt(sum / 10);    // 必须取整
    cur.next = node;
    cur = cur.next;
    if(l1) l1 = l1.next;
    if(l2) l2 = l2.next;
  }
  if(carry) cur.next = new Node(carry);
  return head.next;
};