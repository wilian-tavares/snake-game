let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = []
snake[0] = {
    x: 8 * box,
    y: 8 * box,
}
let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box,
}

function criarBG() {
    context.fillStyle = 'lightgreen';
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood() {
    context.fillStyle = 'red'
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update(event) {
    if (event.keycode == 37 && direction != 'right') direction = 'left';
    if (event.keycode == 38 && direction != 'down') direction = 'up';
    if (event.keycode == 39 && direction != 'left') direction = 'right';
    if (event.keycode == 40 && direction != 'up') direction = 'down';
}


function iniciarJogo() {
    if (snake[0].x > 15 * box && direction == 'right') snake[0].x = 0;
    if (snake[0].x < 0 * box && direction == 'left') snake[0].x = 16 * box;

    if (snake[0].y > 15 * box && direction == 'up') snake[0].y = 0;
    if (snake[0].y < 0 * box && direction == 'down') snake[0].y = 16 * box;


    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (directin == "right") snakeX += box;
    if (directin == "left") snakeX -= box;
    if (directin == "up") snakeY -= box;
    if (directin == "down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: sneaky
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);

