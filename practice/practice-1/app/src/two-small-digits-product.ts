function productOfTwoSmallestDigits(number: number): number {
  if (number < 100 || number > 999) {
    throw new Error("Number must be a three-digit integer");
  }

  let digits = number.toString().split("").map(Number);
  digits.sort((a, b) => a - b);

  return digits[0] * digits[1];
}

let threeDigitNumber = 573;
let product = productOfTwoSmallestDigits(threeDigitNumber);
console.log(
  `Number: ${threeDigitNumber}, Product of two smallest digits: ${product}`
);
