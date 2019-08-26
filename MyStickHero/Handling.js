// xử lí ấn nút :
document.addEventListener('keyup', function (event) {
    if (event.keyCode === 32) {
        line.isDrawLine = false;
        line.isToDumpLine = true;
    }
});
document.addEventListener('keydown', function (event) {
    if (!line.isToDumpLine) {
        if (event.keyCode === 32) {
            line.isDrawLine = true;
        }
    }
});
//


// xử lí độ dài Line :
function isHandUpdateLine() {
    if (line.isDrawLine) {
        line.moveY -= line.dy;
        line.radius = line.moveY - line.y;
    }
}

//
// xử lí Line đổ xuống :
function isHandToDumpLine() {
    if (line.isToDumpLine) {
        line.moveY += 20;
        line.moveX = (Math.sqrt(Math.pow(line.radius, 2) - Math.pow((line.moveY - line.y), 2)) + line.x);
        if (!ninja.isMoveDown) { //nếu ninja không đi xuống :
            if (line.moveY >= pedestalOne.y + 5) {
                line.moveY = pedestalOne.y + 5;
                drawPedestal(pedestalThree);
                isHandMoveNinja();
            }
        } else { // nếu ninja đi xuống :
            ninja.moveDown();
        }
    }
}

//
//xử lí ninja di chuyển :
function isHandMoveNinja() {
    if (line.moveX < pedestalTwo.x + pedestalTwo.width) {
        if (ninja.x < pedestalTwo.x && ninja.x + 20 < line.moveX) {
            ninja.moveRight();
        } else if (ninja.x + ninja.width > line.moveX && line.moveX < pedestalTwo.x) {
            ninja.isMoveDown = true;
        } else if (ninja.x + ninja.width / 2 >= pedestalTwo.x && pedestalTwo.x > PEDESTAL_DEFAULT_X_POSITION) { // xử lí khi ninja đi qua line xong :
            ninja.nextGame();
            line.nextGame();
            pedestalOne.nextGame();
            pedestalTwo.nextGame();
            pedestalThree.nextGame();
        } else if (pedestalTwo.x <= PEDESTAL_DEFAULT_X_POSITION) {
            userScore++;
            nextGame();
        }
    } else {
        if (ninja.x + ninja.width < line.moveX) {
            ninja.moveRight();
        } else if (ninja.x + ninja.width > line.moveX) {
            ninja.isMoveDown = true;
        }
    }
}

//
// xử lí next game ;
function nextGame() {
    pedestalOne = new Pedestal(PEDESTAL_DEFAULT_X_POSITION, PEDESTAL_DEFAULT_Y_POSITION,
        Math.floor(Math.random() * 60 + 30), PEDESTAL_DEFAULT_HEIGHT);

    pedestalTwo = new Pedestal(pedestalOne.x + pedestalOne.height + Math.floor(Math.random() * 350 + 10),
        canvas.height - 200,PEDESTAL_DEFAULT_WIDTH, PEDESTAL_DEFAULT_HEIGHT);

    pedestalThree = new Pedestal(pedestalTwo.x + pedestalTwo.height + Math.floor(Math.random() * 350 + 10),
        canvas.height - 200, PEDESTAL_DEFAULT_WIDTH, PEDESTAL_DEFAULT_HEIGHT);

    line = new Line(pedestalOne.x + pedestalOne.width - 5, pedestalOne.y + 5,
        pedestalOne.x + pedestalOne.width - 5, pedestalOne.y, 10, 10, false, false, 0);

    ninja = new Ninja(pedestalOne.x, pedestalOne.y - 45, 10, 50, 50);
}
//
//xử lí hiện điểm :
function drawScore() {
    context.beginPath();
    context.font = '30pt Calibri';
    context.fillStyle = 'black';
    context.fillText('Score : '+userScore,10,35 );
    context.closePath();
}

//xử lí kết thúc game:
function isHandGameOver() {
    if (ninja.y + ninja.height >= canvas.height) {
        context.beginPath();
        context.font = '50pt Calibri';
        context.fillStyle = 'black';
        context.fillText('Game Over!', 530, 300);
        context.closePath();
    }
}


// vẽ bệ đá:
function drawPedestal(pedestal) {
    context.beginPath();
    context.fillRect(pedestal.x, pedestal.y, pedestal.width, pedestal.height);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
}

//
// vẽ Line:
function drawLine() {
    context.beginPath();
    context.moveTo(line.x, line.y);
    context.lineTo(line.moveX, line.moveY);
    context.lineWidth = line.width;
    context.fillStyle = "black";
    context.stroke();
    context.closePath();
}

//

// khởi dộng game:
function start() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    ninja.drawNinja(img);
    drawPedestal(pedestalOne);
    drawPedestal(pedestalTwo);
    drawLine();
    drawScore();
    isHandUpdateLine();
    isHandToDumpLine();
    isHandGameOver();
    requestAnimationFrame(start);
}