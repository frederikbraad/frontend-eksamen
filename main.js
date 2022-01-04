
let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");

let arr = [
    [7,2,2,2,2,2,2,2,2,2],
    [7,3,0,0,0,0,0,0,6,2],
    [7,0,0,0,0,0,0,0,0,2],
    [7,0,0,0,0,0,0,0,0,8],
    [7,0,0,0,1,0,0,0,0,8],
    [7,0,0,0,0,0,0,0,0,8],
    [7,0,0,0,0,0,0,0,0,8],
    [7,0,0,0,0,0,0,0,0,2],
    [7,5,0,0,0,0,0,0,4,2],
    [7,2,2,2,2,2,2,2,2,2]
];

let baneSize = 50;

let rock = 3;
let paper = 4;
let scissor = 5;
let bane = 0;
let player = 1;
let wall = 2;
let roof = 7;
let bottom = 8;
let score = 0;
let scoreEnemy = 0;
let restart = 6;
let victories = 0;
let losses = 0;

let playerPosition = {x:0, y:0};

// images

let roofImage = new Image();
roofImage.src= 'images/roof.png';

let bottomImage = new Image();
bottomImage.src= 'images/entrance.png';

let wallImage = new Image(); 
wallImage.src= 'images/wall.png';

let wood = new Image(); 
wood.src= 'images/wood_upgrade.png';

let rockImage = new Image(); 
rockImage.src= 'images/big_rock_left.png';

let paperImage = new Image(); 
paperImage.src= 'images/big_paper.png';

let scissorImage = new Image(); 
scissorImage.src= 'images/big_scissors.png';

let playerImage = new Image(); 
playerImage.src= 'images/pepe.png';

let restartImage = new Image(); 
restartImage.src= 'images/restart.png';

// core functions

function drawScore() {
    let h = document.getElementById("pScore");
    let t = document.createTextNode("I");     
    h.appendChild(t);
   
}

function drawScore2() {      
    let j = document.getElementById("eScore"); 
    let t = document.createTextNode("I");     
    j.appendChild(t);

}

function retry() {
    window.location.reload();
    clearInterval(interval);
}

// sounds

function win(){

    let winSound = new Audio('sounds/yo.mp3');
    winSound.play();

}

function lose(){

    let loseSound = new Audio('sounds/ouch.mp3');
    loseSound.play();

}

function win2(){

    let winSound2 = new Audio('sounds/mlg-airhorn.mp3');
    winSound2.play();

}

function lose2(){

    let loseSound2 = new Audio('sounds/oof.mp3');
    loseSound2.play();

}

function tie(){

    let tieSound = new Audio('sounds/error.mp3');
    tieSound.play();

}

function walk(){

    let walkSound = new Audio('sounds/footstep.mp3');
    walkSound.play();

}

function intro(){

    let introSound = new Audio('sounds/ah-shit.mp3');
    introSound.play();

}

function victory(){

    let victorySound = new Audio('sounds/victory.mp3');
    victorySound.play();
    setTimeout(function() { window.location=window.location;},7000);
    
}

function defeat(){

    let defeatSound = new Audio('sounds/nooo.mp3');
    defeatSound.play();
    setTimeout(function() { window.location=window.location;},6000);

}



