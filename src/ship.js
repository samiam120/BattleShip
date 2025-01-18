class Ship{
    constructor(name, length){
        this.name = name;
        this.length = length;
        this.health = length;
    }

    hit(){
        this.health--;
    }

    isSunk(){
        return this.health <= 0;
    }
}

module.exports = Ship;