
const PEDESTAL_DEFAULT_X_POSITION = 400;
const PEDESTAL_DEFAULT_Y_POSITION = canvas.height - 200;
const PEDESTAL_DEFAULT_WIDTH = Math.floor(Math.random() * 30 + 30);
const PEDESTAL_DEFAULT_HEIGHT = 200;

let Pedestal = function (x,y,width,height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.nextGame = function () {
        this.x -= 10;
    }
};
