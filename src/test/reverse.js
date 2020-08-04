const reverse = (s) => {
  const sToArr = s.split("");
  for (let i = 0, len = sToArr.length; i < Math.floor(len/2); i++) {
    const temp = sToArr[i];
    sToArr[i] = sToArr[len - 1 -i];
    sToArr[len - 1 - i] = temp;
  }
  return sToArr.join("");
}

console.log(reverse("abcdefgh"));