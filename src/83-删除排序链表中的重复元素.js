
/* 
  1 -> 1 -> 2
  1 -> 2
*/


var deleteDuplicates = function(head) {
  if(head == null) return head;
  const cur = head;
  while(cur.next) {
    if(cur.val == cur.next.val) {
      cur.next = cur.next.next;
    }else{
      cur=cur.next;
    }
  }
  return head;
}