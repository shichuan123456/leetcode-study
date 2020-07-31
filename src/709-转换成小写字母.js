
var toLowerCase = function(s) {
  return s.replace(/[A-Z]/g, item => String.fromCharCode(item.charCodeAt() + 32));
}

console.log(toLowerCase(''));