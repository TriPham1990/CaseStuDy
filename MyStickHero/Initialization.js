let img = "ninja";
let userScore = 0;

let pedestalOne = new Pedestal(PEDESTAL_DEFAULT_X_POSITION, PEDESTAL_DEFAULT_Y_POSITION,
    Math.floor(Math.random() * 10 + 40), PEDESTAL_DEFAULT_HEIGHT);

let pedestalTwo = new Pedestal(pedestalOne.x + pedestalOne.height + Math.floor(Math.random() * 350 + 10),
    canvas.height - 200,PEDESTAL_DEFAULT_WIDTH, PEDESTAL_DEFAULT_HEIGHT);

let pedestalThree = new Pedestal(pedestalTwo.x + pedestalTwo.height + Math.floor(Math.random() * 350 + 10),
    canvas.height - 200,PEDESTAL_DEFAULT_WIDTH, PEDESTAL_DEFAULT_HEIGHT);

let line = new Line(pedestalOne.x + pedestalOne.width - 5, pedestalOne.y + 5,
    pedestalOne.x + pedestalOne.width - 5, pedestalOne.y, 10, 10, false, false, 0);

let ninja = new Ninja(pedestalOne.x, pedestalOne.y - 45, 10, 50, 50);


start();

