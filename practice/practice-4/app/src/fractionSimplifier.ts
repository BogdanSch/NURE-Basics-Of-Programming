const gcd = (x: number, y: number): number => {
  while (y !== 0) {
    [x, y] = [y, x % y];
  }
  return x;
};

const simplifyFraction = (numerator: number, denominator: number): string => {
  let wholePart: number = Math.floor(numerator / denominator);
  let newNumerator: number = numerator % denominator;

  let greatestCommonDivisor: number = gcd(newNumerator, denominator);

  if (greatestCommonDivisor > 1) {
    newNumerator /= greatestCommonDivisor;
    denominator /= greatestCommonDivisor;
  }

  if (newNumerator === 0) return `Ціла частина: ${wholePart}`;
  return `Ціла частина: ${wholePart}, Чисельник: ${newNumerator}, Знаменник: ${denominator}`;
};

console.log(simplifyFraction(20, 4));
console.log(simplifyFraction(2, 4));
console.log(simplifyFraction(32, 12));
