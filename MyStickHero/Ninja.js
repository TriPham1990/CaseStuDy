
let Ninja = function (x,y,speed,width,height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.speed = speed;
    this.step = 1;
    this.drawNinja = function (img) {
        this.image.src = img + this.step +".png";
        context.drawImage(this.image,this.x,this.y,this.width,this.height);
    };
    this.moveRight = function () {
        this.x += this.speed;
        if(this.step === 2){
            this.step = 1;
        } else {
            this.step = 2;
        }
    };
    this.moveDown = function () {
        this.y += this.speed;
        if(this.y + this.height >= canvas.height){
            this.y = canvas.height - this.height +5;
        }
    };
    this.nextGame = function () {
        this.x -= 10;
    };
    this.isMoveDown = false;
};
