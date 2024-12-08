const calculateMultiplication = (a: number, n: number): number => {
  let result: number = a;

  for (let i: number = 1; i < n; i++) {
    result *= a + i;
  }

  return result;
};

console.log(`Result: ${calculateMultiplication(5, 3)}`);
