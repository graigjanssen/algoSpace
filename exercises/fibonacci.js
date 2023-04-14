// n: index of fibonacci sequence
function fibIterative(n) {
  const fibArr = [0, 1];
  while (fibArr.length <= n) {
    fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
  }
  return fibArr[n];
}