/* 
  在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
  s = "abaccdeff"  s = ""
  返回 "b"         返回 " "
*/

var firstUniqChar = function(s) {
 if(!s) return " ";
 for(let i = 0; i < s.length; i++) {
    if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return s[i];
    }
 }
 return " ";
};

var firstUniqChar1 = function(s) {
  if(!s) return " ";
  const map = new Map();
  for(let i = 0; i < s.length; i++){
    if(map.get(s[i])) continue;
    const idx = s.indexOf(s[i], i + 1);
    if(idx === -1) {
      return s[i];
    }else{
      map.set(s[i], true)
    }
  }
  return " ";
}

var firstUniqChar2 = function(s) {
  for(let char of new Set(s)) {
    if(s.match(new RegExp(char, 'g')).length === 1) {
      return char;
    }
  }
  return " ";
}

g.V().has('people', 'peopleName', 'Thor')


console.log(firstUniqChar("abbaccddeeffg"))
console.log(firstUniqChar(""))

console.log(firstUniqChar1("abbaccddeeffg"))
console.log(firstUniqChar1(""))

console.log(firstUniqChar2("abbaccddeeffg"))
console.log(firstUniqChar2(""))