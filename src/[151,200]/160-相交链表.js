/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var getIntersectionNode = function(headA, headB) {
  while(headA) {
    headA.flag = 1;
    headA = headA.next;
  }

  while(headB) {
    if(headB.flag) return headB;
    headB = headB.next;
  }
};

var getIntersectionNode1 = function(headA, headB) {
  let pA = headA, pB = headB;
  while(pA || pB) {
      if(pA === pB) return pA;
      pA = pA === null ? headB : pA.next;
      pB = pB === null ? headA : pB.next;
  }
  return null;
};