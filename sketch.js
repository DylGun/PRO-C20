
var cat, catImage, mouse, mouseImage;

var catImg2;

function preload() {
    //load the images here
    catImage = loadImage("catRunning")
    mouseImage = loadImage("mouseRunning")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    text(mouseX + ',' + mouseY, 10, 45);

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("catRunning", catImg2);
    cat.changeAnimation("catRunning");
}

}
