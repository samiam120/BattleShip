export default class Gameboard{

    constructor(){
        this.board = Array(10).fill("").map(() => Array(10).fill(""));
    }

    //coord is an object with x and y properties indicating the start of the ship
    placeShipHorizontal(ship, coord){

    }


    //receive attack fubction that takes pair of coordinates,
    //determines whether or not the attack hit a ship and then send the 
    //hit function to the correct ship, or records coordinates of missed shot

    //gameboard should keep track of missed attacks to dislay properly

    //report whether or not all of their ships have been sunk


}

module.exports = Gameboard