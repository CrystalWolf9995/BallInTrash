
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var groundObj
function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);
	engine = Engine.create();
	world = engine.world;
    groundObj=new Ground(width/2,670,width,20);
    leftSide=new Ground(1100,600,20,120);
	rightSide=new Ground(1300,600,20,120);
	

	//Create the Bodies Here.
  var ball_options={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2

  }

 ball= Matter.Bodies.circle(300,300,20,ball_options);
   World.add(world,ball);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  groundObj.show();
  leftSide.show();
  rightSide.show();
  ellipse(ball.position.x,ball.position.y,20);
  drawSprites();

  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:2,y:-2});
  }
 
}



