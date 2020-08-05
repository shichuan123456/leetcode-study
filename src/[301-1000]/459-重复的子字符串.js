const repeatedSubstringPattern = (s) => {
  return /^(\w+)\1+$/.test(s);
}


const repeatedSubstringPattern1 = (s) => {
  const s1 = (s+s).slice(1,-1);
  return s1.indexOf(s) !== -1;
}

console.log(repeatedSubstringPattern("abcabc"));
console.log(repeatedSubstringPattern1("abcabc"));

console.log(repeatedSubstringPattern("abcabca"));
console.log(repeatedSubstringPattern1("abcabca"));