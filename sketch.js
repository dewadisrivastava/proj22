var starImg,bgImg;
var star, starBody;
var fairy,fairyImg
//create variable for fairy sprite and fairyImg



function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImg=loadAnimation("images/fairyImage1.png")
}

function setup() {
	createCanvas(800, 750);
  
	//write code to play fairyVoice sound
  fairy=createSprite(200,500)
  fairy.addAnimation("fairy",fairyImg)
  fairy.scale=0.3
	//create fairy sprite and add animation for fairy
 

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	

	starBody =createSprite(650 ,5,5,5);
	
	
	

}


function draw() {
  background(bgImg);

 if(starBody.isTouching(fairy) && starBody.y===500){
	starBody.velocityY=0  
	fairy.velocityX=0
   }

   if(star.isTouching(fairy) && star.y===500){
	star.velocityY=0  
   }
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(keyDown("RIGHT_ARROW")){
	fairy.velocityX=2
}

if(fairy.x===750){
 fairy.velocityX=0
}
if(keyDown("DOWN_ARROW")){
	starBody.velocityY=15
}
  drawSprites();

}

function keyPressed() {

	
	//writw code to move fairy left and right
	
}