function drawMaze(){

for(let x = 0; x < arr.length; x++){
    
    for(let y = 0; y < arr[x].length; y++){
    
        
        if(arr[x][y] == rock){
            ctx.drawImage(rockImage,x*baneSize,y*baneSize,baneSize,baneSize); 
        }
        else if(arr[x][y] == paper){
            ctx.drawImage(paperImage,x*baneSize,y*baneSize,baneSize,baneSize); 
        }
        else if(arr[x][y] == scissor){
            ctx.drawImage(scissorImage,x*baneSize,y*baneSize,baneSize,baneSize); 
        }
        else if(arr[x][y] == bane){
            ctx.drawImage(wood,x*baneSize,y*baneSize,baneSize,baneSize); 
        }
        else if(arr[x][y] == roof){
            ctx.drawImage(roofImage,x*baneSize,y*baneSize,baneSize,baneSize); 
        }
        else if(arr[x][y] == bottom){
            ctx.drawImage(bottomImage,x*baneSize,y*baneSize,baneSize,baneSize); 
        }
        else if(arr[x][y] == wall){
            ctx.drawImage(wallImage,x*baneSize,y*baneSize,baneSize,baneSize); 
        }
        else if(arr[x][y] == restart){
            ctx.drawImage(restartImage,x*baneSize,y*baneSize,baneSize,baneSize); 
        }
        else if(arr[x][y] == player){

            playerPosition.x = x;
            playerPosition.y = y;
            
            ctx.drawImage(playerImage,x*baneSize,y*baneSize,baneSize,baneSize); 
        }
    }

};

};



function game(){
    let rand =  Math.floor(Math.random() * (5 - 3 + 1) + 3);

    if (rand == scissor){
        if(arr[playerPosition.x][playerPosition.y -1] == scissor){
            
            tie();
        }
        else if(arr[playerPosition.x +1][playerPosition.y] == scissor){
            
            tie();
        }
        else if(arr[playerPosition.x -1][playerPosition.y] == rock){
            
            win2();
            score++;
            drawScore();
            if(score == 3) {
                victories++;
                victory();
                
            }
        }
        else if(arr[playerPosition.x][playerPosition.y -1] == rock){
            
            win2();
            score++;
            drawScore();
            if(score == 3) {
                victories++;
                victory();
                
            }
        }
        else if(arr[playerPosition.x +1][playerPosition.y] == paper){
            
            lose();
            scoreEnemy++;
            drawScore2();
            if(scoreEnemy == 3) {
                losses++;
                defeat();
                
            }
        }
        else if(arr[playerPosition.x][playerPosition.y +1] == paper){
            
            lose();
            scoreEnemy++;
            drawScore2();
            if(scoreEnemy == 3) {
                losses++;
                defeat();
                
            }
        }
    }
    else if (rand == rock){
        if(arr[playerPosition.x][playerPosition.y -1] == scissor){
            
            lose2();
            scoreEnemy++;
            drawScore2();
            if(scoreEnemy == 3) {
                losses++;
                defeat();
                
            }
        }
        else if(arr[playerPosition.x +1][playerPosition.y] == scissor){
            
            lose2();
            scoreEnemy++;
            drawScore2();
            if(scoreEnemy == 3) {
                losses++;
                defeat();
                
            }
        }
        else if(arr[playerPosition.x -1][playerPosition.y] == rock){
            
            tie();
        }
        else if(arr[playerPosition.x][playerPosition.y -1] == rock){
            
            tie();
        }
        else if(arr[playerPosition.x +1][playerPosition.y] == paper){
            
            win();
            score++;
            drawScore();
            if(score == 3) {
                victories++;
                victory();
                
            }
        }
        else if(arr[playerPosition.x][playerPosition.y +1] == paper){
            
            win();
            score++;
            drawScore();
            if(score == 3) {
                victories++;
                victory();
                
            }
        }
    }
    else if (rand == paper){
        if(arr[playerPosition.x][playerPosition.y -1] == scissor){
            
            win2();
            score++;
            drawScore();
            if(score == 3) {
                victories++;
                victory();
                
            }
        }
        else if(arr[playerPosition.x +1][playerPosition.y] == scissor){
            
            win2();
            score++;
            drawScore();
            if(score == 3) {
                victories++;
                victory();
                
            }
        }
        else if(arr[playerPosition.x -1][playerPosition.y] == rock){
            
            lose();
            scoreEnemy++;
            drawScore2();
            if(scoreEnemy == 3) {
                losses++;
                defeat();
                
            }
        }
        else if(arr[playerPosition.x][playerPosition.y -1] == rock){
            
            lose();
            scoreEnemy++;
            drawScore2();
            if(scoreEnemy == 3) {
                losses++;
                defeat();
                
            }
        }
        else if(arr[playerPosition.x +1][playerPosition.y] == paper){
            
            tie();
        }
        else if(arr[playerPosition.x][playerPosition.y +1] == paper){
            
            tie();
        }
    }
drawMaze();
};

