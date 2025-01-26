import { ships as shipList } from "./ship.js";
export default class Gameboard {
  constructor() {
    this.board = Array(10)
      .fill("")
      .map(() => Array(10).fill(""));
    this.ships = shipList();
  }

  //coord is an object with x and y properties indicating the start of the ship {x, y}
  //shipName must be  one of the following: carrier, battleship, cruiser, submarine, destroyer

  placeShip(shipName, startCoord){
    if (!this.ships[shipName]) {
      console.error("invald ship name");
    }

    if(startCoord.x >= this.board.length || startCoord.x < 0 || startCoord.y >= this.board[0].length || startCoord.y < 0){
      throw new Error ("ship coordinates are off the board");
    }

    const ship = this.ships[shipName];
    const startX = startCoord.x;
    const startY = startCoord.y;

    if(ship.getOrientation()){
      if(startCoord.y + ship.length() > this.board.length){
        throw new Error ("ship coordinates are off the board");
      }else{
        for(let i = 0; i < ship.length(); i++){
          this.board[startX][startY+i] = ship.name;
        }
      }
    }else{
      if(startCoord.x + ship.length() > this.board.length){
        throw new Error ("ship coordinates are off the board");
      }else{
        for(let i = 0; i < ship.length(); i++){
          this.board[startX+i][startY] = ship.name;
        }
      }
    }
    return true;
  };

  getBoard(){
    return this.board;
  };

  receiveAttack = (coord) => {
    if (this.board[coord.x][coord.y] === "") {
      this.board[coord.x][coord.y] = "miss";
    } else {
      this.board[coord.x][coord.y] = "hit";

    }
  };
}
