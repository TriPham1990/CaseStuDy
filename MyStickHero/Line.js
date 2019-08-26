
let Line = function (x, y, moveX, moveY, width, dy, isDrawLine, isToDumpLine, radius) {
    this.x = x;
    this.y = y;
    this.moveX = moveX;
    this.moveY = moveY;
    this.width = width;
    this.dy = dy;
    this.isDrawLine = isDrawLine;
    this.isToDumpLine = isToDumpLine;
    this.radius = radius;
    this.nextGame = function () {
        this.x -= 10;
    }
};