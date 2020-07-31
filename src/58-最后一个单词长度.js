/* 
  最后一个单词的长度
*/

var lengthOfLastWord = function(s) {
  s = s.trim();
  const arr = s.split(" ");
  return arr[arr.length-1].length;
}

var lengthOfLastWord1 = function(s) {
  let end = s.length -1;
  while(end >= 0 && s[end] == " ") {
    end--;
  }

  if(end < 0) return 0;

  let start = end;

  while(start >= 0 && s[start] !== " ") {
    start--;
  }

  return end - start;
}


console.log(lengthOfLastWord("fdf fdff "))
console.log(lengthOfLastWord1("    "))