class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.health = length;
  }

  hit() {
    if (this.health === 0) {
      return;
    }

    this.health--;
  }

  hitCount() {
    return this.health;
  }

  isSunk() {
    return this.health <= 0;
  }

  length() {
    return this.length;
  }
}

export const ships = {
  carrier: new Ship("carrier", 5),
  battleship: new Ship("battleship", 4),
  cruiser: new Ship("cruiser", 3),
  submarine: new Ship("submarine", 3),
  destroyer: new Ship("destroyer", 2),
};
