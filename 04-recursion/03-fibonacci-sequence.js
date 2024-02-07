let i = 0;

function febonacci(n) {
  if (n < 2) return n;

  return febonacci(n - 1) + febonacci(n - 2);
}

console.log(febonacci(6));
console.log(febonacci(10));
