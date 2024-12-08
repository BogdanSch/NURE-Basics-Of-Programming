const calculateRecursiveFunction = (n: number = 2): number => {
  if (n === 0) return 0;
  else if (n === 1) return 1;

  let previousResult: number = calculateRecursiveFunction(n - 1);

  return previousResult * (n + 2) - n / previousResult;
};

console.log(calculateRecursiveFunction(5));
