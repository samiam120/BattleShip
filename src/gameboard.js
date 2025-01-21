import ships from "./ship";
export default class Gameboard{

    constructor(){
        this.board = Array(10).fill("").map(() => Array(10).fill(""));
    }

    //coord is an object with x and y properties indicating the start of the ship {x, y}
    //shipName must be  one of the following: carrier, battleship, cruiser, submarine, destroyer
    placeShip(shipName, coord){
        if(ships.shipName === undefined){
            throw new Error("Ship does not exist");
        }
        if(coord.x + ship.length > board.length || coord.y + ship.length > board[0].length){
            return false;
        }

        const ship = ships[shipName];
        for(let i = 0; i < ship.length; i++){
            this.board[coord.x + i][coord.y] = ship.name;
        }
        return true;
    }


    //receive attack fubction that takes pair of coordinates,
    //determines whether or not the attack hit a ship and then send the 
    //hit function to the correct ship, or records coordinates of missed shot

    //gameboard should keep track of missed attacks to dislay properly

    //report whether or not all of their ships have been sunk


}
