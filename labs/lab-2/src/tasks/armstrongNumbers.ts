// const getNumbersDigitsString = (num: number): number[] => {
//   let numberString = num.toString();

//   let digitsArray = numberString.split("");
//   let digits = digitsArray.map(Number);

//   return digits;
// };

const getNumbersDigitsNumeric = (num: number): number[] => {
  let digits: number[] = [];

  while (num > 0) {
    let rest: number = num % 10;

    digits.push(rest);

    num = Math.floor((num - rest) / 10);
  }

  return digits;
};

const calculateArmstrongNumber = (limit: number): number[] => {
  const armstrongNumbers: number[] = [];

  for (let i = 1; i < limit; i++) {
    let currentSum: number = 0;
    let digits: number[] = getNumbersDigitsNumeric(i); //getNumbersDigitsString(i);

    digits.forEach((digit) => {
      currentSum += digit ** digits.length;
    });

    if (currentSum === i) armstrongNumbers.push(currentSum);
  }

  return armstrongNumbers;
};

export default calculateArmstrongNumber;

// console.log(calculateArmstrongNumber(10e5));
