// Iterative
function findFactorialIterative(number) {
  let result = 1;
  for (let factor = number; factor > 1; factor--) {
    result = factor * result;
  }

  return result;
}

// Recursive
function findFactorialRecursive(number) {
  // Base case
  // Technically we could check if number === 2, but this handles edge cases where function is called with 0 or 1
  if (number === 0 || number === 1) {
    return 1;
  }
  
  // Recursive case
  return number * findFactorialRecursive(number - 1);
}