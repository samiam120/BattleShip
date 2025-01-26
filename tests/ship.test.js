import { ships as shipList } from "../src/ship";

const ships = shipList();

describe("ship", () => {

    test("isSunk", () => {
        const carrier = ships.carrier;
        expect(carrier.isSunk()).toBe(false);
    });

    test("hit", () => {
        const carrier = ships.carrier;
        carrier.hit();
        expect(carrier.health).toBe(4);
    });
    test("isSunk after 5 hits", () => {
        const ship = ships.carrier;
        ship.hit();
        ship.hit();
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });
});