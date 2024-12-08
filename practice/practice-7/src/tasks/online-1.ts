type Matrix = number[][];

const getRowIndexOfGreatestElement = (matrix: Matrix): number => {
  let maxRow: number = 0,
    maxColumn: number = 0;

  for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = 0; j < matrix[i].length; j++) {
      let currentMaxElement = matrix[maxRow][maxColumn];
      let tempElement = matrix[i][j];

      if (tempElement > currentMaxElement) {
        maxRow = i;
        maxColumn = j;
      }
    }
  }

  return maxRow;
};

const getRowIndexOfSmallestElement = (matrix: Matrix) => {
  let minRow: number = 0,
    minColumn: number = 0;

  for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = 0; j < matrix[i].length; j++) {
      let currentMaxElement = matrix[minRow][minColumn];
      let tempElement = matrix[i][j];

      if (tempElement < currentMaxElement) {
        minRow = i;
        minColumn = j;
      }
    }
  }

  return minRow;
};

const ChangeMinMax = (matrix: Matrix): void => {
  const maxElementRow = getRowIndexOfGreatestElement(matrix);
  const minElementRow = getRowIndexOfSmallestElement(matrix);

  [matrix[maxElementRow], matrix[minElementRow]] = [
    matrix[minElementRow],
    matrix[maxElementRow],
  ];

  console.log(matrix);
};

const matrix: Matrix = [
  [-10, 72, -3],
  [2, 3, 5],
  [-52, -6, 7],
];
// ChangeMinMax(matrix);
console.log(ChangeMinMax(matrix));
