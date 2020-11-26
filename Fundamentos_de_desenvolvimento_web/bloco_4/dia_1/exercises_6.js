//peça de xadrez
let chessPiece = "xablau";

//retorne os movimentos
switch (chessPiece.toLowerCase()) {
  case "bishop":
    console.log("diagonals");
    break;
  case "pawn":
    console.log(
      "One space always moves forward, except for the first movement, when two spaces can be moved"
    );
    break;
  case "rook":
    console.log("Moves in a straight line, both vertically and horizontally");
    break;
  case "queen":
    console.log(
      "vertical, horizontal, diagonal and as many houses as you need"
    );
    break;
  case "knight":
    console.log("L-shaped");
    break;
  case "king":
    console.log("Can move in any direction, but only one house at a time");
    break;
  default:
    console.log('error: This piece not exist');
    break;
}
