const calculateFactorial = (num: number): number => {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * calculateFactorial(num - 1);
  }
};

const calculateFractionsSequence = (x: number): number => {
  let result: number = x;
  let multiplier: number = -1;

  for (let i: number = 3; i <= 13; i += 2) {
    result += (multiplier * x ** i) / calculateFactorial(i);
    // console.log(`${multiplier} x ** ${i} / f(${i})`);
    multiplier *= -1;
  }

  return result;
};

const x: number = 5;

const result: number = calculateFractionsSequence(x);
console.log(`Fraction sequence result is: ${result}`);
