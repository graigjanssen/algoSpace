// n: index of fibonacci sequence
// Iterative: O(n)
function fibIterative(n) {
  const fibArr = [0, 1];
  while (fibArr.length <= n) {
    fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
  }
  return fibArr[n];
}

// Recursive: O(2^n) (exponential)
function fibRecursive(n) {
  if (n < 2) {
    return n;
  }

  return fibRecursive(n - 1) + fibRecursive(n - 2);
}