/* 
  用两个stack实现队列
*/
var CQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

CQueue.prototype.appendTail = function (value) {
  this.stack1[this.stack1.length] = value;
};

CQueue.prototype.deleteHead = function () {
  if (!this.stack2.length) {
      let cur 
      while ((cur = this.stack1.pop())) {
          this.stack2.push(cur);
      }
  }
  if (!this.stack2.length) {
      return -1
  } else {
      return this.stack2.pop();
  }
};
