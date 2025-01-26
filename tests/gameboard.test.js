import Gameboard from "../src/gameboard"

const board = new Gameboard();

describe("Gameboard", () => {
    test("placeShip horizontally", () => {
        board.placeShip("carrier", { x: 0, y: 0 });
        const gameBoard = board.getBoard();
        for (let i = 0; i < 5; i++) {
            expect(gameBoard[0][i]).toBe("carrier");
        }
    });

    test("placeShip vertically", () => {
        board.ships.carrier.changeOrientation(); // Change to vertical
        board.placeShip("carrier", { x: 0, y: 0 });
        const gameBoard = board.getBoard();
        for (let i = 0; i < 5; i++) {
            expect(gameBoard[i][0]).toBe("carrier");
        }
    });

    test("gameOver", () => {
        // Place all ships on the board
        board.placeShip("carrier", { x: 0, y: 0 });
        board.placeShip("battleship", { x: 1, y: 0 });
        board.placeShip("cruiser", { x: 2, y: 0 });
        board.placeShip("submarine", { x: 3, y: 0 });
        board.placeShip("destroyer", { x: 4, y: 0 });
    
        // Attack each index of the board
        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                board.receiveAttack({ x, y });
            }
        }
    
        // Check if game is over
        expect(board.gameOver()).toBe(true);
    });
    
});