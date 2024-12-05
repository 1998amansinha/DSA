function power(n) {
  for (let i = 0; i < n; i++) {
    if (Math.pow(2, i) === n) {
      return true;
    }
  }
  return false;
}

console.log(power(2));
console.log(power(5));

// Time Complexity - O(n)
