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
  var solution = new Board({n:n});
  var failCounter = 0;
  var pieceCounter = 0;
  var locations = [];


  var insertingPiece = function(i, j) {
    // place a piece
    // //loop rows
    // for (var x = i; x < n; x++) {
    // //loop columns
    //   for (var y = j; y < n; y++) {
    //     solution.togglePiece(x, y);
    //     if (solution.hasAnyRowConflicts()) {
    //       solution.togglePiece(x, y);
    //     } else {
    //       //worry about x or y too big
    //       insertingPiece(x + 1, y);
    //     }
    //   }
    //   //worry about y too big
    // }
    //worry about x too big
    // does it pass the test?
    // if pass place another piece on board at next location
    // if doesn't pass, and the piece not at the end
    // then pop the piece and place at next location
    // if doesn't pass and piece is at the end, then pop 2 piece
    //

  };

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

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
