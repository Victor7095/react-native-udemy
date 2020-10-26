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

  let minesPlanted = 0;
  while (minesPlanted < minesAmount) {
    const row = parseInt(Math.random() * rows, 10);
    const column = parseInt(Math.random() * columns, 10);

    if (!board[row][column].mined) {
      board[row][column].mined = true;
      minesPlanted++;
    }

    // Calcula qtde de minas ao redor de cada campo
    /* const neighbors = [
      { row: row - 1, column: column - 1 },
      { row: row - 1, column: column },
      { row: row - 1, column: column + 1 },
      { row: row, column: column - 1 },
      { row: row, column: column + 1 },
      { row: row + 1, column: column - 1 },
      { row: row + 1, column: column },
      { row: row + 1, column: column + 1 },
    ]
      .filter((neighbor) => {
        return (
          neighbor.row > 0 &&
          neighbor.column > 0 &&
          neighbor.row < rows &&
          neighbor.column < columns
        );
      })
      .map((neighbor) => {
        return {
          ...neighbor,
          nearMines: neighbor.nearMines + 1,
        };
      }); */
  }
};

const createMinedBoard = (rows, columns, minesAmount) => {
  const board = createBoard(rows, columns);
  spreadMines(board, minesAmount);
  return board;
};

const cloneBoard = (board) => {
  return board.map((row) => row.map((column) => ({ ...column })));
};

const getNeighbors = (board, row, column) => {
  const neighbors = [];
  const rows = [row - 1, row, row + 1];
  const columns = [column - 1, column, column + 1];

  rows.forEach((r) => {
    columns.forEach((c) => {
      const different = r !== row || c !== column;
      const validRow = r > 0 && r < board.length;
      const validColumn = c > 0 && c < board[0].length;
      if (different && validRow && validColumn) neighbors.push(board[r][c]);
    });
  });
  return neighbors;
};

const safeNeighborhood = (board, row, column) => {
  const safes = (result, neighbor) => result && !neighbor.mined;
  return getNeighbors(board, row, column).reduce(safes, true);
};

const openField = (board, row, column) => {
  const field = board[row][column];
  if (field.opened) return;
  field.opened = true;
  if (field.mined) field.exploded = true;
  else if (safeNeighborhood(board, row, column)) {
    getNeighbors(board, row, column).forEach((neighbor) =>
      openField(board, neighbor.row, neighbor.column)
    );
  } else {
    const neighbors = getNeighbors(board, row, column);
    field.nearMines = neighbors.filter((neighbor) => neighbor.mined).length;
  }
};

const fields = (board) => [].concat(...board);

const hasExploded = (board) =>
  fields(board).filter((field) => field.exploded).length > 0;

const pending = (field) =>
  (!field.mined && !field.opened) ||
  (field.mined && !field.exploded && !field.flagged);

const wonGame = (board) => fields(board).filter(pending).length === 0;

const showMines = (board) =>
  fields(board)
    .filter((field) => field.mined)
    .forEach((field) => (field.opened = true));

const invertFlag = (board, row, column) => {
  const field = board[row][column];
  field.flagged = !field.flagged;
};

export {
  createMinedBoard,
  cloneBoard,
  openField,
  hasExploded,
  wonGame,
  showMines,
  invertFlag,
};
