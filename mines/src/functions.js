const createBoard = (rows, columns) => {
  return Array(rows)
    .fill(0)
    .map((_, row) => {
      return Array(columns)
        .fill(0)
        .map((_, column) => ({
          row,
          column,
          opened: false,
          flagged: false,
          mined: false,
          exploded: false,
          nearMines: 0,
        }));
    });
};

const spreadMines = (board, minesAmount) => {
  const rows = board.length;
  const columns = board[0].length;

  let minesPlanted;
  while (minesPlanted < minesAmount) {
    const row = parseInt(Math.random() * rows, 10);
    const column = parseInt(Math.random() * columns, 10);

    if (!board[row][column].mined) {
      board[row][column].mined = true;
      minesPlanted++;
    }
  }
};

const createMinedBoard = (rows, columns, minesAmount) => {
  const board = createBoard(rows, columns);
  spreadMines(board, minesAmount);
  return board;
}

export { createMinedBoard };