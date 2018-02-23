const numberOfColumns = 7;
const gameBoard = document.getElementById('gameBoard');

let counter = 0;

let currentPlayer = 'coral';
let nextPlayer = 'seagreen';

for (let iCol = 0; iCol < numberOfColumns; iCol++) {       // columns
  
  let column = document.createElement('div');
  column.classList.add('column');
  gameBoard.appendChild(column);

  column.addEventListener('click', function (event) {
    counter++;

    let clickedColumn = event.target;

    let piece = document.createElement('div');
    piece.classList.add('dot');
    piece.classList.add(currentPlayer);

    let newNextPlayer = currentPlayer;
    currentPlayer = nextPlayer;
    nextPlayer = newNextPlayer;

    piece.textContent = counter;
    clickedColumn.appendChild(piece);
  })


  

}
