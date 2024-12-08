const calculateFraction = (num: number): number => {
  if (num == 103) {
    return 1 / num;
  }
  return 1 / (num + calculateFraction(num + 2));
};

console.log(calculateFraction(103));
