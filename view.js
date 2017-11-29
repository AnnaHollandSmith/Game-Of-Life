// script containing all logic for displaying the game of life

var gridHeight = 300, gridWidth = 300, paused = true, interval;
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

window.onload = function()
{
  genSpeed();
  canvas.width = gridWidth; // sets the default width of canvas
  canvas.height = gridHeight; // sets the default height of canvas
}

function display(b)
{
  for (var col = 0; col < board.length; col++)
  {
    for (var row = 0; row < board[col].length; row++)
    {
      ctx.beginPath();
      ctx.rect(col*15, row*15, 13, 13);
      if (board[col][row] == true)
      {  // if alive
        ctx.fillStyle = document.getElementById("liveColor").value;
        // sets the live cell color to chosen color
        ctx.fill();
      }
      else if(board[col][row] == false)
      { // if dead
        ctx.fillStyle = document.getElementById("deadColor").value;
        // sets the dead cell color to chosen color
        ctx.fill();
      }
    }
  }
}

function swapAlive()
// allows you to click on the canvas to swap alive status of cells
{
  canvas.addEventListener('mousedown', function(e)
  {
    var x = Math.floor((e.pageX - this.offsetLeft)/15);
    var y = Math.floor((e.pageY - this.offsetTop)/15);
    if (board[x][y])
    // if cell is alive, click on it to make it dead
    {
      board[x][y] = false;
    }
    else // if cell is dead, click to make it alive
    {
      board[x][y] = true;
    }
  }, false);
}
