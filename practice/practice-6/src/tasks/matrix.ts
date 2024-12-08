export type Matrix = number[][];

export const generateMatrix = (n: number, m: number): Matrix => {
  const matrix: Matrix = [];
  let count: number = 1;

  for (let rowIndex = 0; rowIndex < n; rowIndex++) {
    const row = [];
    for (let columnIndex = 0; columnIndex < m; columnIndex++, count++) {
      row.push(count);
    }
    matrix.push(row);
  }

  return matrix;
};

export const printMatrix = (matrix: Matrix): void => {
  let output: string = "";

  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    for (
      let columnIndex = 0;
      columnIndex < matrix[rowIndex].length;
      columnIndex++
    ) {
      output += `${matrix[rowIndex][columnIndex]}\t`;
    }
    output += "\n";
  }

  console.log(output);
  // return output;
};

export const calculateAverageOfMatrixColumns = (matrix: Matrix): number[] => {
  let averages: number[] = [];

  const rowCount: number = matrix.length;
  const colCount: number = matrix[0].length;

  for (let col: number = 0; col < colCount; col++) {
    let currentSum: number = 0;

    for (let row: number = 0; row < rowCount; row++) {
      currentSum += matrix[row][col];
    }

    averages.push(currentSum / rowCount);
  }

  return averages;
};
