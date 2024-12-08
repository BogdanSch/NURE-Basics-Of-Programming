const nestedRoots = (n: number, k: number): number => {
  let result: number = Math.sqrt(2 * n * k);

  for (let i: number = n - 1; i >= 1; i--) {
    result = Math.sqrt(2 * i * k + result);
  }

  return result;
};

const n: number = 5;
const k: number = 3;

const result: number = nestedRoots(n, k);
console.log(`Sqrt sequence result is: ${result}`);
