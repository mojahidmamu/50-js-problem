// Return the First n Fibonacci Numbers
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}
console.log(fibonacci(5));  