type ChessBoardMatrix = string[][];

const QUEEN_CHARACTER: string = "Q";
const FILL_SYMBOL = "_";
const CHESS_BOARD_NUMBER_ROWS: number = 8;
const CHESS_BOARD_NUMBER_COLS: number = 8;

const fillChessBoard = (chessBoard: ChessBoardMatrix): void => {
  for (let row: number = 0; row < CHESS_BOARD_NUMBER_ROWS; row++) {
    chessBoard[row] = [];
    for (let col: number = 0; col < CHESS_BOARD_NUMBER_COLS; col++) {
      chessBoard[row][col] = FILL_SYMBOL;
    }
  }
};

const printChessBoard = (chessBoard: ChessBoardMatrix): void => {
  let result = "";
  for (let row: number = 0; row < chessBoard.length; row++) {
    for (let col: number = 0; col < chessBoard[row].length; col++) {
      result += `${chessBoard[row][col]} `;
    }
    result += "\n";
  }
  console.log(result);
};

const canPlaceQueen = (
  chessBoard: ChessBoardMatrix,
  row: number,
  col: number
): boolean => {
  for (let i = 0; i < CHESS_BOARD_NUMBER_ROWS; i++) {
    if (chessBoard[i][col] === QUEEN_CHARACTER) {
      return false;
    }
  }

  for (let j = 0; j < CHESS_BOARD_NUMBER_COLS; j++) {
    if (chessBoard[row][j] === QUEEN_CHARACTER) {
      return false;
    }
  }

  //First diagonal left to right
  let i: number = row,
    j: number = col;
  while (i >= 0 && j >= 0) {
    if (chessBoard[i][j] === QUEEN_CHARACTER) {
      return false;
    }
    i--;
    j--;
  }

  i = row;
  j = col;
  while (i < 8 && j < 8) {
    if (chessBoard[i][j] === QUEEN_CHARACTER) {
      return false;
    }
    i++;
    j++;
  }

  //Second diagonal right to left
  i = row;
  j = col;
  while (i >= 0 && j < CHESS_BOARD_NUMBER_COLS) {
    if (chessBoard[i][j] === QUEEN_CHARACTER) {
      return false;
    }
    i--;
    j++;
  }

  i = row;
  j = col;
  while (j >= 0 && i < CHESS_BOARD_NUMBER_ROWS) {
    if (chessBoard[i][j] === QUEEN_CHARACTER) {
      return false;
    }
    i++;
    j--;
  }

  return true;
};

const placeQueen = (
  chessBoard: ChessBoardMatrix,
  row: number,
  col: number
): void => {
  chessBoard[row][col] = QUEEN_CHARACTER;
};

const placeQueens = (
  chessBoard: ChessBoardMatrix,
  initialRow: number,
  initialCol: number
): boolean => {
  placeQueen(chessBoard, initialRow, initialCol);

  const QUEENS_TO_GENERATE: number = 2;
  const placedPositions: { row: number; col: number }[] = [
    { row: initialRow, col: initialCol },
  ];

  for (let i = 0; i < QUEENS_TO_GENERATE; i++) {
    const iQueenPosition = findAvailablePosition(chessBoard);

    if (iQueenPosition) {
      placeQueen(chessBoard, iQueenPosition.row, iQueenPosition.col);
      placedPositions.push(iQueenPosition);
    } else {
      for (const position of placedPositions) {
        chessBoard[position.row][position.col] = FILL_SYMBOL;
      }
      return false;
    }
  }

  return true;
};

const findAvailablePosition = (
  chessBoard: ChessBoardMatrix
): { row: number; col: number } | null => {
  for (let row = 0; row < CHESS_BOARD_NUMBER_ROWS; row++) {
    for (let col = 0; col < CHESS_BOARD_NUMBER_COLS; col++) {
      if (canPlaceQueen(chessBoard, row, col)) {
        return { row, col };
      }
    }
  }
  return null;
};

const chessBoard: ChessBoardMatrix = [];
fillChessBoard(chessBoard);

const initialRow = 0;
const initialCol = 0;

if (placeQueens(chessBoard, initialRow, initialCol)) {
  console.log("Queens placed successfully:");
  printChessBoard(chessBoard);
} else {
  console.log("Couldn't place all queens.");
}
