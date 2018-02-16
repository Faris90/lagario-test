var Cell = require('./Cell');

function Food() {
    Cell.apply(this, Array.prototype.slice.call(arguments));
	
    this.cellType = 1;
}

module.exports = Virus;
Virus.prototype = new Cell();

Virus.prototype.calcMove = function () {
    // Food has no need to move
}

Virus.prototype.calcMovePhys = function () {
    // Food has no need to move
}

// Main Functions

Virus.prototype.onConsume = function(consumer,gameServer) {
    gameServer.currentFood--;
    client.position.x = Math.floor(Math.random() * 10000) + 0;
client.position.y = Math.floor(Math.random() * 10000) + 0;
}
