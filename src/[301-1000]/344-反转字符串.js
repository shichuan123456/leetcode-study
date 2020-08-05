var reverseString = function(s) {
  let x = 0, y = s.length - 1;
  while(x < y){
      [s[x], s[y]] = [s[y], s[x]]; // 结构赋值进行交换
      x++,y--;
  }
  return s;
};

console.log(reverseString(["h", "e"]));