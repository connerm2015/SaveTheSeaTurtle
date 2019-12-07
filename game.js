var ctx;
var imgBg;
var imgDrops;
var x = 0;
var y = 0;
var amt = 2;
var enemy = [];
var bX = 10;
var bY = 150;
var gravity = 2;
var score = 0;

//images
imgBg = new Image();
var turtle = new Image();

turtle.src = "images/turtle.png";

// audio files
var up = false;
var down = false;
var space = false;


var fly = new Audio();
var scor = new Audio();

fly.src = "sounds/fly.mp3";
scor.src = "sounds/score.mp3";

//move up
document.addEventListener("keydown",moveUp);

function moveUp(){
    bY -= 35;
    fly.play();
}


function drawBackground(){  
    ctx.drawImage(imgBg, 0, 0); //Background
}

function draw() {
    drawBackground();
    //draws the turtle to canvas
    ctx.drawImage(turtle,bX,bY);



    for (var i=0; i < amt; i++){
        
        ctx.drawImage (enemy[i].image, enemy[i].x, enemy[i].y); //The rain drop

        enemy[i].x += enemy[i].speed; //Set the falling speed
            
        if (enemy[i].x > 500)  {  //Repeat the raindrop when it falls out of view
            enemy[i].x = -25 //Account for the image size
            enemy[i].y = Math.random() * 600;    //Make it appear randomly along the width    
        }

    }  

    bY += gravity;

    // //score count
    // ctx.fillStyle = "#000";
    // ctx.font = "20px Verdana";
    // ctx.fillText("Score : "+score,10,cvs.height-20);
    
    // requestAnimationFrame(draw);
    
}

function setup() {
    var canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        
        imgBg.src = "images/bg.png";
        setInterval(draw, 40);
        for (var i = 0; i < amt; i++) {
            var fallingDr = new Object();
            fallingDr["image"] =  new Image();
            fallingDr.image.src = 'images/shark.png';
            //falls to random points on x and y axis
            fallingDr["x"] = Math.random() * 20;
            fallingDr["y"] = Math.random() * 1000;
            fallingDr["speed"] = 3 + Math.random() *5;
            enemy.push(fallingDr);
        }

    }
}




setup();
