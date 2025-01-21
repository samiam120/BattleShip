import { ships } from "../src/ship.js";

describe("ship", () => {

    test("isSunk", () => {
        const ship = ships.carrier;
        expect(ship.isSunk()).toBe(false);
    });

    test("hit", () => {
        const ship = ships.carrier;
        ship.hit();
        expect(ship.health).toBe(4);
    });
    test("isSunk after 5 hits", () => {
        const ship =  ships.carrier;
        ship.hit();
        ship.hit();
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });
});