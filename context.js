var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var mario = new Image();
mario.src = "mario.png";

var player = {
    x: 50,
    y: canvas.height - 100,
    width: 32,
    height: 32,
    frameX: 0,
    frameY: 0,
    speed: 5,
    isJumping: false,
    jumpHeight: 100
};

function drawPlayer() {
    context.drawImage(
        mario,
        player.frameX * player.width,
        player.frameY * player.height,
        player.width,
        player.height,
        player.x,
        player.y,
        player.width,
        player.height
    );
}

function movePlayer() {
    if (player.isJumping) {
        if (player.y > canvas.height - player.jumpHeight) {
            player.y -= player.speed;
        } else {
            player.isJumping = false;
        }
    } else if (player.y < canvas.height - player.height) {
        player.y += player.speed;
    }
}

function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    movePlayer();
    drawPlayer();

    requestAnimationFrame(update);
}

document.addEventListener("keydown", function (event) {
    if (event.code === "Space" && player.y === canvas.height - player.height) {
        player.isJumping = true;
    }
});

mario.onload = function () {
    update();
};
