class Ship {
  constructor(name, length) {
    this.name = name;
    this._length = length;
    this.health = length;
    this.horizontal = true; 
  }

  hit() {
    if (this.health === 0) {
      return;
    }

    this.health--;
  }

  changeOrientation() {
    this.horizontal = !this.horizontal;
  }

  getOrientation() {
    return this.horizontal;
  }

  hitCount() {
    return this.health;
  }

  isSunk() {
    return this.health <= 0;
  }

  length() {
    return this._length;
  }
}

export const ships = () => {
  return {
    carrier: new Ship("carrier", 5),
    battleship: new Ship("battleship", 4),
    cruiser: new Ship("cruiser", 3),
    submarine: new Ship("submarine", 3),
    destroyer: new Ship("destroyer", 2),
  };
};
