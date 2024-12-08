const printNums = (num: number): void => {
  if (num === 1) {
    console.log(num);
    return;
  }
  printNums(num - 1);
  console.log(num);
};

const printNumsReverse = (num: number): void => {
  if (num === 1) {
    console.log(num);
    return;
  }

  console.log(num);
  printNumsReverse(num - 1);
};

const num: number = 10;

printNums(num);
printNumsReverse(num);
