import Ship from "../src/ship.js" 

describe("ship", () => {

    test("isSunk", () => {
        const ship = new Ship("carrier", 5);
        expect(ship.isSunk()).toBe(false);
    });

    test("hit", () => {
        const ship = new Ship("carrier", 5);
        ship.hit();
        expect(ship.health).toBe(4);
    });
    test("isSunk after 5 hits", () => {
        const ship = new Ship("carrier", 5);
        ship.hit();
        ship.hit();
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });
});