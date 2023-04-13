// Iterative
function findFactorialIterative(number) {
  let result = 1;
  for (let factor = number; factor > 1; factor--) {
    result = factor * result;
  }

  return result;
}