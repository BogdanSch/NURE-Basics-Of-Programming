const calculateFormula = (k: number): number => {
  if (k === 1) return 1;
  else if (k === 2) return 2;

  let previousValue = calculateFormula(k - 1);
  return 2 * previousValue - k;
};

console.log(calculateFormula(5));
