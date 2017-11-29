// script containing all logic for running the game of life

var boardSize = 20, board = [], speed;

for (var i = 0; i < boardSize; i++)
{
  board[i] = [];
}

function gol()
{
  var b = initBoard();
  interval = setInterval(function()
  {
    display(b);
  	var next = getNextGen(b);
    b = next;
  }, speed);
}

function initBoard()
{
  var theGrid = board;
	for (var col = 0; col < boardSize; col++)
	{
		for (var row = 0; row < boardSize; row++)
		{
      theGrid[col][row] = false;
      // acorn shape for testing
      // theGrid[6][6] = true;
      // theGrid[7][6] = true;
      // theGrid[7][4] = true;
      // theGrid[9][5] = true;
      // theGrid[10][6] = true;
      // theGrid[11][6] = true;
      // theGrid[12][6] = true;

      if (Math.random() < 0.5) // randomly populates and sets the populated
        // cells to true. Cells are true 1/2 the time and set to be alive.
      {
      	theGrid[col][row] = true;
      }
		}
	}
	return theGrid;
}

function isAlive(col, row, board)
{
	if (col < 0 || row < 0 || col >= boardSize || row >= boardSize)
  // out of bounds
	{
    return false; // die
  }
	if (board[col][row])
	{
    return true;
  }
	return false;  // otherwise die
}

function willBeAlive(col, row, board)
// gets live status of cells based on the rules of game of life
{
  var liveDudes = 0;

  if (isAlive(col, row - 1, board)) {
    liveDudes++;
  }
	if (isAlive(col, row + 1, board)) {
    liveDudes++;
  }
  if (isAlive(col - 1, row, board)) {
    liveDudes++;
  }
  if (isAlive(col + 1, row, board)) {
    liveDudes++;
  }
  if (isAlive(col - 1, row - 1, board)) {
    liveDudes++;
  }
	if (isAlive(col - 1, row + 1, board)) {
    liveDudes++;
  }
	if (isAlive(col + 1, row - 1, board)) {
    liveDudes++;
  }
	if (isAlive(col + 1, row + 1, board)) {
    liveDudes++;
  }

// apply the game of life rules to the cells
	switch(liveDudes)
	{
    case 0:
			return false;
		case 3:
			return true;
		case 2:
			return board[col][row];  // return dead or alive
	}
}

function getNextGen(currentGen)
// get the next generation of cells.
// Next generation depends upon current generation.
{
  var nextGen = board;
	for(var col = 0; col < currentGen.length; col++)
  // goes through columns of currentGen
  {
		for(var row = 0; row < currentGen[col].length; row++)
    // goes through each row of currentGen
    {
  		if(willBeAlive(col, row, currentGen))
      {
  			nextGen[col][row] = true;
      }
      else
      {
        nextGen[col][row] = false;
      }
    }
  }
		return nextGen;
}

function genSpeed()
{
  speed = document.getElementById('genSpeed').value;
}

function pause()
{
  clearInterval(interval);
}
