import Gameboard from "../src/gameboard"

const board = new Gameboard();

describe("Gameboard", () => {
    test("placeShip horizontally", () => {
        const board = new Gameboard();
        board.placeShip("carrier", { x: 0, y: 0 });
        const gameBoard = board.getBoard();
        for (let i = 0; i < 5; i++) {
            expect(gameBoard[0][i]).toBe("carrier");
        }
    });

    test("placeShip vertically", () => {
        const board = new Gameboard();
        board.ships.carrier.changeOrientation(); // Change to vertical
        board.placeShip("carrier", { x: 0, y: 0 });
        const gameBoard = board.getBoard();
        for (let i = 0; i < 5; i++) {
            expect(gameBoard[i][0]).toBe("carrier");
        }
    });
});


