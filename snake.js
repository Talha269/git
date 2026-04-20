const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const grid = 200;

let snake = [{x:160,y:160}];
let dx = grid;
let dy = 0;

let food = {
    x: 320,
    y: 320
};

document.addEventListener("keydown", changeDirection);

function changeDirection(event){
    if(event.key === "ArrowLeft"){ dx=-grid; dy=0;}
    if(event.key === "ArrowUp"){ dx=0; dy=-grid;}
    if(event.key === "ArrowRight"){ dx=grid; dy=0;}
    if(event.key === "ArrowDown"){ dx=0; dy=grid;}
}

function gameLoop(){

    const head = {x: snake[0].x + dx, y: snake[0].y + dy};

    snake.unshift(head);

    if(head.x === food.x && head.y === food.y){
        food.x = Math.floor(Math.random()*20)*grid;
        food.y = Math.floor(Math.random()*20)*grid;
    } else{
        snake.pop();
    }

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="red";
    ctx.fillRect(food.x,food.y,grid,grid);

    ctx.fillStyle="green";

    snake.forEach(part=>{
        ctx.fillRect(part.x,part.y,grid,grid);
    });

}

setInterval(gameLoop,150);