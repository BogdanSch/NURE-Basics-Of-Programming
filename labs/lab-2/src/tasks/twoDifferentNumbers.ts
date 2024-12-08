const getNumbersDigitsNumeric = (num: number): number[] => {
  let digits: number[] = [];

  while (num > 0) {
    let rest: number = num % 10;

    digits.push(rest);

    num = Math.floor((num - rest) / 10);
  }

  return digits;
};

const checkAtLeastTwoDifferentNumbers = (num: number): boolean => {
  if (num <= 0) return false;
  if (!Number.isInteger(num)) return false;

  let digits: number[] = getNumbersDigitsNumeric(num);
  let firstNumber = digits[0];

  for (let i: number = 1; i < digits.length; i++) {
    if (digits[i] !== firstNumber) {
      return true;
    }
  }

  return false;
};

export default checkAtLeastTwoDifferentNumbers;
