const findMaxUsingRecursion = (
  numbers: number[],
  startIndex: number = numbers.length - 1
): number => {
  if (startIndex === 0) return numbers[0];

  let nextMax: number = findMaxUsingRecursion(numbers, startIndex - 1);
  let currentMax: number = numbers[startIndex];

  if (currentMax > nextMax) return currentMax;
  return nextMax;
};

const numbers = [1, 7, 3, 4, 9, 2];
console.log(findMaxUsingRecursion(numbers));
