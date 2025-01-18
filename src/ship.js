export default class Ship {
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