window.addEventListener("keydown", (e)=>{

    switch (e.keyCode) {
        case 37:
            if(arr[playerPosition.x -1][playerPosition.y] == bane){
                arr[playerPosition.x -1][playerPosition.y] = player
                arr[playerPosition.x][playerPosition.y] = bane
                drawMaze();
                game();
                walk();
            }
            else if(arr[playerPosition.x -1][playerPosition.y] == rock){
                arr[playerPosition.x -1][playerPosition.y] = player
                arr[playerPosition.x][playerPosition.y] = bane
                arr[playerPosition.x -1][playerPosition.y] = rock
                drawMaze();
                game();
            }
            else if(arr[playerPosition.x -1][playerPosition.y] == restart){
                arr[playerPosition.x -1][playerPosition.y] = player
                arr[playerPosition.x][playerPosition.y] = bane
                arr[playerPosition.x -1][playerPosition.y] = restart
                drawMaze();
                game();
                retry();
            }
        
            break;
        case 38:
            if(arr[playerPosition.x][playerPosition.y -1] == bane){
                arr[playerPosition.x][playerPosition.y -1] = player
                arr[playerPosition.x][playerPosition.y] = bane
                drawMaze();
                game();
                walk();
            }
            else if(arr[playerPosition.x][playerPosition.y -1] == rock){
                arr[playerPosition.x][playerPosition.y -1] = player
                arr[playerPosition.x][playerPosition.y] = bane
                arr[playerPosition.x][playerPosition.y -1] = rock
                drawMaze();
                game();
            }
            else if(arr[playerPosition.x][playerPosition.y -1] == scissor){
                arr[playerPosition.x][playerPosition.y -1] = player
                arr[playerPosition.x][playerPosition.y] = bane
                arr[playerPosition.x][playerPosition.y -1] = scissor
                drawMaze();
                game();
            }
            
            break;
        case 39:
            if(arr[playerPosition.x +1][playerPosition.y] == bane){
                arr[playerPosition.x +1][playerPosition.y] = player
                arr[playerPosition.x][playerPosition.y] = bane
                drawMaze();
                game();
                walk();
            }
            else if(arr[playerPosition.x +1][playerPosition.y] == scissor){
                arr[playerPosition.x +1][playerPosition.y] = player
                arr[playerPosition.x][playerPosition.y] = bane
                arr[playerPosition.x +1][playerPosition.y] = scissor
                drawMaze();
                game();
            }
            else if(arr[playerPosition.x +1][playerPosition.y] == paper){
                arr[playerPosition.x +1][playerPosition.y] = player
                arr[playerPosition.x][playerPosition.y] = bane
                arr[playerPosition.x +1][playerPosition.y] = paper
                drawMaze();
                game();
            }
            
            break;
        
        case 40:
            if(arr[playerPosition.x][playerPosition.y +1] == bane){
                arr[playerPosition.x][playerPosition.y +1] = player
                arr[playerPosition.x][playerPosition.y] = bane
                drawMaze();
                game();
                walk();
            }
            else if(arr[playerPosition.x][playerPosition.y +1] == paper){
                arr[playerPosition.x][playerPosition.y +1] = player
                arr[playerPosition.x][playerPosition.y] = bane
                arr[playerPosition.x][playerPosition.y +1] == paper
                drawMaze();
                game();
            }
            else if(arr[playerPosition.x][playerPosition.y +1] == restart){
                arr[playerPosition.x][playerPosition.y +1] = player
                arr[playerPosition.x][playerPosition.y] = bane
                arr[playerPosition.x][playerPosition.y +1] == restart
                drawMaze();
                game();
                retry();
            }
            
            break; 

    }
});

window.addEventListener("load", drawMaze, game);
