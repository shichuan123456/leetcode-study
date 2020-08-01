class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  push(x) {
    this.stack1.push();
  }

  pop() {
    if(!this.stack2.length) {
      let temp = "";
      while(temp = this.stack1.pop()) {
        this.stack2.push(temp);
      }
    }

    if(!this.stack2.length) {
      return ""
    }else{
      this.stack2.pop();
    }
  }

  peek() {
    
  }
}