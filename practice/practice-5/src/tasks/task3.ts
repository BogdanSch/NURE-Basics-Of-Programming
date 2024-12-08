const findGreatestNumberIndexInArray = (numbers: number[]): number => {
  let max: number = numbers[0];
  let maxIndex: number = 0;

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber: number = numbers[i];

    if (currentNumber > max) {
      max = numbers[i];
      maxIndex = i;
    } else if (max === currentNumber) continue;
  }

  return maxIndex;
};

const numbers: number[] = [0, 12, -1, 999, 232, 999];
console.log(findGreatestNumberIndexInArray(numbers));
