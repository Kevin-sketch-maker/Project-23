//When the mission starts, you will see a red container, helicopter, and the package which is hidden behind the helicopter. This is done in code by design
//Whichever body is added to the world first is kept below the one which comes after it, thereby hiding the previously created bodies behind the newly created ones
//Write code to move the helicopter left and right and according to helicopter movement translate the package body
//On the press of the down arrow key, you have to drop the package.
//Ensure that the package does not bounce and stays inside the red drop zone.
//Make sure the project works before you submit it.
//*Refer to the images given above for reference.

var helicoptersprite
var helicopterspriteimage
var packagesprite
var packagespriteimage
var box1sprite
var box2sprite
var box3sprite

function preload() {
    helicopterspriteimage = loadImage("helicopter.png")
    packagespriteimage = loadImage("package.png")
}

function setup(){
    createCanvas(1000,800);
    helicoptersprite = createSprite(600,200)
    packagesprite = createSprite(600,300)
    box1sprite = createSprite(500,700,100,15)
    box1sprite.shapeColor = "red"
    box2sprite = createSprite(450,675,15,50)
    box2sprite.shapeColor = "red"
    box3sprite = createSprite(550,675,15,50)
    box3sprite.shapeColor = "red"
    helicoptersprite.addImage("helicopter",helicopterspriteimage)
    packagesprite.addImage("package",packagespriteimage)
    packagesprite.scale = 0.15
}

function draw() {
background("black");
    if (keyDown("LEFT_ARROW")){
        helicoptersprite.velocityX = -4.5
        packagesprite.velocityX = -4.5
    }
    
    if (keyDown("RIGHT_ARROW")){
        helicoptersprite.velocityX = 4.5
        packagesprite.velocityX = 4.5
    }
    
    if (keyDown("DOWN_ARROW")){
        packagesprite.velocityY = 4.5
    }
    if (packagesprite.y > 300){
        packagesprite.velocityX = 0
    }
    
    if (packagesprite.y > 680){
        packagesprite.velocityY = 0 
    }
    drawSprites();
}



