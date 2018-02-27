const numberOfColumns = 7;
const gameBoard = document.getElementById('gameBoard');

let counter = 0;

let currentPlayer = 'coral';
let nextPlayer = 'seagreen';

for (let y = 0; y < numberOfColumns; y++) {       // y = columns
  
  let column = document.createElement('div');
  column.classList.add('column');
  gameBoard.appendChild(column);

  column.addEventListener('click', function (event) {
    let clickedColumn = event.target;
    
    if (clickedColumn.childElementCount < 6 ){
        counter++;

        
        let piece = document.createElement('div');
        piece.classList.add('dot');
        piece.classList.add(currentPlayer);
    
        let newNextPlayer = currentPlayer;
        currentPlayer = nextPlayer;
        nextPlayer = newNextPlayer;
    
       
        clickedColumn.appendChild(piece);

      }
    // counter++;

    // let clickedColumn = event.target;

    // let piece = document.createElement('div');
    // piece.classList.add('dot');
    // piece.classList.add(currentPlayer);

    // let newNextPlayer = currentPlayer;
    // currentPlayer = nextPlayer;
    // nextPlayer = newNextPlayer;

   
    // clickedColumn.appendChild(piece);
  })


  

}


// // ***** NEW STUFF *****

boardState = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ]
  let columns = document.getElementsByClassName('column');
  
  for (let x = 0; x < columns.length; x++) {
    columns[x].innerHTML = '';
  }
 
 
 function checkWin() {
  const edgeX = boardState[0].length - 3;
  for (let y = 0; y < boardState.length; y++) {
    let row = boardState[y];
    for (let x = 0; x < edgeX; x++) {
      let cell = row[x];
      if (cell === boardState[y][x+1] && cell === boardState[y][x+2] && cell === boardState[y][x+3] && cell != 0) {
        alert(currentPlayer + ' Wins!');
        reset();
      }
    }
  }
}