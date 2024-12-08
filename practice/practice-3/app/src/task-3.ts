function calculateSeriesSum(n: number): number {
  let sum: number = 2;
  let product: number = 2;

  for (let i = 2; i <= n; i++) {
    product = (product / (i - 1)) * (2 * i) * (2 * i - 1);
    sum += product;
  }

  return sum;
}

let n = 5;
console.log(`The sum of the series is: ${calculateSeriesSum(n)}`);
