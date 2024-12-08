const calculateSumOfNumber = (n: number): number => {
  if (n < 10) return n;

  let currentPartial: number = n % 10;
  let previousPartial: number = calculateSumOfNumber((n - currentPartial) / 10);
  return currentPartial + previousPartial;
};

console.log(calculateSumOfNumber(7));
