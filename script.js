let canvas = document.getElementById("snake"); //criar elemento que irá rodar o jogo
let context = canvas.getContext("2d"); //....
let box = 32;
let snake = []; //criar cobrinha como lista, já que ela vai ser uma série de coordenadas, que quando pintadas, criam os quadradinhos
let ponto = 0;


snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}


function criarBG() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, 16 * box, 16 * box); //desenha o retângulo usando x e y e a largura e altura setadas
}

function criarCobrinha() {
    for (let i = 0; i < snake.length; i++) {
        context.fillStyle = "orange";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood() {
    context.fillStyle = "PaleVioletRed";
    context.fillRect(food.x, food.y, box, box);
}

//quando um evento acontece, detecta e chama uma função
document.addEventListener('keydown', update);

function update(event) {
    if (event.keyCode == 37 && direction != 'right' || event.keyCode == 65 && direction != 'right') direction = 'left';
    if (event.keyCode == 38 && direction != 'down' || event.keyCode == 87 && direction != 'down') direction = 'up';
    if (event.keyCode == 39 && direction != 'left' || event.keyCode == 68 && direction != ' left') direction = 'right';
    if (event.keyCode == 40 && direction != 'up' || event.keyCode == 83 && direction != 'up') direction = 'down';
}

function pontuacao(ponto) {
    document.getElementById('pontos').innerHTML = ponto;
    sessionStorage.setItem('ponto', ponto);
}

function iniciarJogo() {

    // Finaliza o Game se bater nas Paredes

    if (snake[0].x > 15 * box && direction == "right") {
        fimDeJogo()
    };
    if (snake[0].x < 0 && direction == 'left') {
        fimDeJogo()
    };

    if (snake[0].y > 15 * box && direction == "down") {
        fimDeJogo()
    };
    if (snake[0].y < 0 && direction == 'up') {
        fimDeJogo()
    };

    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            fimDeJogo()
        }
    }

    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;


    if (snakeX != food.x || snakeY != food.y) {
        snake.pop(); //pop tira o último elemento da lista
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;

        ponto += 1;
        console.log(ponto);




        pontuacao(ponto);
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead); //método unshift adiciona como primeiro quadradinho da cobrinha

}




let jogo = setInterval(iniciarJogo, 100);

function fimDeJogo() {
    clearInterval(jogo);
    window.location.href = 'game-over.html';
}

function retornarJogo() {
    window.location.href = 'game-app.html';
}

function tentarNovamente() {
    window.location.href = 'game-inicio.html';
}


