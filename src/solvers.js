/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard,
// with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  // Instantiate a new chess board
  var chessBoard = new Board({n:n});
  var solution = [];

  // store all possible n in solutions in array, rooks -> must be placed diagonally
  for (var i = 0; i < n; i++) {
    chessBoard.togglePiece(i, i);
    solution.push(chessBoard.attributes[i]);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

window.indexToRow = function(index, n) {
  return Math.floor((index - 1) / n);
};

window.indexToColumn = function(index, n) {
  return (index - 1) % n;
};
// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var chessBoard = new Board({n:n});
  var solutionCount = 0;
  
  var addRook = function(array, n, x, y) {
    // Base case:
    // arr[0] === 16 return
    if (array[0] === n * n) {
      return;
    }
    
    // loop through the board nxn; set i = arr[arr.len]
    for (var i = array[array.length - 1] + 1 || 1; i < n * n; i++) {
      if (chessBoard.hasAnyRooksConflicts()) {
        array.pop();
        chessBoard.togglePiece(x, y);
      }
      
      x = window.indexToRow(i, n);
      y = window.indexToColumn(i, n);
      
      array.push(i); //recording the piece
      chessBoard.togglePiece(x, y); //adding the piece
      
      if (chessBoard.hasAnyRooksConflicts()) {
        if (array[array.length - 1] !== n * n) { //last is 16 and its failing)
          addRook(array, n, x, y); 
        } else {
          array.pop();
          array[array.length - 1] += 1;
          addRook(array, n, x, y);
        }
        array.pop();
        chessBoard.togglePiece(x, y);        
      } else if (array.length === n) {
        array.pop();
        array[array.length - 1] += 1;
        addRook(array, n, x, y);
      }
    }
    
    // found a solution after adding 4th piece, and 4th piece is not at 16
    if (array.length === n) {
      solutionCount++;
      array.pop();
      array[array.length - 1] += 1;
      
      addRook(array, n, x, y);
    } 
  
  };
  
  addRook([], n, 0, 0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
