# Game-Of-Life
The Game of Life (an example of a cellular automaton) is played on an infinite two-dimensional rectangular grid of cells. Each cell can be either alive or dead. The status of each cell changes each turn of the game (also called a generation) depending on the statuses of that cell's 8 neighbors. Neighbors of a cell are cells that touch that cell, either horizontal, vertical, or diagonal from that cell.

The initial pattern is the first generation. The second generation evolves from applying the rules simultaneously to every cell on the game board, i.e. births and deaths happen simultaneously. Afterwards, the rules are iteratively applied to create future generations. For each generation of the game, a cell's status in the next generation is determined by a set of rules. These simple rules are as follows:
1) Any live cell with fewer than two live neighbors dies, as if caused by under-population.
2) Any live cell with two or three live neighbors lives on to the next generation.
3) Any live cell with more than three live neighbors dies, as if by overcrowding.
4) Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
