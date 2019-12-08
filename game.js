var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// load images

var turtle = new Image();
var bg = new Image();
var fg = new Image();




turtle.src = "images/turtle.png";
bg.src = "images/bg.png";
shark.src = "images/shark.png";
jellyfish.src = "images/jellyfish.png";
bag.src = "images/bag.png";
can.src = "images/can.png";
straw.src = "images/straw.png";
net.src = "images/net.png";


// some variables


var bX = 10;
var bY = 150;

var gravity = 2;

var score = 0;

// audio files
var up = false;
var down = false;
var space = false;


var fly = new Audio();
var scor = new Audio();

fly.src = "sounds/fly.mp3";
scor.src = "sounds/score.mp3";



var gap = 150;

// on key down

document.addEventListener("keydown",moveUp);

function moveUp(){
    bY -= 35;
    fly.play();
}

// enemy coordinates

var enemy = [];

enemy[0] = {
    x : cvs.width,
    y : 0
};

var images = [shark,jellyfish,bag,can,straw,net];

var shark = new Image();
var jellyfish = new Image();
var bag = new Image();
var can = new Image();
var straw = new Image();
var net = new Image();



// draw images

function draw(){

    //draws bg to canvas
    ctx.drawImage(bg,0,0);
    


    for(var i = 0; i < enemy.length; i++){

        constant = shark.height+gap;
        ctx.drawImage(shark,enemy[i].x,enemy[i].y);
        ctx.drawImage(jellyfish,enemy[i].x,enemy[i].y+constant);


        enemy[i].lefta;


        enemy.prototype.update = function(playerX, playerY) {
            // Rotate us to face the player
            this.rotation = Math.atan2(playerY - this.y, playerX - this.x);

            // Move towards the player
            this.x += Math.cos(this.rotation) * this.speed;
            this.y += Math.sin(this.rotation) * this.speed;
        }

        if( enemy[i].x == 300 ){
            enemy.push({
                x : cvs.width,
                y : Math.floor(Math.random()*shark.height)-shark.height,
            });
        }

        // detect collision

        if( bX + turtle.width >= enemy[i].x && bX <= enemy[i].x + shark.width && (bY <= enemy[i].y + shark.height || bY+turtle.height >= enemy[i].y+constant) || bY + turtle.height >=  cvs.height - fg.height){
            location.reload(); // reload the page
        }

        if(enemy[i].x == 5){
            score++;
            scor.play();
        }




    }

    //draws the turtle to canvas
    ctx.drawImage(turtle,bX,bY);

    bY += gravity;

    //score count
    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score : "+score,10,cvs.height-20);

    requestAnimationFrame(draw);

}

draw();
